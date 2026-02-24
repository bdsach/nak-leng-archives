import React from "react";
import { figures } from "../data/Figures";
import { FigureCard } from "./FigureCard";
import { useSearchParams } from "react-router";

export const DirectorySection: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. ดึงค่าจาก URL Query
  const searchQuery = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  const itemsPerPage = 12; // แสดงหน้าละ 12 คน

  // 2. กรองข้อมูล (Filter)
  const filteredFigures = figures.filter((f) => {
    const searchStr = `${f.firstName} ${f.lastName} ${f.alias}`.toLowerCase();
    return searchStr.includes(searchQuery.toLowerCase());
  });

  // 3. คำนวณการแบ่งหน้า (Pagination)
  const totalCount = filteredFigures.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredFigures.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // ฟังก์ชันเปลี่ยนหน้า
  const goToPage = (page: number) => {
    setSearchParams({ q: searchQuery, page: page.toString() });
    window.scrollTo({ top: 500, behavior: "smooth" }); // เลื่อนจอขึ้นเมื่อเปลี่ยนหน้า
  };

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20">
          {/* Section header */}
          <div className="border-primary mb-12 flex items-center justify-between border-l-4 pl-4">
            <div>
              <h3 className="font-playpen-sans-thai text-2xl font-bold tracking-wider text-white uppercase">
                รายชื่อทั้งหมด
              </h3>
            </div>
          </div>

          {/* Grid */}
          {paginatedItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginatedItems.map((figure) => (
                <FigureCard key={figure.id} figure={figure} />
              ))}
            </div>
          ) : (
            <div className="font-playpen-sans-thai py-20 text-center tracking-widest text-slate-500 uppercase">
              ไม่พบข้อมูลที่คุณค้นหา
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-20 flex flex-col items-center gap-8">
              <div className="flex items-center gap-2">
                {/* ปุ่มย้อนกลับ */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => goToPage(currentPage - 1)}
                  className="border-steel/30 hover:bg-primary cursor-pointer border p-3 text-white transition-all disabled:opacity-20"
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                {/* เลขหน้า */}
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToPage(i + 1)}
                      className={`h-10 w-10 cursor-pointer font-bold transition-all ${
                        currentPage === i + 1
                          ? "bg-primary text-white"
                          : "border-steel/10 border text-slate-400 hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* ปุ่มถัดไป */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                  className="border-steel/30 hover:bg-primary cursor-pointer border p-3 text-white transition-all disabled:opacity-20"
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>

              <p className="text-[10px] font-bold tracking-[0.3em] text-slate-600 uppercase">
                Showing {startIndex + 1} -{" "}
                {Math.min(startIndex + itemsPerPage, totalCount)} of{" "}
                {totalCount} profiles
              </p>
            </div>
          )}

          {/* Load more */}
          {/* <div className="mt-20 flex flex-col items-center gap-6">
            <button className="px-10 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-black uppercase tracking-widest cursor-pointer">
              Uncover More Files
            </button>
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
              Accessing {figures.length} of {totalCount} archived profiles
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
};

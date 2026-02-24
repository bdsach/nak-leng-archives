import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export const HeroSection: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // ดึงค่าจาก URL
  const currentQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(currentQuery);

  // คอยเช็คว่าถ้า URL เปลี่ยน (เช่น กดย้อนกลับ) ให้ Update ค่าใน Input ตาม
  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) {
      navigate(`?q=${query}&page=1`);
    } else {
      handleClear(); // ถ้ากด Search ทั้งที่ว่างเปล่า ให้ล้าง Query ออก
    }
  };

  const handleClear = () => {
    setQuery("");
    navigate("?page=1"); // ล้างค่า q ออกจาก URL แต่ยังคงหน้า 1 ไว้
  };

  return (
    <section
      className="border-primary/20 relative overflow-hidden border-b px-6 py-24 lg:px-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "url(https://lh3.googleusercontent.com/aida-public/AB6AXuDi_f23r3UFzYrdhMYEA_nTeJMNalba3p6O5JqDxOJd5ibugwcMkDR25spd9vrc4w-vmWeykwBiZw1rBXehP1psyt57hMTsj8gZUmDj5PPxHq_qkVXM6RU4LKnAHZ58bo4J_-6ualmkdPShOTdDvgBTbQzeEpUgdtJc14BbRgkqLbRXXVYkScZO0GCoHNiWpK9VxylJf_06puPh_7_wyR206HoaUxTX3-ztptAjWLJBPjc5iwA27kgyADeSPBOr-UiMGy4mPZe7IaA)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center">
        <form onSubmit={handleSearch} className="relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
            <span className="material-symbols-outlined text-primary">
              search
            </span>
          </div>
          <input
            className="bg-smoke border-steel/30 focus:border-primary font-playpen-sans-thai h-20 w-full border-2 pr-28 pl-16 text-xl tracking-tight text-white uppercase italic transition-all placeholder:text-slate-600 focus:outline-none"
            placeholder="ค้นหาด้วยชื่อหรือฉายา"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="absolute top-1/2 right-5 -translate-y-1/2">
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute -top-1 right-26 flex h-10 w-10 cursor-pointer items-center justify-center text-slate-300 transition-colors hover:text-white"
                title="Clear Search"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            )}

            <button
              type="submit"
              className="bg-primary cursor-pointer px-4 py-2 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-red-700"
            >
              Execute
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

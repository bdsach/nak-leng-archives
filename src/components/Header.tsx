import React from "react";

export const Header: React.FunctionComponent = () => {
  function openSubmitUrl(): void {
    window.open(
      "https://docs.google.com/spreadsheets/d/1wzXkDECdxANrG20buPAZwLBm1F8sCXb7JQ7UiuotqUM/edit?gid=0#gid=0",
      "_blank",
    );
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-black/95 px-6 py-5 backdrop-blur-sm lg:px-20">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-primary flex size-10 rotate-45 items-center justify-center border border-white/20">
            <span className="material-symbols-outlined -rotate-45 text-white">
              skull
            </span>
          </div>
          <div>
            <h1
              className="font-display text-2xl font-black tracking-tighter text-white uppercase italic"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Nak-Leng&nbsp;
              <span
                className="text-primary"
                style={{ fontFamily: "Metal Mania, cursive" }}
              >
                Archives
              </span>
            </h1>
            <p className="font-playpen-sans-thai text-white">
              รวมฉายานักเลงจากรายการ Daily Topics
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="hidden items-center gap-8 md:flex">
        <button
          onClick={openSubmitUrl}
          className="border-primary text-primary hover:bg-primary ml-4 h-11 cursor-pointer border bg-transparent px-6 text-xs font-black tracking-widest uppercase transition-all hover:text-white"
        >
          Submit Profile
        </button>
      </nav>
    </header>
  );
};

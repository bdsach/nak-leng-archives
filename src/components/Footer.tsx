import React from "react";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Branding */}
        <div className="flex items-center gap-3 opacity-40">
          <span className="material-symbols-outlined text-white">
            fingerprint
          </span>
          <span
            className="text-[10px] font-black tracking-widest text-white uppercase italic"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            ฉายานักเลง // Class-X
          </span>
        </div>

        {/* Links */}
        {/* <div className="flex gap-10">
          {["The Code", "Bloodlines", "Redact Access"].map((label) => (
            <a
              key={label}
              className="text-[10px] font-black text-slate-600 hover:text-primary uppercase tracking-widest transition-colors"
              href="#"
            >
              {label}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

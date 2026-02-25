import React from "react";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4">
        {/* Branding + Credit */}
        <div className="flex flex-col items-center gap-3 opacity-40">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">
              fingerprint
            </span>
            <span className="text-xs font-black tracking-widest text-white uppercase italic">
              ฉายานักเลง
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 font-mono text-xs text-white/80">
            <a
              href="https://github.com/bdsach/nak-leng-archives"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

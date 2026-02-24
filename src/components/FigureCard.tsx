import React from "react";

interface FigureCardProps {
  figure: Figure;
}

export const FigureCard: React.FunctionComponent<FigureCardProps> = ({
  figure,
}: FigureCardProps) => {
  return (
    <div className="group bg-smoke hover:border-primary/40 border border-white/5 transition-all">
      {/* Image wrapper */}
      <div className="p-2">
        <div className="relative aspect-4/5 overflow-hidden bg-black">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url("${figure.imageUrl}")`,
              filter: "grayscale(0.2) contrast(1.2) sepia(0.2)",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />

          {/* Alias badge */}
          {/* <div className="absolute bottom-4 left-4 right-4">
            <div
              className="py-2 px-3 text-center"
              style={{
                background: "linear-gradient(145deg, #2a2a2a, #111)",
                border: "1px solid #444",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="text-2xl text-white tracking-wider block"
                style={{
                  fontFamily: "Metal Mania, cursive",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {figure.alias}
              </span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Card body */}
      <div className="space-y-4 p-6 pt-3 text-center">
        <div className="space-y-6">
          <div
            className="border border-red-700 px-3 py-2 text-center"
            style={{
              background: "linear-gradient(145deg, #2a2a2a, #111)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <span
              className="font-playpen-sans-thai block text-2xl text-white"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              {figure.alias}
            </span>
          </div>

          <h4 className="font-playpen-sans-thai text-sm font-medium tracking-widest text-slate-400 uppercase">
            {figure.firstName}&nbsp;{figure.lastName}
          </h4>
        </div>

        {/* Actions */}
        {/* <div className="flex flex-col gap-2">
          <button
            className="w-full h-10 bg-white/5 text-white border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Inspect File
          </button>
          <button
            className="w-full h-10 bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-blood transition-all"
          >
            Signal Contact
          </button>
        </div> */}
      </div>
    </div>
  );
};

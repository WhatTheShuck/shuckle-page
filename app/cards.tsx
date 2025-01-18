const ShuckleCards = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-red-500 mb-6">
        Shuckle TCG Cards
      </h2>
      <div className="bg-slate-800 rounded-lg shadow-lg shadow-red-900/20 p-6 border border-red-900/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="group relative aspect-[245/342] transform transition-all duration-300 hover:scale-105"
            >
              {/* Base glow effect */}
              <div className="absolute inset-0 rounded-lg bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.3)] ring-2 ring-red-500/10" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-red-500/20 to-orange-500/20 shadow-[0_0_30px_rgba(239,68,68,0.5)] ring-2 ring-red-500/30" />

              {/* Card image */}
              <div className="relative">
                <img
                  src={`/shuckle_card_${num}.png`}
                  alt={`Shuckle Card ${num}`}
                  className="w-full h-full object-contain rounded-lg transform transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShuckleCards;

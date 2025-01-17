const ShuckleAbout = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-red-500 mb-6">About Shuckle</h2>
      <div className="bg-slate-800 rounded-lg shadow-lg shadow-red-900/20 p-6 border border-red-900/20">
        <p className="text-slate-300 mb-4">
          Shuckle is a unique Bug/Rock-type Pokémon introduced in Generation II.
          Known for having the highest base Defense and Special Defense stats of
          all Pokémon, Shuckle is a defensive powerhouse that can be
          surprisingly versatile.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
            <h3 className="font-bold text-yellow-400 mb-2">Type</h3>
            <p className="text-slate-300">Bug / Rock</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
            <h3 className="font-bold text-yellow-400 mb-2">Abilities</h3>
            <p className="text-slate-300">
              Sturdy / Gluttony (Hidden: Contrary)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShuckleAbout;

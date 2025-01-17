const ShuckleFacts = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-red-500 mb-6">Fun Facts</h2>
      <div className="bg-slate-800 rounded-lg shadow-lg shadow-red-900/20 p-6 border border-red-900/20">
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <p className="text-slate-300">
              Shuckle has the highest base Defense and Special Defense stats of
              any Pokémon (230 each).
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <p className="text-slate-300">
              It can technically achieve the highest possible damage in a single
              move under specific conditions.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <p className="text-slate-300">
              In the Pokédex, it's known as the Mold Pokémon and is famous for
              storing berries in its shell holes.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShuckleFacts;

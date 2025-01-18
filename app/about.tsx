const ShuckleAbout = () => {
  interface TypeBadgeProps {
    type: "Bug" | "Rock";
  }

  interface AbilityCardProps {
    name: string;
    isHidden?: boolean;
  }

  const TypeBadge = ({ type }: TypeBadgeProps) => (
    <span
      className={`
        px-3 py-1 rounded-full font-medium text-white text-sm
        ${type === "Bug" ? "bg-lime-500" : "bg-stone-500"}
      `}
    >
      {type}
    </span>
  );

  const AbilityCard = ({ name, isHidden }: AbilityCardProps) => (
    <div className="bg-slate-700/50 p-3 rounded-lg border border-red-900/20">
      <div className="flex justify-between items-center">
        <span className="text-slate-200">{name}</span>
        {isHidden && (
          <span className="text-xs text-yellow-400 px-2 py-1 bg-slate-800 rounded-full">
            Hidden
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-4xl font-bold text-red-500 mb-6">About Shuckle</h2>
      <div className="bg-slate-800 rounded-lg shadow-lg shadow-red-900/20 p-6 border border-red-900/20">
        <p className="text-slate-300 mb-6">
          Shuckle is a unique Bug/Rock-type Pokémon introduced in Generation II.
          Known for having the highest base Defense and Special Defense stats of
          all Pokémon, Shuckle is a defensive powerhouse that can be
          surprisingly versatile.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Types section */}
            <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
              <h3 className="font-bold text-yellow-400 mb-3">Types</h3>
              <div className="flex gap-2">
                <TypeBadge type="Bug" />
                <TypeBadge type="Rock" />
              </div>
            </div>

            {/* Physical characteristics */}
            <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
              <h3 className="font-bold text-yellow-400 mb-3">
                Physical Traits
              </h3>

              {/* Height comparison */}
              <div className="mb-6">
                <p className="text-slate-400 text-sm mb-2">Height Comparison</p>
                <div className="bg-slate-800 p-4 rounded-lg flex items-end justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <img
                      src="/shuckle_silhouette.png"
                      alt="Shuckle height"
                      className="h-24 w-auto"
                    />
                    <p className="text-slate-200 mt-2">0.6 m</p>
                    <p className="text-slate-400 text-sm">Shuckle</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/human_silhouette.png"
                      alt="Human height"
                      className="h-48 w-auto"
                    />
                    <p className="text-slate-200 mt-2">1.7 m</p>
                    <p className="text-slate-400 text-sm">Average Human</p>
                  </div>
                </div>
              </div>

              {/* Weight comparison */}
              <div>
                <p className="text-slate-400 text-sm mb-2">Weight Comparison</p>
                <div className="bg-slate-800 p-4 rounded-lg flex items-center justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <img
                      src="/shuckle_icon.png"
                      alt="Shuckle weight"
                      className="h-16 w-auto"
                    />
                    <p className="text-slate-200 mt-2">20.5 kg</p>
                    <p className="text-slate-400 text-sm">Shuckle</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="/tire_icon.png"
                      alt="Car tire weight"
                      className="h-16 w-auto"
                    />
                    <p className="text-slate-200 mt-2">21 kg</p>
                    <p className="text-slate-400 text-sm">Car Tire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="space-y-6">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
                <h3 className="font-bold text-yellow-400 mb-3">Abilities</h3>
                <div className="space-y-2">
                  <AbilityCard name="Sturdy" />
                  <AbilityCard name="Gluttony" />
                  <AbilityCard name="Contrary" isHidden={true} />
                </div>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
                <h3 className="font-bold text-yellow-400 mb-3">
                  Berry Chemistry
                </h3>
                <p className="text-slate-300 mb-2">
                  Shuckle has a unique ability to ferment berries into juice by
                  storing them in its shell. This process takes approximately
                  24-48 hours.
                </p>
                <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-400 rounded-full flex-shrink-0"></div>
                  <p className="text-slate-400 text-sm">
                    The red coloring of Shuckle's shell is theorized to come
                    from years of berry fermentation
                  </p>
                </div>
              </div>

              <div className="bg-slate-700/50 p-4 rounded-lg border border-red-900/20">
                <h3 className="font-bold text-yellow-400 mb-3">
                  Habitat & Behavior
                </h3>
                <div className="space-y-3">
                  <p className="text-slate-300">
                    Shuckle makes its home in holes in rocks on mountains. It
                    stores berries in its shell, where the berries naturally
                    ferment into juice.
                  </p>
                  <div className="bg-slate-800 p-3 rounded-lg">
                    <h4 className="text-red-400 text-sm font-medium mb-2">
                      Common Locations
                    </h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Mountain crevices</li>
                      <li>• Under large rocks</li>
                      <li>• Rocky cave entrances</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShuckleAbout;

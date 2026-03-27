export default function FoundationGrid() {
  return (
    <section className="py-28 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1f3a] mb-3">
            Foundation Specializations
          </h2>
          <p className="text-gray-500 max-w-xl text-sm">
            Leveraging diverse installation methodologies to match geological
            constraints and structural demands.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-6 gap-6">
          {/* BIG LEFT CARD */}
          <div className="md:col-span-3 bg-[#0b2a4a] text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-between">
            {/* Decorative shape */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-2xl"></div>

            <div>
              <span className="material-symbols-outlined text-3xl mb-4 text-blue-300">
                settings
              </span>

              <h3 className="text-xl font-bold mb-3">Hydraulic Rotary Pile</h3>

              <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
                High-speed, vibration-free installation using powerful hydraulic
                rigs. Ideal for deep foundations in varied soil conditions.
              </p>
            </div>

            {/* TAGS */}
            <div className="flex gap-2 mt-6">
              <span className="text-[10px] px-3 py-1 bg-white/10 rounded-full uppercase tracking-widest">
                High Speed
              </span>
              <span className="text-[10px] px-3 py-1 bg-white/10 rounded-full uppercase tracking-widest">
                Precision
              </span>
            </div>
          </div>

          {/* RIGHT TOP CARD */}
          <div className="md:col-span-3 bg-gray-100 p-8 rounded-xl flex flex-col justify-between hover:bg-gray-200 transition">
            <div>
              <span className="material-symbols-outlined text-2xl mb-4 text-[#0b1f3a]">
                construction
              </span>

              <h3 className="text-lg font-semibold text-[#0b1f3a] mb-2">
                DMC Chiseling
              </h3>

              <p className="text-sm text-gray-500">
                Direct Mud Circulation (DMC) method utilizing heavy-duty chisels
                for rock socketing and penetration through hard strata layers.
              </p>
            </div>

            <span className="text-sm text-[#0b1f3a] mt-6">
              Learn technical specs →
            </span>
          </div>

          {/* SMALL CARDS */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-[#0b1f3a] mb-2">
              Under-reamed Pile
            </h3>
            <p className="text-sm text-gray-500">
              Bored cast-in-situ piles with bulbous enlargements to provide high
              anchorage in expansive clay.
            </p>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-[#0b1f3a] mb-2">Granular Pile</h3>
            <p className="text-sm text-gray-500">
              Stone columns used for ground improvement, increasing bearing
              capacity and accelerating consolidation.
            </p>
          </div>

          <div className="md:col-span-2 bg-white p-6 rounded-xl border">
            <h3 className="font-semibold text-[#0b1f3a] mb-2">Sand Pile</h3>
            <p className="text-sm text-gray-500">
              Installation of vertical sand drains to facilitate soil
              compaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

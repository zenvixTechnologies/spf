export default function WhyChoose() {
  return (
    <section className="relative py-36 bg-[#001e40] text-white overflow-hidden">

      {/* Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-12">

          <div className="space-y-5">
            <span className="text-blue-300 text-xs tracking-[0.25em] uppercase font-semibold">
              Technical Insight
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
              Why Choose Pile Foundations?
            </h2>
          </div>

          {/* POINTS */}
          <div className="space-y-10">

            {/* Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#001e40] transition-all duration-300">
                <span className="material-symbols-outlined">
                  terrain
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-lg">
                  Stability in Weak Soil
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed max-w-md">
                  Piles transfer structure weight through unstable surface layers to deeper, more competent rock or soil strata.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#001e40] transition-all duration-300">
                <span className="material-symbols-outlined">
                  settings_input_component
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-lg">
                  Controlled Load Transfer
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed max-w-md">
                  Precision-engineered load distribution ensures structural integrity for high-rise or heavy industrial assets.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#001e40] transition-all duration-300">
                <span className="material-symbols-outlined">
                  warning
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-lg">
                  Reduced Settlement Risks
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed max-w-md">
                  Minimizes the risk of differential settlement, protecting your investment from long-term structural fatigue.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute inset-0 bg-white/5 rounded-[40px] blur-3xl"></div>

          {/* Card */}
          <div className="relative border border-white/10 rounded-[28px] p-8 md:p-12 backdrop-blur-md w-full max-w-md">

            {/* Image */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcjbAH5XQTqVz_V1eA_xGj_s9C8gao6sVWY-SZqNiO9WDWbQlHbCxl9eSj-tyecH20IuxG0qF-HpQGnyG0kqi-vcU3b4I0o7hDOxzBI82qEMFqq4gIrEf-yDV5_jaWuQ_Rw3iGiatGSqnxOL-4y08Ka4DZL2TgQbM6V9cEwaCamWKN7lqvODdAfI3jdKdWJNQo4VUknBR568qxXtSwYsqvHdijMrhOmIEAcVqIN6BI1P8abWZpKnMxOOieOcpqCJDAoQM7bgHb8aZZ"
              alt="pile"
              className="rounded-xl w-full object-contain"
            />

            {/* Bottom Stats */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 text-center gap-6">
              
              <div>
                <h3 className="text-3xl font-extrabold text-blue-300">
                  100%
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-1">
                  Structural Safety
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-blue-300">
                  Zero
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-blue-200 mt-1">
                  Settlement Tolerance
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
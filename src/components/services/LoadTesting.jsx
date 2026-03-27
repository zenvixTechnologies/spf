export default function LoadTesting() {
  return (
    <section className="relative py-28 bg-[#0b2a4a] text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a4a] to-[#001e40] opacity-95"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Pile Load Testing & Validation
          </h2>

          <p className="text-blue-200 mb-10 leading-relaxed max-w-lg">
            We don’t just build; we verify. Our rigorous testing protocols
            ensure every pile meets the designed load capacity requirements as
            per international safety standards.
          </p>

          {/* CHECKLIST */}
          <div className="space-y-6">
            {/* Item */}
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Static Load Testing
                </h4>
                <p className="text-sm text-blue-200 mt-1">
                  Application of incremental loads to measure settlement
                  behavior and ultimate capacity.
                </p>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Integrity Testing (PIT)
                </h4>
                <p className="text-sm text-blue-200 mt-1">
                  Non-destructive testing using sonic pulse echoes to ensure
                  pile continuity and shaft quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl blur-2xl"></div>

          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7QC6z6olSf4q544-ix9hxzTnycLz7ivxFIrdF-ItGqUo3CDXUCPXuM3o9vWV5DmU1ln8H7AASDeUJA44NjdU0KT3MGFrn0md3VfNTiJpQq7bdV9VLViwj-rVQCUTmyuxEV-_fcdo9MzRDv8Qdk2kRhcpBqJkPGGl5iyqTIEuCoi6w--r7YaP6SA1MRWZx4zeSCfJ31uj2agJRdU76-kSO0Q-U9nua9dZF471gWzURBxQG0-d7GgG58y9GWLkVNIFfh8KEMGwmVw8l"
              alt="pile testing"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

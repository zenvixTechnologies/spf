export default function ContactHero() {
  return (
    <section className="relative bg-[#f8f9fb] overflow-hidden">

      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.06]"></div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="max-w-3xl">

          {/* Badge */}
          <span className="inline-block px-4 py-[6px] bg-[#e8f0fe] text-[10px] font-semibold tracking-[0.25em] uppercase rounded-full text-[#0b1f3a] mb-6">
            Established 1987
          </span>

          {/* Heading */}
          <h1 className="text-[42px] md:text-[72px] font-extrabold leading-[1.03] tracking-[-0.02em] mb-6 text-[#0b1f3a]">
            Let's build a solid <br />
            <span className="text-[#4a78c2]">foundation</span> together.
          </h1>

          {/* Description */}
          <p className="text-[15px] md:text-[17px] text-[#6b7280] leading-relaxed max-w-xl">
            Reach out to our engineering team for expert consultation on piling and
            foundation projects across Kerala.
          </p>

        </div>
      </div>
    </section>
  );
}
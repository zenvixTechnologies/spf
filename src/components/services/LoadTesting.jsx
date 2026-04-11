const galleryImages = [
  "/soil-investigation.jpg",
  "/pilling.png",
  "/loadtest.png",
  "/pile-foundation.webp",
  "/Arcadia Hotel.png",
  "/AVS Serene City.png",
  "/Brilliant Study Centre Pala.png",
  "/Chandys County Kottayam.png",
  "/Darsana Academy Nagampadam.avif",
  "/Lake Palace Resort.png",
  "/family.jpg",
  "/family1.jpg",
];

export default function LoadTesting() {
  return (
    <section className="bg-[#0b1f3a] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((image, index) => {
            const largeCard =
              index === 0 || index === 3 || index === 6 || index === 9;

            return (
              <article
                key={image}
                className={`group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_18px_50px_rgba(2,6,23,0.22)] ${
                  largeCard ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`project visual ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

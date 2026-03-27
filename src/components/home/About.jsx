export default function About() {
  return (
    <section id="about" className="py-14 sm:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE SIDE */}
        <div className="relative group">
          {/* Background decorative box */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-xl opacity-40"></div>

          {/* Main Image */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPMepl0k17GEA0DMzr7hGgukR3R5kTKAggg6Xvwc5EHuOoqZAoHn42YnfxBf8d6OBdDoOnSmEQ3O2-48Eo4C10Cf6I5N0GZK-IPrDaCgcIkfSO12OHNy9wWfQzxv5AKh1taCHEWBBkvbFL47CS0j0aY85LARSo4a8ajY3GoR19lXgphkQJj8Y9pwDXWhSXkMS0khOkYQMZczR1njtAxPqns4kgrlr-yhtw-msMQHZGLUSgs_y0OJeALjPPobTlvpxmw7so2WhfBPj"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              alt="about"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl hidden md:block z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-900">
                  history
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  Established
                </p>
                <h4 className="text-xl font-extrabold text-gray-900">1987</h4>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="space-y-8">
          {/* Label */}
          <span className="text-blue-900 font-bold tracking-[0.2em] uppercase text-xs">
            Legacy & Expertise
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Building Foundations <br /> That Last Centuries
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            As a family-run partnership with over 35 years of specialized
            experience, we pride ourselves on precision and structural
            integrity. Since our founding in 1987, we have been the silent
            strength behind thousands of structures across the region.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-extrabold text-blue-900">4000+</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                Soil Investigations
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-extrabold text-blue-900">35+</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
                Years Experience
              </p>
            </div>
          </div>

          {/* Points */}
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-blue-600">
                check_circle
              </span>
              <p className="text-gray-700 font-medium">
                Family-run values combined with industrial-scale technical
                expertise.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="material-symbols-outlined text-blue-600">
                check_circle
              </span>
              <p className="text-gray-700 font-medium">
                Specialized focus on complex piling and soil engineering
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

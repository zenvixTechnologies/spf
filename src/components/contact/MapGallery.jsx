export default function MapGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-20">

      <div className="grid lg:grid-cols-2 gap-8">

        {/* MAP */}
      {/* MAP */}
<div className="relative rounded-xl overflow-hidden min-h-[400px] group shadow-sm">

  {/* Google Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.631510121994!2d76.47444207450211!3d9.365838783626417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06210a73b0abd7%3A0xd435186d4218e55c!2sStandard%20Pile%20Foundation!5e0!3m2!1sen!2sin!4v1774592885145!5m2!1sen!2sin"
    className="w-full h-full border-0 sm:grayscale group-hover:grayscale-0 transition-all duration-700"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Overlay (important for design) */}
  <div className="absolute inset-0 bg-[#0b1f3a]/30 mix-blend-multiply pointer-events-none"></div>

  {/* Info Card */}
  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">

    <div className="flex gap-4 items-start">

      <div className="p-2 bg-[#0b1f3a] text-white rounded-lg">
        <span className="material-symbols-outlined text-sm">
          explore
        </span>
      </div>

      <div>
        <h4 className="font-semibold text-[#0b1f3a]">
          Headquarters
        </h4>
        <p className="text-sm text-gray-500">
          St. George Complex, Edathua, Alappuzha
        </p>

        <a
          href="https://www.google.com/maps?q=Standard+Pile+Foundation"
          target="_blank"
          className="inline-block mt-2 text-sm font-semibold text-blue-600 hover:underline"
        >
          Get Directions →
        </a>
      </div>

    </div>
  </div>

</div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 gap-4">

          {/* Image 1 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdbM-o3qETKY-Mq3cxh-d12rxdqrJRwjSrmuK_-AdaSk2emOfu82P9bS4Hc6gNga8bhKXffW2eyq7t4pKhlZQu8Pi2g3XQWXmESnNfPbpWuRjkxhxvjVdXQMsvAhWiYWIqI7PToJZ0S-lqfgg0aww6qyxZ_bGbwO9M69-lpET1e9I-br29Ymt61UEhUf6Swx6fIIQgSrh6iQBW8StxC7_lcmxhnQd4xT03kwUjVcP9BLIlcNkOqz4p8VMsZfZ7pY3zuaxkgRV_L_t3"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              alt="rig"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-xs font-semibold uppercase tracking-widest">
                Hydraulic Rotary Rig
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxnJJh2L5y5ZBgrmjQkcU8uYyU4ocf4eVM-TJAt_MPvsdmJsBtf9Y2n-1LNowTMkJrLtjqfAJecCOWnxauF-_GgHpRM2PUp6NZqyiAnozCR5HNLEUH_Nas-gQbQZ2QPkOGxHWdpDGOU1JUb3aY54DMc1L6Kna9Fxyp4IeFu2SCHcyaQL1_z5erPrcq09xJOV4AT9tdVYStJkHDJtv4oLbQcRxdy3Nw3ZK8Bcl28O1RuQumua7YP0fxsY2q2nztACJA3M219bkm8QSs"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              alt="site"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <p className="text-white text-xs font-semibold uppercase tracking-widest">
                Site Operations
              </p>
            </div>
          </div>

          {/* Image 3 (Full Width) */}
          <div className="relative rounded-xl overflow-hidden group col-span-2 h-48">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGbm8WXTbMihqDABoyX2X4IHRt_IwocXAumGjsCBhfG6jlNsZHrLHT5HiQV3tZ3_P00phkT3-nnkA28RdLnrDKEeqB1Pro9o5uD5o4ZRA4RzXOwCzPSxqagqHddbBL9uWKBj43BEuBsFp0f_kyG7ERWpPZWdTZbXVACWpdfrGjrifhwgnXE_Im0NxWWofwBECiQrQaxJcW75UN-vIjc_eMOy65QyLHo5xAeLN5xe355kMMCRFs4CRFmx4AsfLjSr3U4z2_1d_OSAS-"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              alt="material"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5">
              <p className="text-white text-sm font-semibold uppercase tracking-widest">
                Material Quality Control
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
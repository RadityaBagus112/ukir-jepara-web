"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import { ShieldCheck, Truck, Sparkles, Leaf, Award, Palette } from "lucide-react";
import RatingSection from "./components/RatingSection";



const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};


/* ANIMATION */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },

  
};


const waLink =
  "https://wa.me/62859126469320?text=Halo%20saya%20tertarik%20dengan%20produk%20ukiran";

export default function Page() {
  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <Navbar />

  {/* /* HERO CONTENT  */}
<section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-xl space-y-6">

      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white animate-fadeUp">
        Ukiran Jepara <br />
        <span className="text-[#9EFF00]">
          Premium Modern
        </span>
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed animate-fadeUp delay-200">
        Produk handmade berkualitas tinggi dengan desain elegan untuk hunian premium Anda.
      </p>

      <div className="flex gap-4 mt-6 animate-fadeUp delay-300">
        <a
          href="#produk"
          className="
            bg-[#9EFF00] text-black px-6 py-3 rounded-full font-medium
            shadow-[0_0_25px_rgba(158,255,0,0.5)]
            hover:scale-105 hover:shadow-[0_0_40px_rgba(158,255,0,0.8)]
            transition-all duration-300
          "
        >
          Lihat Produk
        </a>

        <a
          href="#kontak"
          className="
            border border-white/40 text-white px-6 py-3 rounded-full
            hover:bg-white hover:text-black transition
          "
        >
          Hubungi Kami
        </a>
      </div>

    </div>
  </div>
</section>


<section className="py-36 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 md:gap-32 items-center">

  {/* TEXT */}
  <motion.div
    variants={fadeLeft}
    initial="hidden"
    whileInView="show"
    className="max-w-lg"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
      Kenapa Ukiran Jepara Istimewa
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed">
      Ukiran Jepara dibuat oleh pengrajin berpengalaman dengan detail tinggi,
      menjadikannya bukan sekadar furniture tetapi karya seni.
    </p>

    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
      Menggunakan kayu jati pilihan yang kuat dan tahan lama.
    </p>
  </motion.div>

  {/* IMAGE */}
  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="show"
    className="relative flex justify-center md:justify-end"
  >
    <div className="absolute w-[85%] h-[85%] bg-[#9EFF00]/20 blur-3xl rounded-[50px]"></div>

    <div className="relative bg-white p-5 rounded-3xl shadow-2xl">
      <img
        src="/produk1.jpg"
        className="rounded-2xl w-full max-w-md object-cover"
      />
    </div>
  </motion.div>

</section>

<section className="py-36 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 md:gap-32 items-center">

  {/* IMAGE */}
  <motion.div
    variants={fadeLeft}
    initial="hidden"
    whileInView="show"
    className="relative flex justify-center md:justify-start order-2 md:order-1"
  >
    <div className="absolute w-[85%] h-[85%] bg-[#9EFF00]/20 blur-3xl rounded-[50px]"></div>

    <div className="relative bg-white p-5 rounded-3xl shadow-2xl">
      <img
        src="/produk2.jpg"
        className="rounded-2xl w-full max-w-md object-cover"
      />
    </div>
  </motion.div>

  {/* TEXT */}
  <motion.div
    variants={fadeRight}
    initial="hidden"
    whileInView="show"
    className="max-w-lg order-1 md:order-2"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
      Seni dalam Setiap Detail
    </h2>

    <p className="text-gray-600 text-lg leading-relaxed">
      Teknik ukir tradisional menghasilkan ornamen detail dan unik.
    </p>

    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
      Cocok untuk hunian premium dan ruang elegan.
    </p>
  </motion.div>

</section>

<section id="tentang"></section>

    <section className="min-h-screen flex items-center px-6">

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          
          {/* BADGE */}
          <div className="mb-6">
            <span className="px-5 py-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md text-sm text-gray-700 shadow-sm">
              Galeri Ukir Jepara
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black">
            Keindahan Ukiran
            <br />
            <span className="text-[#9EFF00]">Premium Modern</span>
          </h1>

          {/* DESC */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
            Produk ukiran Jepara berkualitas tinggi dengan desain elegan,
            dibuat oleh pengrajin berpengalaman untuk hunian premium.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex gap-4">
            <a
  href="#produk"
  className="px-7 py-3 rounded-full bg-[#9EFF00] text-black font-medium hover:scale-105 transition"
>
  Lihat Produk
</a>

<a
  href={waLink}
  target="_blank"
  className="px-7 py-3 rounded-full border border-black/20 text-black font-medium hover:bg-black hover:text-white transition"
>
  Konsultasi Gratis
</a>
          </div>

          {/* TRUST */}
          <div className="mt-12 flex items-center gap-3">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <p className="text-sm text-gray-600">
              Dipercaya oleh banyak pelanggan
            </p>
          </div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-[#9EFF00]/20 blur-[120px] rounded-full"></div>

          {/* BORDER FRAME */}
          <div className="relative p-[6px] rounded-[30px] bg-gradient-to-br from-[#9EFF00] to-green-400 shadow-xl">

            {/* IMAGE */}
            <img
              src="/joglo.jpg"
              className="w-[320px] md:w-[420px] rounded-[25px] object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>


      {/* ================= STATS ================= */}
      <section className="py-20 text-center border-y border-gray-200">
        <div className="flex flex-wrap justify-center gap-12">
          {[
            ["500+", "Produk Terjual"],
            ["100+", "Client"],
            ["10+", "Negara"],
          ].map(([num, label], i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#9EFF00]">{num}</h2>
              <p className="text-gray-500 text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 bg-[#fafafa]">

  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Kenapa Pilih Kami
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

    {[
      { title: "Handmade Premium" },
      { title: "Kayu Solid Berkualitas" },
      { title: "Custom Design" },
    ].map((item, i) => (
      <div
        key={i}
        className="group bg-white rounded-2xl p-8 border border-black/10 
                   shadow-sm hover:shadow-xl hover:-translate-y-2 
                   transition duration-300 text-center"
      >
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#9EFF00]/20 
                        flex items-center justify-center text-black font-bold">
          {i + 1}
        </div>

        <h3 className="font-semibold text-lg group-hover:text-[#9EFF00] transition">
          {item.title}
        </h3>
      </div>
    ))}

  </div>

</section>
      {/* ================= PRODUCTS ================= */}
 <section id="produk" className="py-28 px-6 bg-white">

  {/* HEADER */}
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Produk Unggulan
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      Koleksi ukiran Jepara premium dengan detail halus dan kualitas terbaik.
    </p>
  </div>

  {/* GRID */}
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[1,2,3,4].map((item) => (
      <div
        key={item}
        className="
          group relative bg-white rounded-2xl overflow-hidden
          border border-black/10 shadow-sm
          hover:shadow-2xl hover:-translate-y-3
          transition duration-500
        "
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={`/produk${item}.jpg`}
            className="
              w-full h-[240px] object-cover
              transition duration-700
              group-hover:scale-110
            "
          />

          {/* OVERLAY */}
          <div className="
            absolute inset-0 bg-black/0
            group-hover:bg-black/25
            transition duration-500
          "></div>

          {/* BUTTON HOVER */}
          <div className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            transition duration-500
          ">
            <a
              href="https://wa.me/628xxxx"
              target="_blank"
              className="
                px-5 py-2 bg-[#9EFF00] text-black rounded-full font-medium
                shadow-[0_0_20px_rgba(158,255,0,0.5)]
                hover:scale-105 transition
              "
            >
              Order Sekarang
            </a>
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-5">

          <h3 className="font-medium text-gray-800 mb-1">
            Produk Ukiran {item}
          </h3>

          <p className="text-[#9EFF00] font-semibold text-lg">
            Rp 4.500.000
          </p>

        </div>

      </div>
    ))}

  </div>

  {/* CTA BAWAH */}
  <div className="text-center mt-20">

    <p className="text-gray-600 mb-6">
      Tidak menemukan produk yang cocok?
    </p>

    <a
      href="https://wa.me/628xxxx"
      target="_blank"
      className="
        inline-block px-7 py-3 bg-black text-white rounded-full font-medium
        hover:scale-105 transition
      "
    >
      Konsultasi Custom Design
    </a>

  </div>

</section>

      {/* CARA PEMESANAN */}
      <section id="pesan"></section>
    <section className="py-32 px-6 bg-white">

      {/* TITLE */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
          Cara Pemesanan Mudah
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl">
          Hanya 3 langkah untuk mendapatkan ukiran Jepara premium.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[28px] border border-black/15 bg-[#eaffbf] p-8 md:p-10 shadow-[0_6px_0px_rgba(0,0,0,0.9)] hover:-translate-y-1 hover:shadow-xl transition"
        >
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#9EFF00] border-2 border-black flex items-center justify-center font-semibold">
            1
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Konsultasi Desain
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Diskusikan desain, ukuran, dan kebutuhan Anda dengan tim kami.
          </p>

          <a
  href={waLink}
  target="_blank"
  className="px-6 py-3 rounded-full bg-[#9EFF00] text-black font-medium border border-black hover:scale-105 transition"
>
  Konsultasi via WhatsApp
</a>
        </motion.div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">

          {/* STEP 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-[28px] border border-black/20 bg-gray-100 p-6 md:p-8 shadow-[0_6px_0px_rgba(0,0,0,0.9)] hover:-translate-y-1 hover:shadow-xl transition"
          >
            <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-[#9EFF00] border-2 border-black flex items-center justify-center font-semibold">
              2
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Proses Produksi
            </h3>

            <p className="text-gray-600">
              Dikerjakan oleh pengrajin Jepara dengan detail tinggi.
            </p>
          </motion.div>

          {/* STEP 3 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-[28px] border border-black/20 bg-gray-100 p-6 md:p-8 shadow-[0_6px_0px_rgba(0,0,0,0.9)] hover:-translate-y-1 hover:shadow-xl transition"
          >
            <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-[#9EFF00] border-2 border-black flex items-center justify-center font-semibold">
              3
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Pengiriman Aman
            </h3>

            <p className="text-gray-600">
              Dikemas rapi dan dikirim ke seluruh Indonesia.
            </p>
          </motion.div>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
          Miliki Ukiran Impian Anda <br />
          <span className="relative">
            dengan Proses Mudah & Cepat
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#9EFF00]/50 -z-10 rounded"></span>
          </span>
        </h3>
      </motion.div>

    </section>

    {/* CTA KARAKTER */}

    <section className="py-32 px-6 bg-white">
     <div className="max-w-7xl mx-auto">

  <div className="bg-[#9EFF00] rounded-[30px] 
                  px-11 py-6 md:py-5 
                  flex items-end justify-between 
                  shadow-[0_20px_60px_rgba(0,0,0,0.1)]">

    {/* TEXT */}
    <div className="flex flex-col justify-center h-full max-w-xl">
  
  <h3 className="text-3xl md:text-4xl font-semibold mb-4">
    Wujudkan Furniture Impian Anda Sekarang
  </h3>

  <p className="text-black/80 mb-6">
    Konsultasikan desain yang Anda inginkan, kami bantu dari konsep hingga jadi.
  </p>

  <a
    href={waLink}
    target="_blank"
    className="w-fit px-7 py-3 bg-black text-white rounded-full hover:scale-105 transition"
  >
    ORDER SEKARANG
  </a>

</div>

    {/* CHARACTER */}
    <div className="flex items-end">
      <img
        src="/character.png"
        className="w-[340px] md:w-[420px] 
                   translate-y-5"
      />
    </div>

  </div>

</div>
    </section>

    {/* LOKASI */}
    <section id="lokasi"></section>
    <section className="py-32 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Kunjungi Workshop Kami
          </h2>
          <p className="text-gray-500 mt-3">
            Lihat langsung kualitas ukiran Jepara terbaik dari pengrajin asli
          </p>
        </motion.div>

        {/* CARD */}
        <div className="relative grid md:grid-cols-2 gap-10 items-center">

          {/* GLOW BACKGROUND */}
          <div className="absolute inset-0 bg-[#9EFF00] blur-[120px] opacity-20 rounded-[60px]"></div>

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-[30px] p-8 shadow-xl border border-black/10"
          >

            <h3 className="text-2xl font-semibold mb-4">
              Galeri Ukir Jepara
            </h3>

            <p className="text-gray-600 mb-6">
              Kami berada langsung di pusat pengrajin Jepara. Anda bisa melihat 
              proses produksi dan kualitas ukiran secara langsung.
            </p>

            {/* ADDRESS */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">Alamat</p>
              <p className="font-medium">
                Desa Mulyoharjo, Jepara, Jawa Tengah
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="px-5 py-3 bg-black text-white rounded-full hover:scale-105 transition"
              >
                Google Maps
              </a>

              <a
                href="https://wa.me/628xxxx"
                className="px-5 py-3 border border-black/20 rounded-full hover:bg-black hover:text-white transition"
              >
                Hubungi Kami
              </a>
            </div>

          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-[30px] overflow-hidden shadow-2xl border border-black/10"
          >

            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=Jepara&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            ></iframe>

            {/* OVERLAY GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* TESTIMONI */}
    <section id="testimoni"></section>
  <RatingSection />


      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white px-6 py-20">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

    {/* BRAND */}
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Galeri Ukir Jepara
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        Setiap ukiran yang kami buat bukan sekadar furniture,
        tapi bagian dari suasana rumah yang ingin Anda bangun.
      </p>
    </div>

    {/* MENU */}
    <div>
      <h4 className="font-medium mb-4">Jelajahi</h4>
      <ul className="space-y-2 text-gray-400 text-sm">
        <li><a href="#produk" className="hover:text-white">Produk Pilihan</a></li>
        <li><a href="#pesan" className="hover:text-white">Cara Pemesanan</a></li>
        <li><a href="#testimoni" className="hover:text-white">Testimoni</a></li>
        <li><a href="#lokasi" className="hover:text-white">Lokasi Kami</a></li>
      </ul>
    </div>

    {/* KONTAK */}
    <div>
      <h4 className="font-medium mb-4">Butuh Bantuan?</h4>

      <p className="text-gray-400 text-sm mb-2">
        Kami siap bantu Anda memilih produk yang paling cocok.
      </p>

      <p className="text-gray-400 text-sm">
        Respon cepat & tanpa ribet.
      </p>
    </div>

    {/* CTA (CLOSING) */}
    <div>
      <h4 className="font-medium mb-4">Masih Ragu?</h4>

      <p className="text-gray-400 text-sm mb-4">
        Tenang, Anda bisa konsultasi dulu tanpa komitmen.
        Kami bantu sampai Anda benar-benar yakin.
      </p>

      <a
        href="https://wa.me/628xxxx?text=Halo%20saya%20ingin%20konsultasi%20produk%20ukiran"
        target="_blank"
        className="inline-block px-6 py-3 bg-[#9EFF00] text-black rounded-full font-medium 
                   hover:scale-105 transition shadow-lg"
      >
        Konsultasi Sekarang
      </a>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500 text-sm">
    © 2026 Galeri Ukir Jepara — Dibuat dengan detail, bukan sekadar jadi.
  </div>

</footer>


    </main>
  );
}
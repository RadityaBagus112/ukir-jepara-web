"use client";

import { useEffect, useState } from "react";

const waLink =
  "https://wa.me/628xxxx?text=Halo%20saya%20ingin%20order%20produk%20ukiran";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "produk", label: "Produk" },
  { id: "tentang", label: "Tentang" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div className="w-[95%] max-w-6xl mt-2">

        {/* CONTAINER */}
        <div
          className={`
            flex items-center justify-between w-full
            px-4 py-2 rounded-full
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-md border border-black/10"
                : "bg-white/60 backdrop-blur"
            }
          `}
        >

          {/* LOGO */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-2 font-semibold"
          >
            <img src="/logo.png" className="w-6 h-6" />
            <span className="text-xs md:text-sm">
              Galeri Ukir
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-black/70">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`transition ${
                  active === l.id ? "text-black font-medium" : ""
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">

            {/* ORDER (HIDDEN DI MOBILE BIAR RAPI) */}
            <a
              href={waLink}
              target="_blank"
              className="
                hidden sm:inline-flex
                text-xs md:text-sm
                px-4 py-1.5
                rounded-full
                bg-[#9EFF00] text-black
                font-medium
                shadow-[0_0_15px_rgba(158,255,0,0.5)]
                hover:scale-105 transition
              "
            >
              Order
            </a>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden overflow-hidden
            transition-all duration-300
            ${open ? "max-h-64 mt-2" : "max-h-0"}
          `}
        >
          <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-4 text-center">

            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="text-sm"
              >
                {l.label}
              </button>
            ))}

            <a
              href={waLink}
              target="_blank"
              className="bg-[#9EFF00] py-2 rounded-full text-sm font-medium"
            >
              Order Sekarang
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}
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
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div
        className={`
          pointer-events-auto w-[96%] max-w-7xl
          transition-all duration-500
          ${scrolled ? "mt-3" : "mt-2"}
        `}
      >
        <div
          className={`
            flex items-center justify-between
            px-4 md:px-7
            transition-all duration-500
            ${
              scrolled
                ? "py-2 bg-white/80 backdrop-blur-2xl rounded-full border border-black/10 shadow-lg"
                : "py-3 bg-white/60 backdrop-blur-xl rounded-full"
            }
          `}
        >
          {/* LOGO */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-2 text-black font-semibold"
          >
            <img src="/logo.png" className="w-7 h-7 md:w-6 md:h-6" />

            {/* 🔥 SEKARANG MUNCUL DI MOBILE */}
            <span className="text-sm md:text-base tracking-wide">
              Galeri Ukir
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-black/70">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className="relative group"
              >
                <span
                  className={`transition ${
                    active === l.id
                      ? "text-black"
                      : "group-hover:text-black"
                  }`}
                >
                  {l.label}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-[#9EFF00]
                    transition-all duration-300
                    ${
                      active === l.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* ORDER */}
            <a
              href={waLink}
              target="_blank"
              className="
                text-xs md:text-sm px-4 md:px-5 py-2 rounded-full font-medium
                bg-[#9EFF00] text-black
                shadow-[0_0_15px_rgba(158,255,0,0.5)]
                hover:shadow-[0_0_30px_rgba(158,255,0,0.8)]
                hover:scale-105
                transition-all duration-300
              "
            >
              Order
            </a>

            {/* MENU MOBILE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-black text-xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden overflow-hidden
            transition-all duration-500
            ${open ? "max-h-60 mt-3" : "max-h-0"}
          `}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-black/10 shadow-lg p-5 flex flex-col gap-4 text-center">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => goTo(l.id)}
                className={`text-sm ${
                  active === l.id ? "text-black font-semibold" : "text-black/70"
                }`}
              >
                {l.label}
              </button>
            ))}

            <a
              href={waLink}
              target="_blank"
              className="mt-2 bg-[#9EFF00] text-black py-2 rounded-full font-medium"
            >
              Order Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
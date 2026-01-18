"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--yellow)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: "var(--maroon)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-48 h-48 rounded-full"
          style={{ backgroundColor: "var(--maroon)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full"
          style={{ backgroundColor: "var(--maroon)" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <Image
            src="/assets/logo.png"
            alt="Wonton Sarjana Logo"
            loading="eager"
            width={500}
            height={500}
            className="mx-auto mb-4 w-40 lg:w-56 h-auto"
          />

          {/* Brand Name */}
          <h1
            className="text-5xl md:text-8xl mb-8 animate-bounce-slow text-shadow-[1.5px_1.5px_0px_var(--maroon-light)] lg:text-shadow-[2.5px_2.5px_0px_var(--maroon-light)]"
            style={{
              fontFamily: "'Lobster', cursive",
              color: "var(--maroon)",
            }}
          >
            Wonton Sarjana
          </h1>

          {/* Tagline */}
          <p
            className="md:text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: "var(--black)" }}
          >
            Cemilan enak dan murah dari mahasiswa untuk mahasiswa! 🎓🥟
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/6285811090227"
              className="px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
              style={{
                backgroundColor: "var(--maroon)",
                color: "var(--yellow)",
              }}
            >
              Pesen Sekarang
            </a>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full text-lg transition-transform hover:scale-105 border-2"
              style={{
                backgroundColor: "transparent",
                color: "var(--maroon)",
                borderColor: "var(--maroon)",
              }}
            >
              Liat Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

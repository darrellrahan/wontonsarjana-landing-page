"use client";

import Image from "next/image";

export function Menu() {
  const menuItems = [
    {
      name: "Wonton Rebus Chili Oil",
      price: "Rp10.000",
      description:
        "Wonton rebus dengan tekstur kulit yang halus disiram chili oil yang pedesnya seimbang dan aromanya kuat, rasa bold tapi tetep nyaman dimakan.",
      image: "/assets/menu-wonton-rebus-chili-oil.png",
    },
    {
      name: "Wonton Goreng Chili Oil",
      price: "Rp10.000",
      description:
        "Wonton goreng dengan kulit crispy dan isian gurih, dipaduin chili oil yang bikin sensasi pedesnya lebih nendang di setiap gigitan.",
      image: "/assets/menu-wonton-goreng-chili-oil.png",
    },
    {
      name: "Wonton Kuah",
      price: "Rp10.000",
      description:
        "Wonton dengan kuah kaldu gurih yang sederhana tapi berasa, cocok dimakan pelan-pelan saat capek kuliah atau sebagai comfort food.",
      image: "/assets/menu-wonton-kuah.png",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 px-4"
      style={{ backgroundColor: "var(--yellow-light)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-5xl text-center mb-4"
          style={{
            fontFamily: "'Lobster', cursive",
            color: "var(--maroon)",
          }}
        >
          Our Menu
        </h2>
        <p
          className="text-center text-lg mb-16"
          style={{ color: "var(--black)" }}
        >
          Dibuat dengan proses yang kita jaga, rasa yang kita konsistenkan, dan
          harga yang tetep masuk akal buat mahasiswa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-xl transition-transform hover:scale-105 h-115"
              style={{ backgroundColor: "var(--white)" }}
            >
              <div className="h-1/2 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 h-1/2 flex flex-col justify-evenly gap-4">
                <div className="flex justify-between items-start">
                  <h3
                    className="text-2xl"
                    style={{
                      color: "var(--maroon)",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className="text-xl px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--yellow)",
                      color: "var(--maroon)",
                      fontWeight: 600,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p style={{ color: "var(--black)" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/6285811090227"
            className="px-10 py-4 rounded-full text-lg transition-transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: "var(--maroon)",
              color: "var(--yellow)",
            }}
          >
            Pesen Sekarang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export function About() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "var(--white)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                width={1000}
                height={1000}
                src="/assets/about.png"
                alt="Delicious wonton dumplings"
                className="w-full h-full lg:h-115 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2
              className="text-5xl mb-6"
              style={{
                fontFamily: "'Lobster', cursive",
                color: "var(--maroon)",
              }}
            >
              About Us
            </h2>
            <p className="text-lg mb-4" style={{ color: "var(--black)" }}>
              <span style={{ fontWeight: 600, color: "var(--maroon)" }}>
                Wonton Sarjana
              </span>{" "}
              lahir dari pengalaman sederhana sebagai mahasiswa: pengen jajan
              enak dan murah tanpa harus ragu soal kualitas. Kita percaya
              jajanan mahasiswa gak harus asal murah, tapi bisa dibuat dengan
              proses yang serius dan bahan yang jelas.
            </p>
            <p className="text-lg mb-4" style={{ color: "var(--black)" }}>
              Kita pake sistem pre-order supaya setiap wonton dibuat dari bahan
              fresh dan disiapin sesuai orderan, bukan stok lama. Fokus kita
              bukan sekadar kecepatan, tapi konsistensi rasa, kebersihan proses,
              dan kualitas yang bisa dipercaya di setiap batch.
            </p>
            <p className="text-lg" style={{ color: "var(--black)" }}>
              Dibuat oleh mahasiswa,{" "}
              <span style={{ fontWeight: 600, color: "var(--maroon)" }}>
                Wonton Sarjana
              </span>{" "}
              punya satu prinsip: Dari mahasiswa, untuk mahasiswa! 🎓🥟
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChefHat, GraduationCap, ShieldCheck } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: ChefHat,
      title: "Dibuat dengan Proses, Bukan Asal Jadi",
      description:
        "Setiap wonton dibuat lewat trial & error, bukan shortcut. Kita jaga konsistensi karena kita percaya kualitas lahir dari proses yang bener.",
    },
    {
      icon: GraduationCap,
      title: "Relate dengan Kebutuhan Mahasiswa",
      description:
        "Kita juga mahasiswa. Kita tau rasanya ngerjain tugas, ngejar deadline, tapi tetep pengen jajan cemilan yang enak, murah, dan worth it.",
    },
    {
      icon: ShieldCheck,
      title: "Higienis, Aman, dan Tanggung Jawab",
      description:
        "Kita sadar kepercayaan itu mahal. Karena itu kebersihan dan keamanan makanan jadi prioritas utama, bukan cuma formalitas.",
    },
  ];

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: "var(--maroon)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-5xl text-center mb-4"
          style={{
            fontFamily: "'Lobster', cursive",
            color: "var(--yellow)",
          }}
        >
          Kenapa Pilih Wonton Sarjana?
        </h2>
        <p
          className="text-center text-lg mb-16"
          style={{ color: "var(--yellow-light)" }}
        >
          Ini bukan sekadar wonton biasa, tapi ini hasil proses, kepedulian, dan
          rasa tanggung jawab kita sebagai mahasiswa yang serius bangun sesuatu
          dari nol.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-center transition-transform hover:scale-105 flex flex-col items-center justify-between"
              style={{ backgroundColor: "var(--yellow)" }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: "var(--maroon)" }}
              >
                <feature.icon size={32} style={{ color: "var(--yellow)" }} />
              </div>
              <h3
                className="text-xl mb-3"
                style={{
                  color: "var(--maroon)",
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "var(--black)" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

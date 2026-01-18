import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: "var(--black)" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-4xl mb-4"
              style={{
                fontFamily: "'Lobster', cursive",
                color: "var(--yellow)",
              }}
            >
              Wonton Sarjana
            </h3>
            <p style={{ color: "var(--yellow-light)" }}>
              Cemilan enak dan murah dari mahasiswa untuk mahasiswa! 🎓🥟
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{
                color: "var(--yellow)",
                fontWeight: 600,
              }}
            >
              Hubungi Kita
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285811090227"
                className="flex items-center gap-3 transition-transform hover:scale-105"
              >
                <FaWhatsapp size={20} style={{ color: "var(--yellow)" }} />
                <span style={{ color: "var(--yellow-light)" }}>
                  085811090227
                </span>
              </a>
              <a
                href="mailto:wontonsarjana.swt@gmail.com"
                className="flex items-center gap-3 transition-transform hover:scale-105"
              >
                <MdMailOutline size={20} style={{ color: "var(--yellow)" }} />
                <span style={{ color: "var(--yellow-light)" }}>
                  wontonsarjana.swt@gmail.com
                </span>
              </a>
              {/* <a
                href="https://www.instagram.com/wontonsarjana"
                className="flex items-center gap-3 transition-transform hover:scale-105"
              >
                <FaInstagram size={20} style={{ color: "var(--yellow)" }} />
                <span style={{ color: "var(--yellow-light)" }}>
                  wontonsarjana
                </span>
              </a> */}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{
                color: "var(--yellow)",
                fontWeight: 600,
              }}
            >
              Lokasi
            </h4>
            <a
              href="https://maps.app.goo.gl/8d8X7yWipbfgTVCcA"
              className="flex items-start gap-3 transition-transform hover:scale-105"
            >
              <FaMapMarkerAlt
                size={20}
                style={{ color: "var(--yellow)" }}
                className="shrink-0 mt-1"
              />
              <span style={{ color: "var(--yellow-light)" }}>
                Politeknik Negeri Bandung
              </span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 text-center border-t"
          style={{ borderColor: "var(--maroon)" }}
        >
          <p style={{ color: "var(--yellow-light)" }}>© 2026 Wonton Sarjana</p>
        </div>
      </div>
    </footer>
  );
}

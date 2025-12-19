import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a3120",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <div style={{ paddingTop: 32 }}>
        <img
          src="/Goldentour.png"
          alt="Golden Tour"
          style={{ height: 180 }}
        />
      </div>

      {/* Center content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              textTransform: "uppercase",
              fontVariant: "small-caps",
              background: "linear-gradient(90deg, #c4aa68, #ffffff, #c4aa68)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "fadeIn 1.2s ease forwards",
              opacity: 0,
              marginBottom: 32,
            }}
          >
            Vi köper guld och silver
          </h1>

          {/* Info box */}
          <div
            style={{
              padding: "24px 32px",
              marginTop: "60px",
              borderRadius: 16,
              border: "0.01em solid #c4aa68",
              color: "#c4aa68",
              display: "flex",
              flexDirection: "column",
              gap: 32,
              minWidth: 320,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaPhoneAlt size={18} />
              <span>+46 76 513 44 56</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FaEnvelope size={18} />
              <span>info@goldentour.se</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

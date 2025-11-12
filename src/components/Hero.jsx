import React from "react";
const Hero = () => {
  return (
    <section className="bg-[#f5ede4] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        
        {/* LEFT: Image + badges */}
        <div className="relative flex items-center justify-center">
          {/* USA → UK Badge - positioned at top-right of image */}
          <div className="absolute top-6 -left-2 z-30">
            <div className="bg-[#2d5a47] text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide whitespace-nowrap shadow-lg">
              USA → UK
            </div>
          </div>

          {/* Blob Shape Container with SVG Clip Path */}
          <div className="relative w-80 h-96 lg:w-96 lg:h-[480px]">
            <svg
              viewBox="0 0 400 480"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <clipPath id="heroClip">
                  <path d="M80,100 Q0,80 0,200 Q0,400 120,450 Q180,480 280,450 Q400,400 400,280 Q400,100 280,80 Q180,40 80,100 Z" />
                </clipPath>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#1e88e5', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#0d47a1', stopOpacity: 1}} />
                </linearGradient>
              </defs>

              {/* Blue gradient background with vertical stripes effect */}
              <rect width="400" height="480" fill="url(#blobGradient)" />
              <defs>
                <pattern id="stripes" x="0" y="0" width="20" height="480" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="480" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                </pattern>
              </defs>
              <rect width="400" height="480" fill="url(#stripes)" />

              {/* Image with clip path */}
              <image
                href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=1400&fit=crop"
                width="400"
                height="480"
                clipPath="url(#heroClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>

          {/* Miles Driven Badge - bottom left overlap */}
          <div className="absolute -bottom-20 left-4 lg:left-0 z-20">
            <div 
              className="text-center shadow-2xl"
              style={{
                background: "#a89f84",
                borderRadius: "50%",
                width: "200px",
                padding: "28px 20px",
                boxShadow: "0 16px 40px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="text-4xl font-black text-gray-950 leading-tight">
                78,616
              </div>
              <div className="text-xs font-black text-gray-950 tracking-widest mt-3 uppercase">
                Miles driven<br />in miami
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text content side */}
        <div className="relative lg:pl-12">
          {/* Title - large heavy weight */}
          <h1
            className="font-black text-gray-950"
            style={{
              fontSize: 70,
              lineHeight: 0.95,
              marginBottom: 24,
              letterSpacing: -0.5,
            }}
          >
            Get your <br className="hidden md:block" />
            miles’ worth
          </h1>

          {/* Subtitle paragraph */}
          <p
            style={{
              color: "#555555",
              maxWidth: 540,
              fontSize: 17,
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            Moved to the UK? You could save an average of{" "}
            <span style={{ fontWeight: 700 }}>£392</span> on your car insurance,
            with fairer prices based on all your driving experience - in any
            country.<span style={{ fontSize: 11, verticalAlign: "super" }}>*</span>
          </p>

          {/* Feature list - green arrow bullet like original */}
          <ul style={{ listStyle: "none", padding: 0, marginBottom: 36 }}>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ marginTop: 3, color: "#0f7a4f", fontSize: 18 }}>➜</div>
              <div style={{ fontSize: 15, color: "#333", fontWeight: 600 }}>
                Licences from <span style={{ fontWeight: 800 }}>all</span> countries covered
              </div>
            </li>

            <li style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 16 }}>
              <div style={{ marginTop: 3, color: "#0f7a4f", fontSize: 18 }}>➜</div>
              <div style={{ fontSize: 15, color: "#333", fontWeight: 600 }}>
                Discounts based on <span style={{ fontWeight: 800 }}>all</span> your driving experience - in any country
              </div>
            </li>

            <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ marginTop: 3, color: "#0f7a4f", fontSize: 18 }}>➜</div>
              <div style={{ fontSize: 15, color: "#333", fontWeight: 600 }}>
                Flexible payment options, like pay monthly
              </div>
            </li>
          </ul>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <button
              style={{
                background: "#ff88c7",
                borderRadius: 50,
                padding: "14px 42px",
                color: "#333",
                fontWeight: 800,
                fontSize: 16,
                boxShadow: "0 8px 24px rgba(255,136,199,0.24)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.background = "#ff6fbf"}
              onMouseOut={(e) => e.target.style.background = "#ff88c7"}
            >
              Get a free quote
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#666", fontWeight: 600, fontSize: 15 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <span>Regulated by the <strong>FCA</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

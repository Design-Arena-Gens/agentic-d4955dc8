import Image from "next/image";
import { ContactForm } from "./components/ContactForm";

const services = [
  {
    icon: "⚡",
    title: "Electrical Wiring & Fitting",
    titleHi: "इलेक्ट्रिकल वायरिंग और फिटिंग",
    description:
      "Complete rewiring, new connections, और सुरक्षित fitting solutions for homes and retail spaces."
  },
  {
    icon: "🔧",
    title: "Appliance Repair & Service",
    titleHi: "होम अप्लायंस रिपेयर और सर्विस",
    description:
      "AC, fridge, washing machine, microwave और अन्य appliances के लिए तेज़ और भरोसेमंद मरम्मत."
  },
  {
    icon: "🧰",
    title: "Installation & Setup",
    titleHi: "इंस्टॉलेशन और सेटअप",
    description:
      "Geyser, ceiling fan, RO system, LED lighting, smart devices के expert installation."
  },
  {
    icon: "🛡️",
    title: "Preventive Maintenance",
    titleHi: "रखरखाव और सुरक्षा जांच",
    description:
      "Routine inspections, load balancing, और safety audits to avoid breakdowns and hazards."
  }
];

const highlights = [
  "10+ years electrical contracting experience | 10+ वर्षों का अनुभव",
  "Licensed, insured & background-verified technicians | लाइसेंसशुदा और सत्यापित टेक्नीशियन",
  "Same day emergency assistance in Dwarka | द्वारका में उसी दिन आपातकालीन सेवा",
  "Upfront transparent pricing | ईमानदार पारदर्शी मूल्य"
];

export default function Home() {
  return (
    <div className="page-wrapper">
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" aria-label="Dwarka Electrical Experts">
            <span role="img" aria-hidden>
              🔌
            </span>
            Dwarka Electrical <span>Experts</span>
          </a>

          <nav className="nav-link-group" aria-label="Primary navigation">
            <a className="nav-link" href="#home">
              Home | होम
            </a>
            <a className="nav-link" href="#about">
              About Us | हमारे बारे में
            </a>
            <div className="nav-dropdown">
              <button className="nav-link" type="button" aria-haspopup="true">
                Services | सेवाएँ ▼
              </button>
              <div className="dropdown-content" role="menu">
                <a className="dropdown-item" href="#services">
                  Electrical Wiring | इलेक्ट्रिकल वायरिंग
                </a>
                <a className="dropdown-item" href="#services">
                  Appliance Repair | अप्लायंस रिपेयर
                </a>
                <a className="dropdown-item" href="#services">
                  Installation | इंस्टॉलेशन
                </a>
                <a className="dropdown-item" href="#services">
                  Maintenance | मेंटेनेंस
                </a>
              </div>
            </div>
            <a className="nav-link" href="#contact">
              Contact | संपर्क
            </a>
          </nav>

          <div className="nav-link-group">
            <div className="lang-toggle" aria-label="Language toggle">
              🇬🇧 English / 🇮🇳 हिन्दी
            </div>
            <a className="primary-btn" href="#contact">
              Book a Service | सेवा बुक करें
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <span className="badge">⭐ 4.8 (53 reviews) | 53 समीक्षाएँ</span>
            <h1>
              Trusted Electrical & Appliance Repair in Dwarka
              <br />
              <span style={{ color: "var(--primary)", display: "block" }}>
                द्वारका में भरोसेमंद इलेक्ट्रिकल और होम अप्लायंस सेवा
              </span>
            </h1>
            <p>
              Pocket 1, DDA SFA Flat, Dwarka Sector 05, दिल्ली - 110075 में स्थित। तेज़ प्रतिक्रिया, साफ-सुथरा काम,
              और सुरक्षा पहले. We keep your home powered and protected.
            </p>
            <div className="cta-row">
              <a className="outline-btn" href="tel:+919876543210">
                📞 Call Now | अभी कॉल करें
              </a>
              <a className="ghost-btn" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                💬 WhatsApp Us | व्हाट्सएप
              </a>
              <a className="primary-btn" href="#contact">
                📅 Book a Service | सेवा बुक करें
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=880&q=80"
              alt="Technician repairing electrical panel"
              width={560}
              height={520}
              priority
            />
            <div className="hero-card">
              <h3>Certified Experts | प्रमाणित विशेषज्ञ</h3>
              <p>
                Fast diagnostics, genuine parts, और सुरक्षा compliant solutions for every call-out.
              </p>
            </div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-header">
            <h2>
              Professional Electrical Services | प्रोफेशनल इलेक्ट्रिकल सेवाएँ
            </h2>
            <p>
              Residential और commercial दोनों के लिए सुरक्षित, time-bound solutions. बिजली की हर ज़रूरत के लिए आपका
              एक ही भरोसेमंद पार्टनर.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon" aria-hidden>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>
                  <strong>{service.titleHi}</strong> — {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-card">
            <h3>
              Why Dwarka trusts us | द्वारका हम पर क्यों भरोसा करता है
            </h3>
            <p>
              Local electricians delivering clean workmanship, precise troubleshooting, और friendly सेवा. हम हर विजिट को
              hassle-free रखते हैं so you stay relaxed and powered up.
            </p>
            <ul className="about-list">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <span role="img" aria-hidden>
                    ✅
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-card">
            <h4>
              Business Info | व्यवसाय की जानकारी
            </h4>
            <div className="info-row">
              <div>
                <div className="info-label">Address | पता</div>
                <div>Pocket 1, DDA SFA Flat, Dwarka Sector 05, Delhi - 110075</div>
              </div>
              <div>
                <div className="info-label">Phone | फ़ोन</div>
                <a href="tel:+919876543210" style={{ color: "inherit" }}>
                  +91 98765 43210
                </a>
              </div>
              <div>
                <div className="info-label">Hours | खुलने का समय</div>
                <div>Mon-Sat 10 AM - 8 PM | रविवार बंद</div>
              </div>
              <div>
                <div className="info-label">Service Areas | सेवा क्षेत्र</div>
                <div>Dwarka, Palam, Janakpuri, Uttam Nagar</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-header">
            <h2>
              Book Your Service Slot | अपनी सेवा बुक करें
            </h2>
            <p>
              हमें अपनी आवश्यकता बताइए। हमारी टीम तुरंत call back करेगी और आपके लिए best time slot लॉक करेगी.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Quick Contact | त्वरित संपर्क</h3>
              <p>
                Call या WhatsApp पर तुरंत जवाब मिलता है. Emergency repairs के लिए same day support उपलब्ध है.
              </p>
              <div className="contact-details">
                <div>
                  <strong>Phone | फ़ोन:</strong>{" "}
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div>
                  <strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                    wa.me/919876543210
                  </a>
                </div>
                <div>
                  <strong>Email | ईमेल:</strong>{" "}
                  <a href="mailto:support@dwarkaelectricals.in">support@dwarkaelectricals.in</a>
                </div>
                <div>
                  <strong>Office Hours | समय:</strong> Mon-Sat 10 AM - 8 PM | रविवार बंद
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Service Request Form | सेवा अनुरोध फॉर्म</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Dwarka Electrical Experts © {new Date().getFullYear()}</p>
          <p>
            Powered by local professionals | स्थानीय पेशेवरों द्वारा संचालित — Serving Dwarka with care and safety.
          </p>
        </div>
      </footer>

      <a className="whatsapp-float" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
        <span role="img" aria-hidden>
          💬
        </span>
        WhatsApp | संदेश भेजें
      </a>
    </div>
  );
}

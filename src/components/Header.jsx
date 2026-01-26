import { useState } from "react";

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>SHADOWFALL</div>

        <nav style={styles.nav}>
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                ...styles.link,
                ...(hoveredLink === item ? styles.linkHover : {}),
              }}
              onMouseEnter={() => setHoveredLink(item)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item}
            </a>
          ))}
        </nav>

        <button style={styles.button}>Buy Game</button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: "100%",
    padding: "22px 0",
    minHeight: 0,
    backgroundImage: "url('/background.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "contain",
    backgroundSize: "100% auto",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 700,
    fontSize: 18,
    letterSpacing: "2px",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: 32,
  },
  link: {
    fontSize: 14,
    textDecoration: "none",
    color: "#000",
    opacity: 0.7,
    transition: "all 0.2s ease",
  },
  linkHover: {
    opacity: 1,
    color: "#3b4eff",
    transform: "translateY(-1px)",
  },
  button: {
    background: "#3b4eff",
    color: "#fff",
    border: "none",
    padding: "5px 20px",
    borderRadius: 4,
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

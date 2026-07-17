import { aboutContent } from "@/content/about";

interface ServicePill {
  icon: string;
  label: string;
}

const row1: ServicePill[] = aboutContent.pills.slice(0, 3);
const row2: ServicePill[] = aboutContent.pills.slice(3);

function Pill({ icon, label }: ServicePill) {
  return (
    <div
      className="flex items-center"
      style={{
        background: "rgba(12,12,12,0.82)",
        color: "#FFFFFF",
        padding: "10px 20px",
        borderRadius: "50px",
        fontSize: "14px",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        gap: "8px",
        flexShrink: 0,
      }}
    >
      <span aria-hidden="true" style={{ fontSize: "16px" }}>
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col items-center text-center"
      style={{
        background: "#F0F0F0",
        paddingTop: "100px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
          fontSize: "18px",
          color: "#FF4D00",
          fontStyle: "italic",
          marginBottom: "24px",
        }}
      >
        {aboutContent.label}
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Cal Sans', ui-sans-serif, system-ui, sans-serif",
          fontWeight: 400,
          lineHeight: 1.1,
          fontSize: "clamp(36px, 5vw, 56px)",
          marginBottom: "48px",
          maxWidth: "900px",
        }}
      >
        <span style={{ color: aboutContent.headingLines[0].color }}>
          {aboutContent.headingLines[0].text}
        </span>
        <br />
        <span style={{ color: aboutContent.headingLines[1].color }}>{aboutContent.headingLines[1].text}</span>
        <span style={{ color: "#FF4D00" }}>{aboutContent.headingLines[1].highlight}</span>
        <span style={{ color: aboutContent.headingLines[1].color }}> —</span>
        <br />
        <span style={{ color: aboutContent.headingLines[2].color }}>
          {aboutContent.headingLines[2].text}
        </span>
      </h2>

      {/* Service pills */}
      <div
        className="flex flex-col items-center"
        style={{ gap: "8px", maxWidth: "600px" }}
      >
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: "8px" }}
        >
          {row1.map((pill) => (
            <Pill key={pill.label} {...pill} />
          ))}
        </div>
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: "8px" }}
        >
          {row2.map((pill) => (
            <Pill key={pill.label} {...pill} />
          ))}
        </div>
      </div>
    </section>
  );
}

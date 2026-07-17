import { scrollingBannersContent } from "@/content/banners";

const { orange, dark } = scrollingBannersContent;

export default function ScrollingBanners() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center"
      style={{
        background: "#F0F0F0",
        height: "300px",
      }}
    >
      {/* Orange strip - rotates -6 degrees */}
      <div
        className="absolute overflow-hidden"
        style={{
          width: "120%",
          left: "-10%",
          transform: "rotate(-6deg)",
          background: orange.color,
          paddingTop: "16px",
          paddingBottom: "16px",
          top: "80px",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee-left 20s linear infinite" }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              style={{
                color: orange.textColor,
                fontSize: "32px",
                fontFamily: "'Cal Sans', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 400,
                paddingLeft: "32px",
                paddingRight: "32px",
                flexShrink: 0,
              }}
            >
              {orange.text.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      {/* Dark strip - rotates +6 degrees */}
      <div
        className="absolute overflow-hidden"
        style={{
          width: "120%",
          left: "-10%",
          transform: "rotate(6deg)",
          background: dark.color,
          paddingTop: "16px",
          paddingBottom: "16px",
          top: "148px",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee-right 20s linear infinite" }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              style={{
                color: dark.textColor,
                fontSize: "32px",
                fontFamily: "'Cal Sans', ui-sans-serif, system-ui, sans-serif",
                fontWeight: 400,
                paddingLeft: "32px",
                paddingRight: "32px",
                flexShrink: 0,
              }}
            >
              {dark.text.repeat(4)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

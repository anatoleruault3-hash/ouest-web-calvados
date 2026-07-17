"use client";

import { useState } from "react";
import { faqContent } from "@/content/faq";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = faqContent.items;

function FAQItemCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.8)",
        borderRadius: "16px",
        padding: "24px",
        cursor: "pointer",
      }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={isOpen}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: "16px",
            color: "#131313",
            fontWeight: 500,
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {item.question}
        </span>
        <span
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#131313",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            lineHeight: 1,
            flexShrink: 0,
            fontWeight: 300,
            transition: "transform 0.2s ease",
          }}
          aria-hidden="true"
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <p
          style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: "14px",
            color: "#5C5C5C",
            marginTop: "16px",
            lineHeight: 1.6,
          }}
        >
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(2);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumn = faqItems.slice(0, 3);
  const rightColumn = faqItems.slice(3, 6);

  return (
    <section
      style={{
        background: "#F0F0F0",
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "48px",
        paddingRight: "48px",
      }}
    >
      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "0px" }}>
        <span
          style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            fontSize: "14px",
            color: "#5C5C5C",
          }}
        >
          {faqContent.label}
        </span>
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Cal Sans', ui-sans-serif, system-ui, sans-serif",
          fontSize: "clamp(36px, 6vw, 56px)",
          color: "#131313",
          textAlign: "center",
          marginBottom: "16px",
          marginTop: "0px",
        }}
      >
        {faqContent.heading}
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
          fontSize: "16px",
          color: "#5C5C5C",
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        {faqContent.subtitle}
      </p>

      {/* 2-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {leftColumn.map((item) => (
            <FAQItemCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {rightColumn.map((item) => (
            <FAQItemCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { servicesContent } from '@/content/services'

const services = servicesContent.items

export function ServicesSection() {
  const [activeLabel, setActiveLabel] = useState(servicesContent.defaultTab)
  const [animating, setAnimating] = useState(false)
  const [displayed, setDisplayed] = useState(servicesContent.defaultTab)

  const activeService = services.find((s) => s.label === displayed) ?? services[1]

  const handleTabClick = (label: string) => {
    if (label === activeLabel) return
    setAnimating(true)
    setActiveLabel(label)
    setTimeout(() => {
      setDisplayed(label)
      setAnimating(false)
    }, 200)
  }

  return (
    <section
      style={{
        background: '#F0F0F0',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Section header */}
      <div
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: '#5C5C5C',
            marginBottom: '8px',
          }}
        >
          {servicesContent.label}
        </p>
        <h2
          style={{
            fontFamily: '"Cal Sans", sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 600,
            color: '#131313',
            margin: 0,
            marginBottom: '40px',
            lineHeight: 1.1,
          }}
        >
          {servicesContent.heading}
        </h2>

        {/* Tab navigation */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            borderBottom: '1px solid rgba(19,19,19,0.15)',
            paddingBottom: '16px',
            marginBottom: '0px',
          }}
        >
          {services.map((service) => {
            const isActive = service.label === activeLabel
            return (
              <button
                key={service.label}
                onClick={() => handleTabClick(service.label)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: isActive ? '#131313' : '#5C5C5C',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {isActive && (
                  <span style={{ color: '#FF4D00', fontSize: '16px', lineHeight: 1 }}>•</span>
                )}
                {service.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content area */}
      <div
        style={{
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.2s ease',
          overflow: 'hidden',
        }}
      >
        {/* Scrolling marquee */}
        <div
          style={{
            overflow: 'hidden',
            paddingTop: '48px',
            paddingBottom: '0px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              animation: 'marquee-scroll 18s linear infinite',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  fontFamily: '"Cal Sans", sans-serif',
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  fontWeight: 600,
                  color: activeService.marqueeColor,
                  letterSpacing: '-0.02em',
                  display: 'inline-block',
                  paddingRight: '40px',
                }}
              >
                {activeService.marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Center image + description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '48px',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          {/* Image card */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              height: '340px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '32px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
            }}
          >
            <Image
              src={activeService.image}
              alt={activeService.label}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: '#131313',
              textAlign: 'center',
              maxWidth: '500px',
              marginBottom: '24px',
              lineHeight: 1.5,
            }}
          >
            {activeService.description}
          </p>

          {/* Tag pills */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {activeService.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'white',
                  background: '#131313',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee keyframe animation */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}

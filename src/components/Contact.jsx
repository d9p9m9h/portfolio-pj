import { useState } from 'react'
import 'react-dom'
import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { profile, socials, photo } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0 110px;
`

const Lead = styled.p`
  color: var(--muted);
  margin-bottom: 10px;
`

const EmailLink = styled.a`
  display: inline-block;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Social = styled.a`
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: var(--glass-shadow);

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    color: var(--text);
    background: var(--glass-bg);
  }
`

// NEW: Wrapper, Image, Vignette
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;        /* Adjust if your image is different ratio */
  border-radius: 2px;
  overflow: hidden;
`

const ContImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 2px;
  pointer-events: none;
  background: radial-gradient(
    ellipse 80% 82% at 35% 35%,
    transparent 35%,
    var(--bg) 85%
  );
`

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <Section id="contact">
      <div className="container">
        <SectionHeading
          tag="Contact"
          title="Let's build something great"
          sub="Have a project in mind? Drop a message — I usually reply within 24 hours."
        />

        <div className="row g-5">
          <div className="col-lg-5">
            <Lead>Contact me at</Lead>
            <EmailLink href={`mailto:${profile.email}`}>
              {profile.email}
            </EmailLink>
            <SocialRow>
              {socials.map((s) => (
                <Social key={s.name} href={s.href}>
                  {s.name}
                </Social>
              ))}
            </SocialRow>
          </div>
          <div className="col-lg-7">
            <ImageWrapper>
              <ContImg src={photo.contImg} alt={profile.name} />
              <Vignette />
            </ImageWrapper>
          </div>
        </div>
      </div>
    </Section>
  )
}

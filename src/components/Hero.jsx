import styled from 'styled-components'
import { profile } from '../data/portfolio.js'

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 130px 0 90px;
  position: relative;
  overflow: hidden;
`

const GlowA = styled.div`
  position: absolute;
  top: -120px;
  right: -80px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: var(--accent);
  filter: blur(150px);
  opacity: 0.28;
  pointer-events: none;
`

const GlowB = styled.div`
  position: absolute;
  bottom: -140px;
  left: -100px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: var(--accent-2);
  filter: blur(150px);
  opacity: 0.22;
  pointer-events: none;
`

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;

  .pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34d399;
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
    70% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
    100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
  }
`

const Title = styled.h1`
  margin: 24px 0 18px;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
`

const Gradient = styled.span`
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const Tagline = styled.p`
  color: var(--muted);
  font-size: 1.15rem;
  max-width: 520px;
  margin-bottom: 34px;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

const PrimaryBtn = styled.a`
  padding: 14px 30px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.35);
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
    color: #fff;
  }
`

const GhostBtn = styled.a`
  padding: 14px 30px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: var(--surface-2);
    border-color: rgba(139, 92, 246, 0.5);
    color: var(--text);
  }
`

const Artboard = styled.div`
  position: relative;
  max-width: 420px;
  aspect-ratio: 4 / 5;
  margin: 0 auto;
`

const CardBack = styled.div`
  position: absolute;
  inset: 8% 4% 4% 8%;
  border-radius: 22px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  transform: rotate(6deg);
`

const CardMid = styled.div`
  position: absolute;
  inset: 6% 8% 8% 4%;
  border-radius: 22px;
  background: var(--surface);
  border: 1px solid var(--border);
  transform: rotate(-3deg);
`

const CardFront = styled.div`
  position: absolute;
  inset: 12%;
  border-radius: 22px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.4rem;
  font-weight: 800;
  color: #fff;
  box-shadow: 0 24px 60px rgba(139, 92, 246, 0.35);
`

export function Hero() {
    return (
        <Section id="home">
            <GlowA />
            <GlowB />
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <Eyebrow>
                            <span className="pulse" />
                            {profile.role} — Available for freelance
                        </Eyebrow>
                        <Title>
                            I design <Gradient>bold visuals</Gradient>
                            <br />
                            that tell stories.
                        </Title>
                        <Tagline>{profile.tagline}</Tagline>
                        <Actions>
                            <PrimaryBtn href="#projects">View my work</PrimaryBtn>
                            <GhostBtn href="#contact">Get in touch</GhostBtn>
                        </Actions>
                    </div>

                    <div className="col-lg-5 d-none d-lg-block">
                        <Artboard>
                            <CardBack />
                            <CardMid />
                            <CardFront>A</CardFront>
                        </Artboard>
                    </div>
                </div>
            </div>
        </Section>
    )
}

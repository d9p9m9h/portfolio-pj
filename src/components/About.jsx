import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { profile, photo } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0;
`

const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: block;
`

const Portrait = styled.div`
  position: relative;
  max-width: 380px;
  aspect-ratio: 1;
  border-radius: 24px;
  background: linear-gradient(135deg, var(--surface-2), var(--surface));
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  // font-size: 4rem;
  // font-weight: 800;
  // color: var(--accent);/

  &::after {
    // content: '';
    position: absolute;
    inset: 14px;
    border: 1px dashed rgba(139, 92, 246, 0.4);
    border-radius: 16px;
    pointer-events: none;
  }
`

const Bio = styled.p`
  color: var(--muted);
  line-height: 1.8;
`

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`

const Stat = styled.div`
  flex: 1 1 120px;
  padding: 18px 20px;
  border-radius: 16px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.15);
  }
`

const Value = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const Label = styled.div`
  color: var(--muted);
  font-size: 0.85rem;
  margin-top: 4px;
`

export function About() {
    const initials = profile.name
        .split(' ')
        .map((w) => w[0])
        .join('')

    return (
        <Section id="about">
            <div className="container">
                <SectionHeading
                    tag="About"
                    title="Film maker, editor & visual storyteller"
                />
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <Portrait>
                          <AboutImg src={photo.aboutImg} alt={profile.name} />
                        </Portrait>
                    </div>
                    <div className="col-lg-7">
                        {profile.bio.map((paragraph, i) => (
                            <Bio key={i}>{paragraph}</Bio>
                        ))}
                        <Stats>
                            {profile.stats.map((s) => (
                                <Stat key={s.label}>
                                    <Value>{s.value}</Value>
                                    <Label>{s.label}</Label>
                                </Stat>
                            ))}
                        </Stats>
                    </div>
                </div>
            </div>
        </Section>
    )
}

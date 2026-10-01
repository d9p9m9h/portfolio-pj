import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { services } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`

const Card = styled.div`
  padding: 28px;
  border-radius: 18px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(236, 72, 153, 0.5);
    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.15);
  }

  .icon {
    font-size: 1.9rem;
    margin-bottom: 14px;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  p {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.7;
    margin: 0;
  }
`

export function Services() {
  return (
    <Section id="services">
      <div className="container">
        <SectionHeading
          tag="Services"
          title="What I can do for you"
          sub="From rough cut to final master — end-to-end post-production services."
        />

        <Grid>
          {services.map((s) => (
            <Card key={s.title}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  )
}

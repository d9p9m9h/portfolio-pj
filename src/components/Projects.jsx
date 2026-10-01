import { useState } from 'react'
import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { projects } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 34px;
`

const Chip = styled.button`
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: ${(p) => (p.$active ? 'linear-gradient(135deg, var(--accent), var(--accent-2))' : 'var(--glass-bg)')};
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: ${(p) => (p.$active ? '#fff' : 'var(--muted)')};
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: var(--glass-shadow);

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    color: ${(p) => (p.$active ? '#fff' : 'var(--text)')};
    background: ${(p) => (p.$active ? 'linear-gradient(135deg, var(--accent), var(--accent-2))' : 'var(--glass-bg)')};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`

const Card = styled.article`
  border-radius: 18px;
  overflow: hidden;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(139, 92, 246, 0.5);
    box-shadow: 0 12px 40px rgba(139, 92, 246, 0.2);
  }
`

const Cover = styled.div`
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${(p) => p.$from}, ${(p) => p.$to});
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
`

const Body = styled.div`
  padding: 20px 22px 24px;
`

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
`

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export function Projects() {
  const [active, setActive] = useState('All')
  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <Section id="projects">
      <div className="container">
        <SectionHeading
          tag="Portfolio"
          title="Selected projects"
          sub="A mix of music videos, documentaries, commercials, and narrative films. Filter by category."
        />

        <Filters>
          {categories.map((c) => (
            <Chip key={c} $active={active === c} onClick={() => setActive(c)}>
              {c}
            </Chip>
          ))}
        </Filters>

        <Grid>
          {visible.map((p) => (
            <Card key={p.id}>
              <Cover $from={p.colors[0]} $to={p.colors[1]}>
                {p.category}
              </Cover>
              <Body>
                <Meta>
                  <span>{p.category}</span>
                  <span>{p.year}</span>
                </Meta>
                <Title>{p.title}</Title>
              </Body>
            </Card>
          ))}
        </Grid>
      </div>
    </Section>
  )
}

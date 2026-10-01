import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { skills } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0;
`

const ToolList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 26px;
`

const Tool = styled.span`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: var(--glass-shadow);
`

const Panel = styled.div`
  padding: 34px;
  border-radius: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`

const Row = styled.div`
  & + & {
    margin-top: 24px;
  }
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 600;

  .pct {
    color: var(--muted);
  }
`

const Track = styled.div`
  height: 8px;
  border-radius: 999px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
`

const Fill = styled.div`
  height: 100%;
  width: ${(p) => p.$level}%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
`

export function Skills() {
  return (
    <Section id="skills">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <SectionHeading tag="Skills" title="Tools of the trade" />
            <ToolList>
              {skills.map((s) => (
                <Tool key={s.name}>{s.name}</Tool>
              ))}
            </ToolList>
          </div>

          <div className="col-lg-8">
            <Panel>
              {skills.map((s) => (
                <Row key={s.name}>
                  <Head>
                    <span>{s.name}</span>
                    <span className="pct">{s.level}%</span>
                  </Head>
                  <Track>
                    <Fill $level={s.level} />
                  </Track>
                </Row>
              ))}
            </Panel>
          </div>
        </div>
      </div>
    </Section>
  )
}

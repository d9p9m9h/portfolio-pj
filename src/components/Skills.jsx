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
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
`

const Panel = styled.div`
  padding: 34px;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
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
  background: var(--surface-2);
  overflow: hidden;
`

const Fill = styled.div`
  height: 100%;
  width: ${(p) => p.$level}%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
`

const tools = [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'After Effects',
    'Figma',
    'Procreate',
]

export function Skills() {
    return (
        <Section id="skills">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <SectionHeading tag="Skills" title="Tools of the trade" />
                        <ToolList>
                            {tools.map((t) => (
                                <Tool key={t}>{t}</Tool>
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

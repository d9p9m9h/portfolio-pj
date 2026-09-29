import styled from 'styled-components'

const Wrap = styled.div`
  margin-bottom: 48px;
`

const Tag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 18px 0 10px;
  font-size: clamp(1.9rem, 3.6vw, 2.6rem);
  font-weight: 800;
  line-height: 1.15;
`

const Sub = styled.p`
  color: var(--muted);
  max-width: 560px;
  margin: 0;
`

/**
 * Shared section heading: small pill tag + big title + optional subtitle.
 */
export function SectionHeading({ tag, title, sub }) {
    return (
        <Wrap>
            {tag && <Tag>{tag}</Tag>}
            <Title>{title}</Title>
            {sub && <Sub>{sub}</Sub>}
        </Wrap>
    )
}

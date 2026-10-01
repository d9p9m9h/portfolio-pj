import styled from 'styled-components'
import { dev, profile, socials } from '../data/portfolio.js'

const FooterWrap = styled.footer`
  padding: 34px 0;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-top: 1px solid var(--glass-border);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.3);
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 700;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
  }
`

const Copy = styled.span`
  color: var(--muted);
  font-size: 0.85rem;
`

const Links = styled.div`
  display: flex;
  gap: 16px;
`

const Link = styled.a`
  color: var(--muted);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`

const Gradient = styled.span`
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

export function Footer() {
  return (
    <FooterWrap>
      <div className="container">
        <Inner>
          <Copy />
          <Copy>
            © {new Date().getFullYear()} Developed by {profile.devName} all rights reserved.
          </Copy>
          <Links>
            <Brand >
              <Gradient>
                {dev.map((s) => (
                  <Link key={s.name} href={s.href}>
                    {s.name}
                  </Link>
                ))}
              </Gradient>
            </Brand>
          </Links>
        </Inner>
      </div>
    </FooterWrap>
  )
}

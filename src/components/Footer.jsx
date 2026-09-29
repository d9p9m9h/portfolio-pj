import styled from 'styled-components'
import { profile, socials } from '../data/portfolio.js'

const FooterWrap = styled.footer`
  padding: 34px 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 700;
  text-decoration: none;

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

export function Footer() {
    return (
        <FooterWrap>
            <div className="container">
                <Inner>
                    <Brand href="#home">{profile.name}</Brand>
                    <Copy>
                        © {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </Copy>
                    <Links>
                        {socials.map((s) => (
                            <Link key={s.name} href={s.href}>
                                {s.name}
                            </Link>
                        ))}
                    </Links>
                </Inner>
            </div>
        </FooterWrap>
    )
}

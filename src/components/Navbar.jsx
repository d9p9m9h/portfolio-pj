import { useState } from 'react'
import styled from 'styled-components'
import { profile } from '../data/portfolio'

const Header = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
`

const Inner = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
`

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
  }
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: inline-block;
    padding: 8px 14px;
    border-radius: 999px;
    color: var(--muted);
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid transparent;

    &:hover {
      color: var(--text);
      background: var(--glass-bg);
      border-color: var(--glass-border);
    }
  }

  @media (max-width: 991px) {
    display: none;
  }
`

const Cta = styled.a`
  padding: 10px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
    color: #fff;
    box-shadow: 0 10px 32px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
  }

  @media (max-width: 575px) {
    display: none;
  }
`

const Burger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 10px;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 10px;
  box-shadow: var(--glass-shadow);

  span {
    display: block;
    height: 2px;
    width: 100%;
    background: var(--text);
    border-radius: 2px;
  }

  @media (max-width: 991px) {
    display: flex;
  }
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: block;
    border-top: 1px solid var(--glass-border);
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 12px 0 18px;

    a {
      display: block;
      padding: 12px 24px;
      color: var(--muted);
      font-weight: 600;
      text-decoration: none;

      &:hover {
        color: var(--text);
        background: var(--glass-bg);
      }
    }
  }
`

const Gradient = styled.span`
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <Header>
      <div className="container">
        <Inner>
          <Brand href="#home">
            <span className="dot" />
            <Gradient> {profile.name} </Gradient>
          </Brand>

          <Links>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </Links>

          <Cta href="#contact">Let's talk</Cta>

          <Burger onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </Burger>
        </Inner>

        {open && (
          <MobileMenu>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </MobileMenu>
        )}
      </div>
    </Header>
  )
}

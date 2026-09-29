import { useState } from 'react'
import styled from 'styled-components'
import { SectionHeading } from './SectionHeading.jsx'
import { profile, socials } from '../data/portfolio.js'

const Section = styled.section`
  padding: 100px 0 110px;
`

const Lead = styled.p`
  color: var(--muted);
  margin-bottom: 10px;
`

const EmailLink = styled.a`
  display: inline-block;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  margin-bottom: 28px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent);
  }
`

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Social = styled.a`
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    color: var(--text);
  }
`

const Form = styled.form`
  padding: 34px;
  border-radius: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
`

const Field = styled.div`
  margin-bottom: 18px;

  label {
    display: block;
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text);
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: var(--accent);
    }
  }

  textarea {
    min-height: 130px;
    resize: vertical;
  }
`

const Submit = styled.button`
  padding: 12px 34px;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`

const SentNote = styled.p`
  margin: 16px 0 0;
  color: var(--accent-2);
  font-weight: 600;
`

export function Contact() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        e.target.reset()
    }

    return (
        <Section id="contact">
            <div className="container">
                <SectionHeading
                    tag="Contact"
                    title="Let's build something great"
                    sub="Have a project in mind? Drop a message — I usually reply within 24 hours."
                />

                <div className="row g-5">
                    <div className="col-lg-5">
                        <Lead>Email me at</Lead>
                        <EmailLink href={`mailto:${profile.email}`}>
                            {profile.email}
                        </EmailLink>
                        <SocialRow>
                            {socials.map((s) => (
                                <Social key={s.name} href={s.href}>
                                    {s.name}
                                </Social>
                            ))}
                        </SocialRow>
                    </div>

                    <div className="col-lg-7">
                        <Form onSubmit={handleSubmit}>
                            <Field>
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" required />
                            </Field>
                            <Field>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" required />
                            </Field>
                            <Field>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required />
                            </Field>
                            <Submit type="submit">Send message</Submit>
                            {sent && (
                                <SentNote>
                                    ✓ Thanks! Your message has been noted (skeleton only — no
                                    backend yet).
                                </SentNote>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </Section>
    )
}

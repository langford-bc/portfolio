import type { Metadata } from 'next'
import Link from 'next/link'
import { PortalForm } from './PortalForm'

export const metadata: Metadata = {
  title: 'Assignment Portal — Deen Karim',
  description:
    'Submit a project brief for editorial review, content development, or strategic communications work.',
  robots: { index: false, follow: false },
}

const SERVICES = [
  {
    title: 'Editorial Review & Proofreading',
    body: 'Copy, reports, proposals, and documents reviewed for clarity, accuracy, and voice.',
  },
  {
    title: 'Content Strategy Review',
    body: 'Audit of content plans, messaging frameworks, or editorial calendars against business objectives.',
  },
  {
    title: 'Story Development & Narrative',
    body: 'Structural and narrative development for long-form content, brand stories, and thought leadership.',
  },
  {
    title: 'Strategic Communications Brief',
    body: 'Review and refinement of communications briefs, campaign strategy, or stakeholder messaging.',
  },
]

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <header className="border-b border-[var(--color-border)] px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            ← Deen Karim
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-slate)]">
            Assignment Portal
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Intro */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-slate)] mb-6">
            Submit a brief
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-charcoal)] mb-8 leading-tight">
            Start with a brief.
            <br />I will take it from there.
          </h1>
          <div className="max-w-2xl space-y-4 text-[var(--color-muted)]">
            <p>
              Use this portal to submit work for editorial review, content development, or strategic
              communications. Describe your project in the brief below — what you need, who it is
              for, and what success looks like.
            </p>
            <p>I review every submission personally and respond within one business day.</p>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-16 md:mb-20">
          {SERVICES.map(({ title, body }) => (
            <div key={title} className="bg-[var(--color-cream)] p-6 md:p-8">
              <h3 className="text-sm font-semibold text-[var(--color-charcoal)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="border-t border-[var(--color-border)] pt-12 md:pt-16">
          <h2 className="font-serif text-2xl text-[var(--color-charcoal)] mb-10">
            Your project brief
          </h2>
          <PortalForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] px-6 py-8 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[var(--color-muted)]">
            Hamburg, Germany ·{' '}
            <a
              href="mailto:editorial@deenxwork.com"
              className="hover:text-[var(--color-slate)] transition-colors"
            >
              editorial@deenxwork.com
            </a>
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Data processed under GDPR ·{' '}
            <Link href="/" className="hover:text-[var(--color-slate)] transition-colors">
              deenxwork.com
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

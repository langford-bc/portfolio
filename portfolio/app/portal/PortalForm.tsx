'use client'

import { useActionState } from 'react'
import { submitPortal, type PortalState } from '@/app/actions/submitPortal'

const initialState: PortalState = { status: 'idle', message: '' }

const SERVICES = [
  'Editorial Review & Proofreading',
  'Content Strategy Review',
  'Story Development & Narrative',
  'Strategic Communications Brief',
]

export function PortalForm() {
  const [state, formAction, pending] = useActionState(submitPortal, initialState)

  if (state.status === 'success') {
    return (
      <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-slate)] mb-4">
          Submission received
        </p>
        <p className="font-serif text-xl text-[var(--color-charcoal)] mb-4">{state.message}</p>
        <p className="text-sm text-[var(--color-muted)]">
          A confirmation has been sent to your email address.
        </p>
        <a
          href="/portal"
          className="inline-block mt-8 text-xs font-semibold uppercase tracking-widest text-[var(--color-slate)] border-b border-[var(--color-slate)] pb-0.5 hover:opacity-70 transition-opacity"
        >
          Submit another brief
        </a>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-8">
      {state.status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]"
          >
            Name <span className="text-[var(--color-slate)]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-slate)] transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]"
          >
            Email <span className="text-[var(--color-slate)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-slate)] transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="service"
          className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]"
        >
          Service type <span className="text-[var(--color-slate)]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full border border-[var(--color-border)] bg-[var(--color-cream)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-slate)] transition-colors"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]"
        >
          Project brief <span className="text-[var(--color-slate)]">*</span>
        </label>
        <p className="text-xs text-[var(--color-muted)]">
          Describe what you need, the context, your audience, and any constraints or deadlines.
        </p>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-slate)] transition-colors resize-y"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="file"
          className="block text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]"
        >
          Attach a document{' '}
          <span className="normal-case tracking-normal font-normal">(optional)</span>
        </label>
        <p className="text-xs text-[var(--color-muted)]">
          PDF, Word (.doc/.docx), or plain text. Max 5MB.
        </p>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
          className="w-full text-sm text-[var(--color-muted)] file:mr-4 file:py-2 file:px-4 file:border file:border-[var(--color-border)] file:bg-transparent file:text-xs file:font-semibold file:uppercase file:tracking-widest file:cursor-pointer hover:file:border-[var(--color-slate)] file:transition-colors"
        />
      </div>

      <div className="space-y-5 pt-2 border-t border-[var(--color-border)]">
        <div className="flex gap-3 items-start pt-5">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            value="yes"
            required
            className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-slate)]"
          />
          <label htmlFor="consent" className="text-xs text-[var(--color-muted)] leading-relaxed">
            I consent to Deen Karim processing my name, email address, and any attached document for
            the sole purpose of responding to this inquiry. No data is stored beyond email delivery.
            I may request deletion at any time by emailing{' '}
            <a
              href="mailto:editorial@deenxwork.com"
              className="text-[var(--color-slate)] underline underline-offset-2"
            >
              editorial@deenxwork.com
            </a>
            . Processing is carried out under GDPR Article 6(1)(b).
          </label>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full md:w-auto bg-[var(--color-charcoal)] text-[var(--color-cream)] px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-slate)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? 'Sending…' : 'Submit Brief'}
        </button>
      </div>
    </form>
  )
}

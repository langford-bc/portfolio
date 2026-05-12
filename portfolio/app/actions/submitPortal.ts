'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
]

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5MB

export type PortalState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function submitPortal(
  prevState: PortalState,
  formData: FormData
): Promise<PortalState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const service = formData.get('service') as string
  const description = (formData.get('description') as string)?.trim()
  const consent = formData.get('consent')
  const file = formData.get('file') as File | null

  if (!name || !email || !service || !description) {
    return { status: 'error', message: 'Please complete all required fields.' }
  }

  if (!consent) {
    return { status: 'error', message: 'Please accept the data processing terms to continue.' }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  let attachment: { filename: string; content: Buffer } | undefined
  if (file && file.size > 0) {
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return {
        status: 'error',
        message: 'File must be a PDF, Word document (.doc/.docx), or plain text file.',
      }
    }
    if (file.size > MAX_FILE_BYTES) {
      return { status: 'error', message: 'File must be smaller than 5MB.' }
    }
    attachment = {
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    }
  }

  try {
    await resend.emails.send({
      from: 'Assignment Portal <portal@deenxwork.com>',
      to: 'editorial@deenxwork.com',
      subject: `New submission — ${name} | ${service}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a; padding: 32px;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b6b6b; margin-bottom: 24px;">Assignment Portal · deenxwork.com</p>
          <h2 style="font-size: 22px; margin: 0 0 32px; font-weight: 700;">New Project Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr style="border-bottom: 1px solid #dddbd7;">
              <td style="padding: 12px 0; color: #6b6b6b; width: 140px; font-size: 14px;">Name</td>
              <td style="padding: 12px 0; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #dddbd7;">
              <td style="padding: 12px 0; color: #6b6b6b; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #4a6fa5;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #dddbd7;">
              <td style="padding: 12px 0; color: #6b6b6b; font-size: 14px;">Service</td>
              <td style="padding: 12px 0; font-size: 14px;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6b6b6b; font-size: 14px;">Submitted</td>
              <td style="padding: 12px 0; font-size: 14px;">${new Date().toUTCString()}</td>
            </tr>
          </table>
          <h3 style="font-size: 16px; margin: 0 0 12px; font-weight: 600;">Project Brief</h3>
          <p style="line-height: 1.75; font-size: 14px; white-space: pre-wrap; color: #1a1a1a;">${description}</p>
          ${attachment ? `<p style="margin-top: 24px; font-size: 13px; color: #6b6b6b;">Document attached: ${attachment.filename}</p>` : ''}
        </div>
      `,
      ...(attachment && { attachments: [attachment] }),
    })

    await resend.emails.send({
      from: 'Deen Karim <portal@deenxwork.com>',
      to: email,
      subject: 'Your submission has been received',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a; padding: 32px;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b6b6b; margin-bottom: 24px;">Assignment Portal · deenxwork.com</p>
          <p>Dear ${name},</p>
          <p style="line-height: 1.75;">Your project submission has been received. I will review your brief and respond within one business day.</p>
          <p style="margin-top: 32px;">— Deen Karim</p>
          <p style="margin-top: 48px; font-size: 12px; color: #6b6b6b; border-top: 1px solid #dddbd7; padding-top: 16px;">
            This is an automated acknowledgement. Please do not reply to this message.
            To reach me directly: <a href="mailto:editorial@deenxwork.com" style="color: #4a6fa5;">editorial@deenxwork.com</a>
          </p>
        </div>
      `,
    })

    return {
      status: 'success',
      message: 'Received. I will review your brief and be in touch within one business day.',
    }
  } catch (error) {
    console.error('Portal submission error:', error)
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or email editorial@deenxwork.com directly.',
    }
  }
}

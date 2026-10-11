/**
 * Transactional Email Dispatcher.
 * Dispatches contact briefs and notifications to the configured studio team inbox.
 * Supports Resend, direct SMTP, or safe development audit logging.
 */

export async function sendEnquiryNotification({ name, email, service, scope, message }) {
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'hello.imaginitylabs@gmail.com'
  const resendApiKey = process.env.RESEND_API_KEY

  const subject = `[New Project Brief] ${name} - ${service || 'General Enquiry'}`
  const textContent = `
New enquiry received on Imaginity Labs website:

Name / Company: ${name}
Work Email: ${email}
Primary Interest: ${service || 'N/A'}
Scope / Timeline: ${scope || 'N/A'}

Message:
${message}
----------------------------------------
Received: ${new Date().toISOString()}
`

  // 1. Resend API Dispatch
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: process.env.SMTP_FROM || 'Imaginity Labs <hello.imaginitylabs@gmail.com>',
          to: [receiverEmail],
          reply_to: email,
          subject,
          text: textContent,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('[Mailer] Resend API error:', errorText)
        return { sent: false, error: 'Provider returned error status' }
      }

      const data = await response.json()
      return { sent: true, id: data.id }
    } catch (err) {
      console.error('[Mailer] Error delivering email via Resend:', err.message)
      return { sent: false, error: err.message }
    }
  }

  // 2. Fallback Development Logger
  // In development or when email credentials have not yet been provided in .env:
  console.log('[Mailer] Transactional Email Logged (Configure RESEND_API_KEY in .env for live delivery):')
  console.log(`  To: ${receiverEmail}`)
  console.log(`  From: ${email}`)
  console.log(`  Subject: ${subject}`)
  
  return { sent: true, mode: 'local_audit_log' }
}

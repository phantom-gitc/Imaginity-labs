/* eslint-disable no-control-regex */
/**
 * Input sanitization utility.
 * Removes dangerous tags, script injections, and abnormal control characters
 * while preserving valid punctuation and text for project briefs.
 */

export function sanitizeText(input, maxLength = 2000) {
  if (typeof input !== 'string') return ''
  
  // Truncate to maximum permissible length
  let clean = input.slice(0, maxLength)

  // Strip null bytes and control characters (except newline \n, carriage return \r, tab \t)
  clean = clean.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')

  // Escape HTML tags to prevent stored XSS if rendered or injected into emails
  clean = clean
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')

  return clean.trim()
}

export function sanitizeEmail(email) {
  if (typeof email !== 'string') return ''
  return email.trim().toLowerCase().slice(0, 150)
}

import { nav, footer } from '../components/chrome.js'
import { architectureFaq } from '../components/architecture-faq.js'

export const arquitecturaPage = () => `
${nav('arquitectura')}
<main id="top">${architectureFaq()}</main>
${footer()}`

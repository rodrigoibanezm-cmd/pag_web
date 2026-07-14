import { nav, footer } from '../components/chrome.js'
import { comoHero } from '../components/como-hero.js'
import { sourcesSection } from '../components/sources.js'
import { domainsSection } from '../components/domains.js'
import { processSection } from '../components/process.js'
import { modes } from '../components/modes.js'
import { comoPilot } from '../components/pilot.js'

export const comoPage = () => `
${nav('como')}
<main id="top">${comoHero()}${sourcesSection()}${domainsSection()}${processSection()}${modes()}${comoPilot()}</main>
${footer()}`

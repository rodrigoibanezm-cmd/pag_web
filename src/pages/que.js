import { nav, footer } from '../components/chrome.js'
import { queHero } from '../components/que-hero.js'
import { questionsSection } from '../components/questions.js'
import { proof } from '../components/proof.js'
import { architecture } from '../components/architecture.js'
import { jobs } from '../components/jobs.js'
import { systems } from '../components/systems.js'
import { quePilot } from '../components/pilot.js'

export const quePage = () => `
${nav('que')}
<main id="top">${queHero()}${questionsSection()}${proof()}${architecture()}${jobs()}${systems()}${quePilot()}</main>
${footer()}`
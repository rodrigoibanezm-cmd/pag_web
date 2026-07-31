import { renderRoute } from './router.js'

const pageTitle = pathname => {
  if (pathname.startsWith('/como')) return 'NexusG — Cómo'
  if (pathname.startsWith('/partners')) return 'NexusG — Partners'
  if (pathname.startsWith('/ejemplos')) return 'NexusG — Ejemplos'
  if (pathname.startsWith('/labs')) return 'NexusG — Comprensión operativa'
  return 'NexusG — Qué'
}

const normalizeNavigation = () => {
  const homeMenu = document.querySelector('.labs-menu')
  if (homeMenu) {
    const examples = homeMenu.querySelector('a[href="/ejemplos"]')
    const partners = homeMenu.querySelector('a[href="/partners"]')
    const faq = homeMenu.querySelector('a[href="#faq"]')

    if (faq && examples && partners) {
      homeMenu.append(faq)
      const separator = document.createElement('span')
      separator.className = 'labs-menu-separator'
      separator.setAttribute('aria-hidden', 'true')
      homeMenu.append(separator, examples, partners)
    }
  }

  const exampleHome = document.querySelector('.example-nav a[href="/"]')
  if (exampleHome) {
    exampleHome.textContent = 'Home'
    exampleHome.classList.add('example-home-link')
    exampleHome.setAttribute('aria-label', 'Volver al Home de NexusG')
  }
}

const enableExclusiveFaq = () => {
  const faq = document.querySelector('.labs-faq')
  if (!faq) return

  faq.querySelectorAll('details').forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return

      faq.querySelectorAll('details[open]').forEach(openItem => {
        if (openItem !== item) openItem.removeAttribute('open')
      })
    })
  })
}

const mount = () => {
  document.title = pageTitle(location.pathname)
  document.querySelector('#app').innerHTML = renderRoute(location.pathname)
  normalizeNavigation()
  enableExclusiveFaq()
  window.scrollTo(0, 0)
}

window.addEventListener('popstate', mount)
window.addEventListener('click', event => {
  const link = event.target.closest('a[data-route]')
  if (!link) return
  event.preventDefault()
  history.pushState({}, '', link.getAttribute('href'))
  mount()
})

mount()

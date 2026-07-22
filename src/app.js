import { renderRoute } from './router.js'

const pageTitle = pathname => {
  if (pathname.startsWith('/como')) return 'NexusG — Cómo'
  if (pathname.startsWith('/partners')) return 'NexusG — Partners'
  return 'NexusG — Qué'
}

const mount = () => {
  document.title = pageTitle(location.pathname)
  document.querySelector('#app').innerHTML = renderRoute(location.pathname)
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
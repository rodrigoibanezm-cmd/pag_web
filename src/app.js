import { renderRoute } from './router.js'

const mount = () => {
  document.title = location.pathname.startsWith('/como') ? 'NexusG — Cómo' : 'NexusG — Qué'
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

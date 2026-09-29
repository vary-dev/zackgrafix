import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import Button from './components/Button'
import Hero from './sections/Hero'

export default function App() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <main id="main">
        <Hero />
      </main>
      </main>
      <Footer />
    </div>
  )
}
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import Button from './components/Button'

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
        <Container className="h-[150vh] py-16">
          <h1 className="font-heading text-4xl font-bold">Sections go here</h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="dark">Dark</Button>
          </div>
          <div className="mt-8 inline-block rounded-2xl bg-ink p-6">
            <Button variant="light">Light</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
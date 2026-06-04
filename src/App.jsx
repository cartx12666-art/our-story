import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Soundtrack from './components/Soundtrack'
import Chapter from './components/Chapter'
import { chapters } from './data/story'
import './App.css'

function App() {
  return (
    <div className="site">
      <Hero />
      <main>
        <Timeline />
        <section id="chapters" className="chapters" aria-label="Story chapters">
          <h2 className="section-label chapters__heading">Chapters</h2>
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.id} chapter={chapter} index={index} />
          ))}
        </section>
        <Soundtrack />
      </main>
      <footer className="footer">
        <p>Feb 12, 2018 — and everything that came before and after.</p>
      </footer>
    </div>
  )
}

export default App

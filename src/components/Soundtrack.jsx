import { soundtrack } from '../data/story'

export default function Soundtrack() {
  return (
    <section className="soundtrack" aria-label="Our soundtrack">
      <h2 className="section-label">Soundtrack</h2>
      <p className="soundtrack__intro">
        Songs and bands that held us together before we ever met in person.
      </p>
      <ul className="soundtrack__list">
        {soundtrack.map((track) => (
          <li key={`${track.artist}-${track.title ?? 'main'}`} className="soundtrack__item">
            <div className="soundtrack__vinyl" aria-hidden="true" />
            <div>
              <p className="soundtrack__artist">
                {track.artist}
                {track.title && <span className="soundtrack__title"> — {track.title}</span>}
              </p>
              <p className="soundtrack__note">{track.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

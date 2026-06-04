import { milestones } from '../data/story'

export default function Timeline() {
  return (
    <section className="timeline" aria-label="Story milestones">
      <h2 className="section-label">Milestones</h2>
      <ol className="timeline__list">
        {milestones.map((item) => (
          <li key={item.date} className="timeline__item">
            <time className="timeline__date">{item.date}</time>
            <span className="timeline__label">{item.label}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

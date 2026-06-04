export default function Chapter({ chapter, index }) {
  const toneClass = `chapter--${chapter.tone}`

  return (
    <article
      id={chapter.id}
      className={`chapter ${toneClass} ${chapter.placeholder ? 'chapter--placeholder' : ''}`}
      style={{ '--chapter-index': index }}
    >
      <div className="chapter__meta">
        <span className="chapter__number">{String(index + 1).padStart(2, '0')}</span>
        <time className="chapter__era">{chapter.era}</time>
      </div>
      <h2 className="chapter__title">{chapter.title}</h2>
      {chapter.highlight && (
        <p className="chapter__highlight">{chapter.highlight}</p>
      )}
      <div className="chapter__body">
        {chapter.paragraphs.map((text) => (
          <p key={text.slice(0, 40)}>{text}</p>
        ))}
      </div>
    </article>
  )
}

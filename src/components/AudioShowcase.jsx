import { playlist } from '../content/playlist.js';

export function AudioShowcase() {
  return (
    <div className="audio-showcase" role="list">
      {playlist.map((record) => (
        <article key={record.id} className="audio-card" role="listitem">
          <div className="audio-card__header">
            <img src={record.img} alt="" className="audio-card__cover" />
            <div className="audio-card__meta">
              <h3 className="audio-card__title">{record.name}</h3>
              <p className="audio-card__writer">{record.writer}</p>
              <p className="audio-card__desc">{record.description}</p>
            </div>
          </div>
          <audio className="audio-card__player" controls preload="none">
            <source src={record.src} type={record.mime} />
            Votre navigateur ne prend pas en charge la lecture audio.
          </audio>
        </article>
      ))}
    </div>
  );
}

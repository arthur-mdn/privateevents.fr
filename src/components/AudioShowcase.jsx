import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { playlist } from '../content/playlist.js';

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const total = Math.floor(seconds);
  const mins = Math.floor(total / 60);
  const secs = String(total % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

function readFiniteDuration(audio) {
  const value = audio?.duration;
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function AudioPlayer({ record, isActive, onPlay }) {
  const audioRef = useRef(null);
  const progressId = useId();
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isActive && !audio.paused) {
      audio.pause();
      setPlaying(false);
    }
  }, [isActive]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      onPlay(record.id);
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }
    audio.pause();
    setPlaying(false);
  }, [onPlay, record.id]);

  const commitSeek = useCallback((next) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(next)) return;
    const max = readFiniteDuration(audio) || duration;
    const clamped = Math.min(Math.max(next, 0), max || next);
    audio.currentTime = clamped;
    setCurrent(clamped);
    setSeekValue(clamped);
  }, [duration]);

  const displayTime = seeking ? seekValue : current;
  const canSeek = duration > 0;

  return (
    <article className="audio-card">
      <div className="audio-card__header">
        <img
          src={record.img}
          alt={`Pochette : ${record.name}`}
          className="audio-card__cover"
          width={120}
          height={120}
          loading="lazy"
          decoding="async"
        />
        <div className="audio-card__meta">
          <h2 className="audio-card__title">{record.name}</h2>
          <p className="audio-card__writer">{record.writer}</p>
          <p className="audio-card__desc">{record.description}</p>
          {record.disclaimer ? (
            <p className="audio-card__disclaimer" role="note">
              {record.disclaimer}
            </p>
          ) : null}
        </div>
      </div>

      <div className="audio-player">
        <div className="audio-player__controls">
          <button
            type="button"
            className={`audio-player__toggle${playing ? ' is-playing' : ''}`}
            onClick={togglePlay}
            aria-label={playing ? `Pause : ${record.name}` : `Lecture : ${record.name}`}
          >
            {playing ? <FaPause aria-hidden /> : <FaPlay aria-hidden />}
            <span className="audio-player__toggle-label">{playing ? 'Pause' : 'Écouter'}</span>
          </button>
          <div className="audio-player__times" aria-hidden>
            <span>{formatTime(displayTime)}</span>
            <span aria-hidden>·</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <label className="visually-hidden" htmlFor={progressId}>
          Progression de {record.name}
        </label>
        <input
          id={progressId}
          className="audio-player__range"
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={canSeek ? displayTime : 0}
          disabled={!canSeek}
          onPointerDown={() => {
            setSeeking(true);
            setSeekValue(current);
          }}
          onPointerUp={(event) => {
            commitSeek(Number(event.currentTarget.value));
            setSeeking(false);
          }}
          onKeyUp={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Home' || event.key === 'End') {
              commitSeek(Number(event.currentTarget.value));
            }
          }}
          onChange={(event) => {
            const next = Number(event.target.value);
            setSeekValue(next);
            if (!seeking) commitSeek(next);
          }}
        />
      </div>

      <audio
        ref={audioRef}
        preload="metadata"
        src={record.src}
        onPlay={() => {
          onPlay(record.id);
          setPlaying(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setCurrent(0);
          setSeekValue(0);
          setSeeking(false);
        }}
        onLoadedMetadata={(event) => {
          setDuration(readFiniteDuration(event.currentTarget));
        }}
        onDurationChange={(event) => {
          setDuration(readFiniteDuration(event.currentTarget));
        }}
        onTimeUpdate={(event) => {
          if (seeking) return;
          setCurrent(event.currentTarget.currentTime || 0);
          if (!duration) {
            setDuration(readFiniteDuration(event.currentTarget));
          }
        }}
      >
        <track kind="captions" />
      </audio>
    </article>
  );
}

export function AudioShowcase() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="audio-showcase">
      {playlist.map((record) => (
        <AudioPlayer
          key={record.id}
          record={record}
          isActive={activeId === record.id}
          onPlay={setActiveId}
        />
      ))}
    </div>
  );
}

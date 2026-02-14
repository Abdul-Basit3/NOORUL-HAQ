import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import './Lectures.css';

interface Lecture {
  id: number;
  title: string;
  speaker: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views?: string;
  date?: string;
}

const Lectures = () => {
  const { lectures } = useContent();
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  return (
    <div className="lectures">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Islamic Lectures</h1>
          <p>Expand your knowledge with our collection of enlightening Islamic lectures</p>
        </div>
      </div>

      <div className="lectures-grid">
        {lectures.map((lecture) => (
          <div key={lecture.id} className="lecture-card card">
            <div className="lecture-thumbnail-wrapper">
              <img 
                src={`/images/${lecture.thumbnail}`}
                alt={lecture.title}
                className="lecture-thumbnail"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="lecture-thumbnail-fallback">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="lecture-duration-badge">{lecture.duration}</div>
            </div>
            <div className="lecture-info">
              <h3>{lecture.title}</h3>
              <div className="lecture-meta">
                <div className="lecture-speaker">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>{lecture.speaker}</span>
                </div>
                <div className="lecture-stats">
                  <span>{lecture.views} views</span>
                  <span>•</span>
                  <span>{lecture.date}</span>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => setSelectedLecture(lecture)}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedLecture && (
        <div className="video-modal" onClick={() => setSelectedLecture(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setSelectedLecture(null)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h2>{selectedLecture.title}</h2>
            <div className="video-player">
              <div className="video-player-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <p>Video Player</p>
                <p className="video-player-info">
                  <strong>{selectedLecture.speaker}</strong> • {selectedLecture.duration}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lectures;

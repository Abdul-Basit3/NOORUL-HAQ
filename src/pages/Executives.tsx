import { useContent } from '../context/ContentContext';
import './Executives.css';

const Executives = () => {
  const { executives } = useContent();

  return (
    <div className="executives">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Executive Leadership</h1>
          <p>Meet our dedicated team leading the mosque and school community</p>
        </div>
      </div>

      <div className="executives-grid">
        {executives.map((executive) => (
          <div key={executive.id} className="executive-card card">
            <div className="executive-photo-wrapper">
              <img 
                src={`/public/images/${executive.photo}`}
                alt={executive.name}
                className="executive-photo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="executive-photo-fallback">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="executive-info">
              <h3>{executive.name}</h3>
              <p className="executive-position">{executive.position}</p>
              <div className="executive-contact">
                <div className="executive-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{executive.phone}</span>
                </div>
                <div className="executive-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>{executive.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;

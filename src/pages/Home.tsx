import { useContent } from '../context/ContentContext';
import './Home.css';

const Home = () => {
  const { prayerTimes } = useContent();

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Assalamu Alaikum</h1>
          <p>Welcome to our Islamic Community Portal</p>
        </div>
      </div>

      <div className="home-announcements">
        <div className="announcement-card">
          <div className="announcement-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div className="announcement-content">
            <strong>Ramadan Preparation</strong>
            <p>Join us for special lectures starting next week</p>
          </div>
        </div>
        <div className="announcement-card">
          <div className="announcement-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="announcement-content">
            <strong>New Course</strong>
            <p>Arabic Language Fundamentals now open for enrollment</p>
          </div>
        </div>
      </div>

      <div className="home-widgets">
        <div className="home-widget prayer-widget">
          <div className="widget-header">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Prayer Times
            </h3>
          </div>
          <div className="prayer-times">
            {prayerTimes.map((prayer) => (
              <div key={prayer.name} className="prayer-time-item">
                <div className="prayer-time-name">
                  <span className="prayer-icon">{prayer.icon}</span>
                  <span>{prayer.name}</span>
                </div>
                <span className="prayer-time-value">{prayer.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="home-widget date-widget">
          <div className="widget-header">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Islamic Date
            </h3>
          </div>
          <div className="islamic-date">
            <div className="islamic-date-hijri">15 Sha'ban 1446</div>
            <div className="islamic-date-gregorian">February 14, 2026</div>
          </div>
        </div>

        <div className="home-widget verse-widget">
          <div className="widget-header">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Verse of the Day
            </h3>
          </div>
          <div className="verse-content">
            <div className="verse-text-arabic">
              إِنَّ ٱللَّهَ مَعَ ٱلَّذِينَ ٱتَّقَوا۟ وَّٱلَّذِينَ هُم مُّحْسِنُونَ
            </div>
            <div className="verse-text">
              "Indeed, Allah is with those who fear Him and those who are doers of good."
            </div>
            <div className="verse-reference">— Quran 16:128</div>
          </div>
        </div>

        <div className="home-widget dua-widget">
          <div className="widget-header">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Daily Dua
            </h3>
          </div>
          <div className="verse-content">
            <div className="verse-text-arabic">
              رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا
            </div>
            <div className="verse-text">
              "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance."
            </div>
            <div className="verse-reference">— Quran 18:10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

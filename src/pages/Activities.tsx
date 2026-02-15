import { useContent } from '../context/ContentContext';
import './Activities.css';

const Activities = () => {
  const { activities } = useContent();

  const getStatusConfig = (status: string) => {
    const configs = {
      upcoming: { text: 'Upcoming', class: 'status-upcoming' },
      ongoing: { text: 'Ongoing', class: 'status-ongoing' },
      completed: { text: 'Completed', class: 'status-completed' },
    };
    return configs[status as keyof typeof configs];
  };

  return (
    <div className="activities">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Activities & Events</h1>
          <p>Join our community programs and upcoming events</p>
        </div>
      </div>

      <div className="activities-container">
        {activities.map((activity) => {
          const statusConfig = getStatusConfig(activity.status);
          return (
            <div key={activity.id} className="activity-card card">
              <div className="activity-image-wrapper">
                <img 
                  src={`/images/${activity.image}`}
                  alt={activity.title}
                  className="activity-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="activity-image-fallback">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="activity-category-badge">{activity.category}</div>
                <span className={`activity-status-badge ${statusConfig.class}`}>
                  {statusConfig.text}
                </span>
              </div>

              <div className="activity-body">
                <div className="activity-title-section">
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                </div>

                <div className="activity-info-grid">
                  <div className="activity-info-item">
                    <div className="activity-info-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="activity-info-content">
                      <span className="activity-info-label">Date</span>
                      <span className="activity-info-value">{activity.date}</span>
                    </div>
                  </div>

                  <div className="activity-info-item">
                    <div className="activity-info-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="activity-info-content">
                      <span className="activity-info-label">Time</span>
                      <span className="activity-info-value">{activity.time}</span>
                    </div>
                  </div>

                  <div className="activity-info-item">
                    <div className="activity-info-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="activity-info-content">
                      <span className="activity-info-label">Venue</span>
                      <span className="activity-info-value">{activity.venue}</span>
                    </div>
                  </div>

                  {activity.spotsLeft > 0 && (
                    <div className="activity-info-item">
                      <div className="activity-info-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="activity-info-content">
                        <span className="activity-info-label">Available</span>
                        <span className="activity-info-value">{activity.spotsLeft} spots left</span>
                      </div>
                    </div>
                  )}
                </div>

                <button className="btn btn-primary activity-register-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  {activity.status === 'ongoing' ? 'Join Now' : 'Register Now'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;

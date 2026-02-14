import { useContent } from '../context/ContentContext';
import './Projects.css';

const Projects = () => {
  const { projects } = useContent();

  return (
    <div className="projects">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Projects & Donations</h1>
          <p>Support our community initiatives and charitable projects</p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const percentage = Math.round((project.raised / project.goal) * 100);
          return (
            <div key={project.id} className="project-card card">
              <div className="project-image-wrapper">
                <img 
                  src={`/public/images/${project.image}`}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="project-image-fallback">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="project-badge">
                  {percentage}% Funded
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-funding">
                  <div className="project-funding-info">
                    <div className="project-raised">
                      <span className="project-amount">${project.raised.toLocaleString()}</span>
                      <span className="project-label">raised</span>
                    </div>
                    <div className="project-goal">
                      <span className="project-amount">${project.goal.toLocaleString()}</span>
                      <span className="project-label">goal</span>
                    </div>
                  </div>
                  <div className="project-progress-bar">
                    <div
                      className="project-progress-fill"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <div className="project-stats">
                  <div className="project-stat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>{project.donors} donors</span>
                  </div>
                  <div className="project-stat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{project.daysLeft} days left</span>
                  </div>
                </div>

                <button className="btn btn-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Donate Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

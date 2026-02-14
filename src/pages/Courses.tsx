import { useContent } from '../context/ContentContext';
import './Courses.css';

const Courses = () => {
  const { courses } = useContent();

  const getLevelColor = (level: string) => {
    const colors = {
      'Beginner': 'level-beginner',
      'Intermediate': 'level-intermediate',
      'Advanced': 'level-advanced',
      'All Levels': 'level-all',
    };
    return colors[level as keyof typeof colors] || 'level-all';
  };

  return (
    <div className="courses">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Islamic Studies & Courses</h1>
          <p>Enroll in our comprehensive Islamic education programs</p>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card card">
            <div className="course-image-wrapper">
              <img 
                src={`/images/${course.image}`}
                alt={course.title}
                className="course-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="course-image-fallback">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span className={`course-level-badge ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <div className="course-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>{course.instructor}</span>
                </div>
                <div className="course-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="course-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span>{course.students} students</span>
                </div>
              </div>
              <div className="course-progress">
                <div className="course-progress-label">
                  <span>Course Progress</span>
                  <span className="course-progress-value">{course.progress}%</span>
                </div>
                <div className="course-progress-bar">
                  <div
                    className="course-progress-fill"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

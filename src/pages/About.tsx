import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>ℹ️ About Our Organization</h1>
        <p>
          Building a vibrant Islamic community through education, worship, and service
          since 1995. We are committed to preserving Islamic values while serving our
          diverse community.
        </p>
      </div>

      <div className="about-section">
        <h2>📜 Our History</h2>
        <p>
          Founded in 1995 by a group of dedicated community members, our organization
          began as a small prayer space serving 50 families. Over the years, we have
          grown into a comprehensive Islamic center serving over 2,000 families with
          educational programs, community services, and spiritual guidance.
        </p>
        <p>
          Our journey has been marked by continuous growth, community support, and
          unwavering commitment to Islamic principles and values.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To provide a welcoming space for worship, education,
          and community building while promoting Islamic values and fostering
          understanding between diverse communities.
        </p>
        <p>
          <strong>Vision:</strong> To be a leading Islamic institution that empowers
          individuals and families to live fulfilling lives guided by Islamic principles,
          while contributing positively to society.
        </p>
      </div>

      <div className="about-section">
        <h2>💎 Core Values</h2>
        <div className="about-values">
          <div className="about-value-card">
            <div className="about-value-icon">🤲</div>
            <h3>Faith</h3>
            <p>Strengthening our connection with Allah through worship and devotion</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">📚</div>
            <h3>Knowledge</h3>
            <p>Pursuing Islamic education and understanding for all ages</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">🤝</div>
            <h3>Community</h3>
            <p>Building strong bonds and supporting one another</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">❤️</div>
            <h3>Service</h3>
            <p>Serving humanity with compassion and dedication</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>🏆 Achievements</h2>
        <div className="about-achievements">
          <div className="about-achievement">
            <div className="about-achievement-number">2,000+</div>
            <div className="about-achievement-label">Families Served</div>
          </div>
          <div className="about-achievement">
            <div className="about-achievement-number">500+</div>
            <div className="about-achievement-label">Students Enrolled</div>
          </div>
          <div className="about-achievement">
            <div className="about-achievement-number">50+</div>
            <div className="about-achievement-label">Programs Offered</div>
          </div>
          <div className="about-achievement">
            <div className="about-achievement-number">29</div>
            <div className="about-achievement-label">Years of Service</div>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>📸 Photo Gallery</h2>
        <div className="about-gallery">
          <div className="about-gallery-item">🕌</div>
          <div className="about-gallery-item">📚</div>
          <div className="about-gallery-item">👥</div>
          <div className="about-gallery-item">🤲</div>
          <div className="about-gallery-item">🌙</div>
          <div className="about-gallery-item">📖</div>
        </div>
      </div>
    </div>
  );
};

export default About;

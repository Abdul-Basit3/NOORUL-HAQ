import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import './AdminModule.css';

const PrayerTimesAdmin = () => {
  const { prayerTimes, updatePrayerTimes } = useContent();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ name: '', time: '', icon: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditForm(prayerTimes[index]);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...prayerTimes];
      updated[editingIndex] = editForm;
      updatePrayerTimes(updated);
      setEditingIndex(null);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditForm({ name: '', time: '', icon: '' });
  };

  return (
    <div className="admin-module">
      <div className="admin-module-header">
        <h2>Prayer Times Management</h2>
        {showSuccess && (
          <div className="admin-success-message">
            ✓ Prayer times updated successfully!
          </div>
        )}
      </div>

      <div className="prayer-times-grid">
        {prayerTimes.map((prayer, index) => (
          <div key={index} className="prayer-time-card">
            {editingIndex === index ? (
              <div className="prayer-time-edit-form">
                <div className="form-group">
                  <label>Prayer Name</label>
                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    placeholder="e.g., Fajr"
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="text"
                    value={editForm.time}
                    onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                    placeholder="e.g., 5:30 AM"
                  />
                </div>
                <div className="form-group">
                  <label>Icon (Emoji)</label>
                  <input
                    type="text"
                    value={editForm.icon}
                    onChange={(e) => setEditForm({ ...editForm, icon: e.target.value })}
                    placeholder="e.g., 🌅"
                  />
                </div>
                <div className="prayer-time-actions">
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="prayer-time-display">
                <div className="prayer-time-icon">{prayer.icon}</div>
                <div className="prayer-time-info">
                  <h3>{prayer.name}</h3>
                  <p className="prayer-time-value">{prayer.time}</p>
                </div>
                <button 
                  className="btn-edit"
                  onClick={() => handleEdit(index)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="admin-info-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <p>Prayer times are displayed on the home page. Changes are saved automatically and will be visible to all users immediately.</p>
      </div>
    </div>
  );
};

export default PrayerTimesAdmin;

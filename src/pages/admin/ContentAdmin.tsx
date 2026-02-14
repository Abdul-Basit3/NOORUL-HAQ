import { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import './AdminModule.css';

type ContentType = 'lectures' | 'courses' | 'projects' | 'activities' | 'executives' | 'faqs';

interface ContentAdminProps {
  type: ContentType;
  title: string;
}

const ContentAdmin = ({ type, title }: ContentAdminProps) => {
  const content = useContent();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const getData = () => {
    switch (type) {
      case 'lectures': return content.lectures;
      case 'courses': return content.courses;
      case 'projects': return content.projects;
      case 'activities': return content.activities;
      case 'executives': return content.executives;
      case 'faqs': return content.faqs;
      default: return [];
    }
  };

  const updateData = (newData: any[]) => {
    switch (type) {
      case 'lectures': content.updateLectures(newData); break;
      case 'courses': content.updateCourses(newData); break;
      case 'projects': content.updateProjects(newData); break;
      case 'activities': content.updateActivities(newData); break;
      case 'executives': content.updateExecutives(newData); break;
      case 'faqs': content.updateFAQs(newData); break;
    }
  };

  const data = getData();

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setEditForm({ ...item });
    setShowAddForm(false);
  };

  const handleAdd = () => {
    const newId = Math.max(...data.map((item: any) => item.id), 0) + 1;
    setEditForm({ id: newId });
    setShowAddForm(true);
    setEditingId(null);
  };

  const handleSave = () => {
    const updated = [...data];
    if (showAddForm) {
      updated.push(editForm);
    } else if (editingId !== null) {
      const index = updated.findIndex((item: any) => item.id === editingId);
      if (index !== -1) updated[index] = editForm;
    }
    updateData(updated);
    setEditingId(null);
    setShowAddForm(false);
    setEditForm({});
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const updated = data.filter((item: any) => item.id !== id);
      updateData(updated);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowAddForm(false);
    setEditForm({});
  };

  const renderFields = () => {
    const fields: any = {
      lectures: ['title', 'speaker', 'duration', 'thumbnail', 'videoUrl', 'views', 'date'],
      courses: ['title', 'instructor', 'description', 'duration', 'level', 'progress', 'image', 'students'],
      projects: ['title', 'description', 'goal', 'raised', 'image', 'donors', 'daysLeft'],
      activities: ['title', 'date', 'time', 'venue', 'description', 'status', 'spotsLeft', 'image', 'category'],
      executives: ['name', 'position', 'phone', 'email', 'photo'],
      faqs: ['question', 'answer'],
    };

    return fields[type].map((field: string) => (
      <div key={field} className="form-group">
        <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
        {field === 'description' || field === 'answer' ? (
          <textarea
            value={editForm[field] || ''}
            onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
            rows={4}
          />
        ) : field === 'status' ? (
          <select
            value={editForm[field] || 'upcoming'}
            onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
          >
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        ) : field === 'level' ? (
          <select
            value={editForm[field] || 'All Levels'}
            onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="All Levels">All Levels</option>
          </select>
        ) : (
          <input
            type={['goal', 'raised', 'donors', 'daysLeft', 'progress', 'students', 'spotsLeft'].includes(field) ? 'number' : 'text'}
            value={editForm[field] || ''}
            onChange={(e) => setEditForm({ ...editForm, [field]: e.target.value })}
          />
        )}
      </div>
    ));
  };

  return (
    <div className="admin-module">
      <div className="admin-module-header">
        <h2>{title}</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {showSuccess && (
            <div className="admin-success-message">
              ✓ Changes saved successfully!
            </div>
          )}
          <button className="btn btn-primary" onClick={handleAdd}>
            + Add New
          </button>
        </div>
      </div>

      {(showAddForm || editingId !== null) && (
        <div className="admin-edit-panel">
          <h3>{showAddForm ? 'Add New Item' : 'Edit Item'}</h3>
          <div className="admin-edit-form">
            {renderFields()}
          </div>
          <div className="admin-edit-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title/Name</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title || item.name || item.question}</td>
                <td>
                  {type === 'lectures' && `${item.speaker} • ${item.duration}`}
                  {type === 'courses' && `${item.instructor} • ${item.level}`}
                  {type === 'projects' && `$${item.raised.toLocaleString()} / $${item.goal.toLocaleString()}`}
                  {type === 'activities' && `${item.date} • ${item.venue}`}
                  {type === 'executives' && `${item.position} • ${item.email}`}
                  {type === 'faqs' && item.answer?.substring(0, 50) + '...'}
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="admin-table-btn" onClick={() => handleEdit(item)}>
                      ✏️
                    </button>
                    <button className="admin-table-btn" onClick={() => handleDelete(item.id)}>
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentAdmin;

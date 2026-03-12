import { useState } from 'react';
import ReactDOM from 'react-dom';
import coursesData from '../data/courses.json';
import '../Style/Courses.css';

// ─── Module Accordion ─────────────────────────────────────────────────────────

function ModuleAccordion({ module }) {
  const [open, setOpen] = useState(false);
  const [openTopics, setOpenTopics] = useState({});

  const toggleTopic = (i) => {
    setOpenTopics(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className={`module-block ${open ? 'open' : ''}`}>
      <button className="module-header" onClick={() => setOpen(!open)}>
        <span className="module-number">0{module.id}</span>
        <span className="module-title">{module.title}</span>
        <span className="module-chevron">{open ? '↑' : '↓'}</span>
      </button>

      {open && (
        <div className="module-body">
          {module.topics.map((topic, i) => (
            <div key={i} className={`topic-block ${openTopics[i] ? 'open' : ''}`}>
              <button className="topic-header" onClick={() => toggleTopic(i)}>
                <span className="topic-title">{topic.title}</span>
                <span className="topic-chevron">{openTopics[i] ? '−' : '+'}</span>
              </button>
              {openTopics[i] && (
                <ul className="topic-points">
                  {topic.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Schedule Timeline ────────────────────────────────────────────────────────

function ScheduleTimeline({ schedule }) {
  const lunchIndex = schedule.findIndex(s => s.session.toLowerCase() === 'lunch');

  return (
    <div className="schedule-timeline">
      {schedule.map((item, i) => (
        <div
          key={i}
          className={`schedule-item ${item.session.toLowerCase() === 'lunch' ? 'lunch' : ''}`}
        >
          <div className="schedule-left">
            <span className="schedule-time">{item.time}</span>
            <span className="schedule-duration">{item.duration}</span>
          </div>
          <div className="schedule-line">
            <div className="schedule-dot" />
            {i < schedule.length - 1 && <div className="schedule-connector" />}
          </div>
          <div className="schedule-right">
            <span className="schedule-session">{item.session}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Course Detail Overlay ────────────────────────────────────────────────────

function CourseDetail({ course, onClose }) {
  const [tab, setTab] = useState('overview');
  const tabs = ['overview', 'curriculum', 'schedule', 'info'];

  if (!course) return null;

  return ReactDOM.createPortal(
    <div className="course-overlay" onClick={onClose}>
      <div className="course-detail" onClick={e => e.stopPropagation()}>

        <button className="course-detail-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="course-detail-header">
          <div className="course-detail-meta">
            <span className="course-code-badge">{course.code}</span>
            <span className="course-level-badge">{course.level}</span>
            <span className="course-duration-badge">⏱ {course.duration}</span>
          </div>
          <h2 className="course-detail-title">{course.title}</h2>
          <p className="course-detail-subtitle">{course.subtitle}</p>
        </div>

        {/* Tab Bar */}
        <div className="course-detail-tabs">
          {tabs.map(t => (
            <button
              key={t}
              className={`course-detail-tab ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="course-detail-body">

          {tab === 'overview' && (
            <div className="detail-tab-content">
              <p className="course-overview-text">{course.overview}</p>

              <div className="course-section">
                <h3>Prerequisites</h3>
                <p>{course.prerequisites}</p>
              </div>

              <div className="course-section">
                <h3>Objectives</h3>
                <ul>
                  {course.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                </ul>
              </div>

              {course.assessment && (
                <div className="course-section">
                  <h3>Assessment</h3>
                  <p>{course.assessment.notes}</p>
                  <p className="certification-note">🎓 {course.assessment.certification}</p>
                </div>
              )}
            </div>
          )}

          {tab === 'curriculum' && (
            <div className="detail-tab-content">
              <p className="curriculum-intro">
                {course.modules.length} modules · {course.modules.reduce((acc, m) => acc + m.topics.length, 0)} topics
              </p>
              <div className="modules-list">
                {course.modules.map(module => (
                  <ModuleAccordion key={module.id} module={module} />
                ))}
              </div>
            </div>
          )}

          {tab === 'schedule' && (
            <div className="detail-tab-content">
              <p className="schedule-intro">
                {course.schedule_time}
              </p>
              <ScheduleTimeline schedule={course.schedule} />
            </div>
          )}

          {tab === 'info' && (
            <div className="detail-tab-content">
              <div className="course-section">
                <h3>Required Resources</h3>
                <ul>
                  {course.resources.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>

              <div className="course-section">
                <h3>Policies / Code of Conduct</h3>
                <ul>
                  {course.policies.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({ course, onClick }) {
  return (
    <div className="course-card" onClick={() => onClick(course)}>
      <div className="course-card-top">
        <span className="course-code-badge">{course.code}</span>
        <span className="course-level-badge">{course.level}</span>
      </div>
      <h3 className="course-card-title">{course.title}</h3>
      <p className="course-card-subtitle">{course.subtitle}</p>
      <p className="course-card-overview">{course.overview}</p>
      <div className="course-card-footer">
        <span className="course-card-meta">⏱ {course.duration}</span>
        <span className="course-card-meta">📋 {course.modules.length} modules</span>
        <span className="course-card-cta">View Course →</span>
      </div>
    </div>
  );
}

// ─── Courses Page ─────────────────────────────────────────────────────────────

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="courses-container">

      <div className="courses-header">
        <h1 className="courses-title">Courses</h1>
        <p className="courses-intro">
          Professional development programmes for bartenders at every stage of their career.
        </p>
      </div>

      <div className="courses-grid">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} onClick={setSelectedCourse} />
        ))}
      </div>

      <CourseDetail
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

    </div>
  );
}

export default Courses;

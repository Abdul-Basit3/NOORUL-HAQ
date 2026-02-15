import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import './FAQ.css';

const FAQ = () => {
  const { faqs } = useContent();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq">
      <div className="page-header">
        <div className="page-header-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our programs and services</p>
        </div>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

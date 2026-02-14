import { useState } from 'react';
import { useContent } from '../context/ContentContext';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const { faqs } = useContent();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq">
      <div className="page-header">
        <h1>❓ Frequently Asked Questions</h1>
        <p>Find answers to common questions about our programs and services</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span className={`faq-icon ${openId === faq.id ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`faq-answer ${openId === faq.id ? 'open' : ''}`}>
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

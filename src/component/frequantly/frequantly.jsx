import React, { useState } from 'react';
import './frequantly.css';

function FrequentlyAskedQuestions() {
    const [expandedIndex, setExpandedIndex] = useState(null); // Track which FAQ is expanded

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle open/close
    };

    const faqs = [
        {
            question: 'What is this service about?',
            answer:
                'This service offers personalized stories and recommendations tailored to your interests.',
        },
        {
            question: 'Can I cancel my subscription?',
            answer: 'Yes, you can cancel or switch plans anytime without any hassle.',
        },
        {
            question: 'Is there content for kids?',
            answer:
                'Absolutely! We have a dedicated section for kids with safe and educational content.',
        },
        {
            question: 'Which devices are supported?',
            answer:
                'You can access the service on your phone, tablet, laptop, and TV.',
        },
    ];

    return (
        <div className="faq-container">
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <button
                        className={`faq-button ${
                            expandedIndex === index ? 'expanded' : ''
                        }`}
                        onClick={() => toggleFAQ(index)} // Toggle the FAQ
                    >
                        <span>{faq.question}</span>
                        <span className="faq-toggle">
                            {expandedIndex === index ? '−' : '+'}
                        </span>
                    </button>
                    {expandedIndex === index && (
                        <div className="faq-answer-container">
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className="get-started-container">
                <button className="get-started-button">Get Started</button>
                <p className="membership-text">Create or Restart your membership</p>
            </div>
        </div>
    );
}

export default FrequentlyAskedQuestions;

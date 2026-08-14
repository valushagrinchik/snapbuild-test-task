'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как работает платформа?",
      answer: "Подключите вашу дизайн-систему и начните создавать профессиональные материалы за минуты. Платформа использует AI для генерации контента в вашем фирменном стиле."
    },
    {
      question: "Безопасно ли использование?",
      answer: "Да, мы используем только одобренные AI модели и обрабатываем данные в защищенном контуре. Ваши бренд-активы всегда под защитой."
    },
    {
      question: "Можно ли интегрировать с существующими инструментами?",
      answer: "Да, платформа поддерживает интеграцию с Figma, Notion, Slack и другими популярными инструментами для бесшовной работы."
    },
    {
      question: "Сколько это стоит?",
      answer: "У нас есть различные тарифные планы для команд разного размера. Свяжитесь с нами для получения персонального предложения."
    },
    {
      question: "Как начать использовать?",
      answer: "Просто нажмите кнопку 'Начать сейчас' и зарегистрируйтесь. Вы сможете начать создавать материалы сразу после подключения дизайн-системы."
    }
  ];

  return (
    <section className="faq dds-faq dds-accordion" id="faq">
      <header className="dds-accordion-header">
        <h2 className="dds-accordion-title">Часто задаваемые вопросы</h2>
        <p className="dds-accordion-subtitle">Ответы на популярные вопросы о платформе</p>
      </header>
      <div className="dds-accordion-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="dds-accordion-item">
            <input
              type="checkbox"
              id={`faq-${index}`}
              checked={openIndex === index}
              onChange={() => setOpenIndex(openIndex === index ? null : index)}
              className="dds-accordion-toggle"
            />
            <label htmlFor={`faq-${index}`} className="dds-accordion-question">
              <span className="dds-accordion-question-text">{faq.question}</span>
              <span className="dds-accordion-icon"></span>
            </label>
            <div className="dds-accordion-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

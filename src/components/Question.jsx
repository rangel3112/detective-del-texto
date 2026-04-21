import { useState } from 'react';
import Timer from './Timer.jsx';

function Question({ question, questionIndex, totalQuestions, onAnswer, onTimeExpire, disabled }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const disabledState = disabled || submitted;

  const handleSubmit = () => {
    if (selectedOption === null || disabledState) return;
    const isCorrect = selectedOption === question.correctOption;
    onAnswer(isCorrect, question.explanation);
    setSubmitted(true);
  };

  const handleOptionChange = (key) => {
    if (disabledState) return;
    setSelectedOption(key);
  };

  return (
    <section style={{ marginTop: 30, background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <div>
          <div className="question-indicator">
            Pregunta {questionIndex + 1} de {totalQuestions}
          </div>
          <p style={{ margin: '8px 0 0', color: '#6b7280', fontSize: '0.9rem' }}>
            Nivel: <strong>{question.level}</strong>
          </p>
        </div>
        <Timer duration={20} onExpire={onTimeExpire} disabled={disabledState} />
      </div>

      <h2 style={{ marginTop: 0, marginBottom: 24 }}>{question.prompt}</h2>
      
      <div className="question-options">
        {Object.entries(question.options).map(([key, text]) => (
          <label key={key} className="option-label" style={{ pointerEvents: disabledState ? 'none' : 'auto', opacity: disabledState ? 0.7 : 1 }}>
            <input
              type="radio"
              name="question-option"
              value={key}
              checked={selectedOption === key}
              disabled={disabledState}
              onChange={() => handleOptionChange(key)}
              style={{ accentColor: '#667eea' }}
            />
            <span>{text}</span>
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={selectedOption === null || disabledState}
        className="btn btn-primary"
        style={{ marginTop: 24 }}
      >
        ✓ Enviar respuesta
      </button>
    </section>
  );
}

export default Question;

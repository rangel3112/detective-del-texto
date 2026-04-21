import Scene from '../components/Scene.jsx';
import Question from '../components/Question.jsx';
import Feedback from '../components/Feedback.jsx';

function Game({ book, level, score, currentQuestion, timerKey, showFeedback, lastResult, onAnswer, onTimeExpire, onNext, onBack }) {
  const question = level.questions[currentQuestion];
  const totalScore = level.questions.length * 10;
  const progressPercent = ((currentQuestion + 1) / level.questions.length) * 100;

  return (
    <section className="section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
        <button
          type="button"
          onClick={onBack}
          className="btn btn-secondary btn-small"
        >
          ← Volver a niveles
        </button>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{book.title}</h2>
          <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '0.9rem' }}>Nivel: {level.name}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div style={{ background: 'white', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <p style={{ margin: '0 0 8px', color: '#6b7280', fontSize: '0.9rem' }}>Puntaje actual</p>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {score} / {totalScore}
          </div>
        </div>
        <div style={{ background: 'white', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <p style={{ margin: '0 0 8px', color: '#6b7280', fontSize: '0.9rem' }}>Progreso</p>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea' }}>
            {currentQuestion + 1} / {level.questions.length}
          </div>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 12, height: 8, overflow: 'hidden', marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <Scene data={level.scene} />

      <Question
        key={timerKey}
        question={question}
        questionIndex={currentQuestion}
        totalQuestions={level.questions.length}
        onAnswer={onAnswer}
        onTimeExpire={onTimeExpire}
        disabled={showFeedback}
      />

      {showFeedback && lastResult && (
        <Feedback
          correct={lastResult.correct}
          explanation={lastResult.explanation}
          onNext={onNext}
        />
      )}
    </section>
  );
}

export default Game;

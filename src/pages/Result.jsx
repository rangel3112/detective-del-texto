import { useEffect } from 'react';

function Result({ book, level, score, onRepeat, onSelectAnotherBook, onFinish }) {
  const totalScore = level.questions.length * 10;
  const percentage = (score / totalScore) * 100;

  useEffect(() => {
    // Guardar progreso cuando se monta el componente
    if (onFinish) {
      onFinish();
    }
  }, [onFinish]);

  const getMotivationalMessage = () => {
    if (percentage === 100) {
      return '¡Excelente! Dominaste completamente este nivel. ¡Eres un verdadero detective del texto!';
    } else if (percentage >= 80) {
      return 'Muy bien. Casi lo tienes dominado. Intenta mejorar un poco más.';
    } else if (percentage >= 60) {
      return 'Buen intento. Sigue practicando para mejorar tus habilidades de comprensión lectora.';
    } else {
      return 'Sigue intentando. La práctica hace al maestro. ¡No te desanimes!';
    }
  };

  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <header className="header" style={{ marginBottom: 40 }}>
        <h1 style={{ marginBottom: 8 }}>🎉 Resultado final</h1>
        <p>
          Completaste {level.questions.length} preguntas del nivel <strong>{level.name}</strong> en <strong>{book.title}</strong>
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginBottom: 40 }}>
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: '0 0 12px', color: '#6b7280', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>Puntaje obtenido</p>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin: '12px 0' }}>
            {score} / {totalScore}
          </div>
          <p style={{ margin: '0', color: '#667eea', fontSize: '1.1rem', fontWeight: 700 }}>
            {percentage.toFixed(0)}%
          </p>
        </div>

        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <p style={{ margin: '0 0 12px', color: '#6b7280', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 600 }}>Preguntas</p>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0f766e', margin: '12px 0' }}>
            {(score / 10)} / {level.questions.length}
          </div>
          <p style={{ margin: '0', color: '#4b5563', fontSize: '0.9rem' }}>
            correctas
          </p>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 16, padding: 28, boxShadow: '0 10px 30px rgba(0,0,0,0.1)', maxWidth: 600, margin: '0 auto 40px', borderLeft: '4px solid #667eea' }}>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#1f2937', margin: 0 }}>
          {getMotivationalMessage()}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        <button
          type="button"
          onClick={onRepeat}
          className="btn btn-primary"
        >
          🔄 Repetir nivel
        </button>
        <button
          type="button"
          onClick={onSelectAnotherBook}
          className="btn btn-secondary"
        >
          📚 Seleccionar otro libro
        </button>
      </div>
    </section>
  );
}

export default Result;

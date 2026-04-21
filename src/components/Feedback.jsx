function Feedback({ correct, explanation, onNext }) {
  const feedbackClass = correct ? 'feedback success' : 'feedback error';

  return (
    <section className={feedbackClass} style={{ marginTop: 24 }}>
      <h2 style={{ marginTop: 0, marginBottom: 12 }}>
        {correct ? '✓ Respuesta correcta' : '✕ Respuesta incorrecta'}
      </h2>
      <p style={{ margin: '0 0 18px' }}>{explanation}</p>
      <button
        type="button"
        onClick={onNext}
        className="btn btn-primary"
      >
        ▶️ Siguiente pregunta
      </button>
    </section>
  );
}

export default Feedback;

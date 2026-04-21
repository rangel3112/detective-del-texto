function LevelSelect({ book, onSelectLevel, onBack, progress }) {
  const getStatusBadge = (levelId) => {
    const isCompleted = progress.isLevelCompleted(book.id, levelId);
    const levelScore = progress.getLevelScore(book.id, levelId);
    
    if (isCompleted) {
      return (
        <span className="badge badge-completed" title={`Puntaje: ${levelScore}`}>
          ✓ Completado
        </span>
      );
    }
    return <span className="badge badge-available">Disponible</span>;
  };

  const canAccessLevel = (index) => {
    if (index === 0) return true;
    const previousLevel = book.levels[index - 1];
    return progress.isLevelCompleted(book.id, previousLevel.id);
  };

  return (
    <section className="section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, flexWrap: 'wrap', gap: 16 }}>
        <button
          type="button"
          onClick={onBack}
          className="btn btn-secondary btn-small"
        >
          ← Volver al inicio
        </button>
        <div style={{ textAlign: 'right' }}>
          <h2 style={{ margin: 0 }}>{book.title}</h2>
          <p style={{ margin: '6px 0 0', color: '#6b7280', fontSize: '0.95rem' }}>Autor: {book.author}</p>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: 16, padding: 20, marginBottom: 30, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <p style={{ color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
          {book.description}
        </p>
      </div>

      <div className="grid-container">
        {book.levels.map((level, index) => {
          const accessible = canAccessLevel(index);
          const isCompleted = progress.isLevelCompleted(book.id, level.id);

          return (
            <article key={level.id} className="card" style={{ opacity: accessible ? 1 : 0.6 }}>
              <img src={level.image} alt={level.name} className="card-image" />
              <div className="card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <h3 style={{ margin: 0 }}>{level.name}</h3>
                  {getStatusBadge(level.id)}
                </div>
                <p className="card-description">{level.description}</p>
                <button
                  type="button"
                  onClick={() => onSelectLevel(level.id)}
                  disabled={!accessible}
                  className="btn btn-primary"
                >
                  {isCompleted ? '🔄 Repetir nivel' : '▶️ Jugar nivel'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default LevelSelect;

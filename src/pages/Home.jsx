function Home({ books, onBookSelect, progress }) {
  return (
    <section className="section">
      <header className="header">
        <h1>🔍 Detective del Texto</h1>
        <p>
          Selecciona tu libro favorito y comienza a resolver escenas, preguntas y niveles de comprensión lectora.
          ¡Sé un verdadero detective literario!
        </p>
      </header>

      <div className="grid-container">
        {books.map((book) => (
          <article key={book.id} className="card">
            <img src={book.coverImage} alt={book.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{book.title}</h2>
              <p className="card-author">Por {book.author}</p>
              <p className="card-description">{book.description}</p>
              <button
                type="button"
                onClick={() => onBookSelect(book.id)}
                className="btn btn-primary"
              >
                📖 Seleccionar libro
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;

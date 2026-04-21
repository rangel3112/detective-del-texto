import { useState } from 'react';

function Scene({ data }) {
  const [selectedObject, setSelectedObject] = useState(null);

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  };

  const handleObjectClick = (object) => {
    setSelectedObject(object);
    speakText(object.fragment);
  };

  const handleCloseOverlay = () => {
    setSelectedObject(null);
  };

  return (
    <section style={{ marginTop: 30, marginBottom: 30 }}>
      <div style={{ marginBottom: 16 }}>
        <p style={{ color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{data.description}</p>
      </div>

      <div className="scene-container" style={{ position: 'relative' }}>
        <img
          src={data.image}
          alt="Escena interactiva"
          className="scene-image"
        />

        {data.objects.map((object) => (
          <button
            key={object.id}
            type="button"
            onClick={() => handleObjectClick(object)}
            className="scene-object-button"
            style={{
              left: object.x,
              top: object.y,
            }}
            title={`Haz clic para explorar`}
          >
            🔍
          </button>
        ))}

        {selectedObject && (
          <div className="fragment-overlay" style={{ zIndex: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <strong>{selectedObject.label}</strong>
                <p style={{ margin: '8px 0 0', color: '#e5e7eb' }}>
                  {selectedObject.fragment}
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseOverlay}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0 0 0 16px',
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {!selectedObject && (
        <div style={{ marginTop: 20, padding: 16, background: '#f0f4ff', borderRadius: 12, border: '1px solid #c7d2fe' }}>
          <p style={{ margin: 0, color: '#3730a3', fontSize: '0.9rem', fontWeight: 600 }}>
            💡 Haz clic en los círculos 🔍 para explorar los objetos de la escena
          </p>
        </div>
      )}
    </section>
  );
}

export default Scene;

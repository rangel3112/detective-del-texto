import { useState } from 'react';
import Home from './pages/Home.jsx';
import LevelSelect from './pages/LevelSelect.jsx';
import Game from './pages/Game.jsx';
import Result from './pages/Result.jsx';
import { books } from './data/books.js';
import { useProgress } from './hooks/useProgress.js';

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES';
  window.speechSynthesis.speak(utterance);
}

function App() {
  const [page, setPage] = useState('home');
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [selectedLevelId, setSelectedLevelId] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [timerKey, setTimerKey] = useState(0);
  const progress = useProgress();

  const selectedBook = books.find((book) => book.id === selectedBookId);
  const selectedLevel = selectedBook?.levels.find((level) => level.id === selectedLevelId);

  const resetGameState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setLastResult(null);
    setTimerKey((prev) => prev + 1);
  };

  const handleBookSelect = (bookId) => {
    setSelectedBookId(bookId);
    setPage('levels');
  };

  const handleLevelSelect = (levelId) => {
    setSelectedLevelId(levelId);
    resetGameState();
    setPage('game');
  };

  const handleBackToHome = () => {
    setPage('home');
    setSelectedBookId(null);
    setSelectedLevelId(null);
    resetGameState();
  };

  const handleBackToLevels = () => {
    setPage('levels');
    resetGameState();
  };

  const handleAnswer = (isCorrect, explanation) => {
    if (isCorrect) {
      setScore((currentScore) => currentScore + 10);
    }
    setLastResult({ correct: isCorrect, explanation });
    setShowFeedback(true);
    speakText(isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta');
  };

  const handleTimeExpire = () => {
    if (!selectedLevel) return;
    const explanation = selectedLevel.questions[currentQuestion].explanation;
    setLastResult({ correct: false, explanation });
    setShowFeedback(true);
    speakText('Se acabó el tiempo');
  };

  const handleNextQuestion = () => {
    if (!selectedLevel) return;
    const nextIndex = currentQuestion + 1;
    if (nextIndex >= selectedLevel.questions.length) {
      setPage('result');
      return;
    }
    setCurrentQuestion(nextIndex);
    setShowFeedback(false);
    setLastResult(null);
    setTimerKey((prev) => prev + 1);
  };

  const handleRepeatLevel = () => {
    resetGameState();
    setPage('game');
  };

  const handleFinishLevel = () => {
    // Guardar el progreso
    if (selectedBook && selectedLevel) {
      progress.saveProgress(selectedBook.id, selectedLevel.id, score);
    }
  };

  return (
    <div className="app-container">
      {page === 'home' && <Home books={books} onBookSelect={handleBookSelect} progress={progress} />}

      {page === 'levels' && selectedBook && (
        <LevelSelect 
          book={selectedBook} 
          onSelectLevel={handleLevelSelect} 
          onBack={handleBackToHome} 
          progress={progress}
        />
      )}

      {page === 'game' && selectedBook && selectedLevel && (
        <Game
          book={selectedBook}
          level={selectedLevel}
          score={score}
          currentQuestion={currentQuestion}
          timerKey={timerKey}
          showFeedback={showFeedback}
          lastResult={lastResult}
          onAnswer={handleAnswer}
          onTimeExpire={handleTimeExpire}
          onNext={handleNextQuestion}
          onBack={handleBackToLevels}
        />
      )}

      {page === 'result' && selectedBook && selectedLevel && (
        <Result
          book={selectedBook}
          level={selectedLevel}
          score={score}
          onRepeat={handleRepeatLevel}
          onSelectAnotherBook={handleBackToHome}
          onFinish={handleFinishLevel}
        />
      )}
    </div>
  );
}

export default App;

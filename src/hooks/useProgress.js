// Hook personalizado para gestionar el progreso del usuario con localStorage
export const useProgress = () => {
  const STORAGE_KEY = 'detective_del_texto_progress';

  const getProgress = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error reading progress:', error);
      return {};
    }
  };

  const saveProgress = (bookId, levelId, score) => {
    try {
      const progress = getProgress();
      if (!progress[bookId]) {
        progress[bookId] = {};
      }
      progress[bookId][levelId] = {
        completed: true,
        score,
        completedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return progress;
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const isLevelCompleted = (bookId, levelId) => {
    const progress = getProgress();
    return progress[bookId]?.[levelId]?.completed || false;
  };

  const getLevelScore = (bookId, levelId) => {
    const progress = getProgress();
    return progress[bookId]?.[levelId]?.score || null;
  };

  const canAccessLevel = (bookId, levels, currentLevelId) => {
    const currentIndex = levels.findIndex((l) => l.id === currentLevelId);
    if (currentIndex === 0) return true; // El primer nivel siempre accesible
    const previousLevel = levels[currentIndex - 1];
    return isLevelCompleted(bookId, previousLevel.id);
  };

  const getAllProgress = () => getProgress();

  const clearProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  };

  return {
    getProgress,
    saveProgress,
    isLevelCompleted,
    getLevelScore,
    canAccessLevel,
    getAllProgress,
    clearProgress,
  };
};

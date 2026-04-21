export const sceneData = {
  image: 'https://via.placeholder.com/800x420.png?text=Escena+Detective+del+Texto',
  description: 'Observa la escena y toca los objetos con la lupa para descubrir pistas de lectura.',
  objects: [
    {
      id: 'libro',
      label: '🔍 Libro antiguo',
      fragment: 'El libro describe la ciudad con detalles sensoriales que ayudan al lector a imaginar los sonidos y colores.',
    },
    {
      id: 'nota',
      label: '🔍 Nota secreta',
      fragment: 'La nota contiene una pregunta implícita que invita al detective a inferir la intención del narrador.',
    },
    {
      id: 'mapa',
      label: '🔍 Mapa misterioso',
      fragment: 'El mapa muestra rutas y símbolos, lo que permite establecer relaciones entre los personajes y el lugar.',
    },
  ],
};

export const questionData = [
  {
    level: 'Literal',
    prompt: '¿Cuál es el primer objeto que el detective observa en la escena?',
    options: {
      a: 'El libro antiguo',
      b: 'La nota secreta',
      c: 'El mapa misterioso',
    },
    correctOption: 'a',
    explanation: 'El primer objeto descrito es el libro antiguo, que aporta detalles sensoriales a la escena.',
  },
  {
    level: 'Inferencial',
    prompt: '¿Qué puede inferirse sobre la nota secreta?',
    options: {
      a: 'Es una lista de compras',
      b: 'Contiene una pregunta implícita',
      c: 'Es un mensaje para otro detective',
    },
    correctOption: 'b',
    explanation: 'La nota invita a inferir la intención del narrador, por lo tanto contiene una pregunta implícita.',
  },
  {
    level: 'Crítico',
    prompt: '¿Por qué es importante relacionar el mapa con los personajes?',
    options: {
      a: 'Para mejorar la velocidad de lectura',
      b: 'Para comprender mejor el contexto de la historia',
      c: 'Para decorar la escena con color',
    },
    correctOption: 'b',
    explanation: 'Relacionar el mapa con los personajes ayuda a comprender mejor el contexto y los objetivos del relato.',
  },
];

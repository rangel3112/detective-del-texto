export const books = [
  {
    id: 'cien',
    title: 'Cien Años De Soledad',
    author: 'Gabriel García Márquez',
    description: 'Un clásico mágico donde cada escena invita a descubrir detalles literales, inferenciales y críticos.',
    coverImage: '/images/cien-cover.png',
    levels: [
      {
        id: 'literal',
        name: 'Literal',
        description: 'Encuentra información explícita y datos concretos en la escena.',
        image: '/images/cien-literal.png',
        scene: {
          image: '/images/cien-literal.png',
          description: 'Explora Macondo y descubre objetos con pistas claras en el texto.',
          objects: [
            { id: 'obj1', label: '🔍 ', x: '25%', y: '72%', fragment: 'El libro narra la vida de varias generaciones de la familia Buendía.' },
            { id: 'obj2', label: '🔍 ', x: '68%', y: '22%', fragment: 'El reloj se detuvo y el tiempo parece mezclarse en el pueblo de Macondo.' },
            { id: 'obj3', label: '🔍 ', x: '62%', y: '65%', fragment: 'La casa grande es el centro de muchas historias y eventos familiares.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué familia aparece en el libro? ',
            options: { a: 'La familia Buendía', b: 'La familia García', c: 'La familia Márquez' },
            correctOption: 'a',
            explanation: 'El texto menciona a la familia Buendía como protagonista de la novela.',
          },
          {
            prompt: '¿Qué elemento del tiempo se describe en la escena?',
            options: { a: 'Un reloj detenido', b: 'Un calendario nuevo', c: 'Un altar antiguo' },
            correctOption: 'a',
            explanation: 'El reloj detenido es parte de la descripción literal de Macondo.',
          },
          {
            prompt: '¿Cuál es el lugar importante en la escena?',
            options: { a: 'La casa grande', b: 'La plaza', c: 'La iglesia' },
            correctOption: 'a',
            explanation: 'La casa grande es el centro narrativo de la escena y los objetos.',
          },
          {
            prompt: '¿Qué palabra describe el pueblo en el fragmento?',
            options: { a: 'Mágico', b: 'Silencioso', c: 'Ruidoso' },
            correctOption: 'a',
            explanation: 'Macondo se describe con elementos mágicos y sensoriales.',
          },
          {
            prompt: '¿Quién es el autor del libro seleccionado?',
            options: { a: 'Gabriel García Márquez', b: 'Julio Cortázar', c: 'Pablo Neruda' },
            correctOption: 'a',
            explanation: 'Gabriel García Márquez es el autor de Cien años de soledad.',
          },
        ],
      },
      {
        id: 'inferencial',
        name: 'Inferencial',
        description: 'Lee entre líneas para descubrir intenciones y emociones ocultas.',
        image: '/images/cien-inferencial.png',
        scene: {
          image: '/images/cien-inferencial.png',
          description: 'Observa detalles que sugieren más allá de lo que se dice directamente.',
          objects: [
            { id: 'obj1', label: '🔍 Carta', x: '26%', y: '48%', fragment: 'La carta insinúa un mensaje secreto entre los personajes.' },
            { id: 'obj2', label: '🔍 Ventana', x: '70%', y: '30%', fragment: 'La ventana sugiere un vínculo entre el interior de la casa y el clima afuera.' },
            { id: 'obj3', label: '🔍 Silla', x: '50%', y: '70%', fragment: 'La silla vacía puede hablar de ausencia o de una espera prolongada.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué se puede inferir sobre la carta en la escena?',
            options: { a: 'Contiene un mensaje secreto', b: 'Es una lista de compras', c: 'No tiene importancia' },
            correctOption: 'a',
            explanation: 'La carta sugiere un mensaje oculto entre los personajes.',
          },
          {
            prompt: '¿Qué significa la silla vacía?',
            options: { a: 'Falta alguien importante', b: 'Nunca se usa', c: 'Es un objeto decorativo' },
            correctOption: 'a',
            explanation: 'La silla vacía sugiere ausencia o espera de alguien importante.',
          },
          {
            prompt: 'La ventana representa una conexión entre..',
            options: { a: 'interior y exterior', b: 'dos personajes', c: 'dos épocas' },
            correctOption: 'a',
            explanation: 'La ventana relaciona el interior de la casa con el clima y el paisaje afuera.',
          },
          {
            prompt: '¿Cómo se interpreta la ausencia de movimiento?',
            options: { a: 'Hay tranquilidad y misterio', b: 'No hay nada interesante', c: 'Es una escena peligrosa' },
            correctOption: 'a',
            explanation: 'La escena sugiere tranquilidad con un matiz de misterio e historia.',
          },
          {
            prompt: '¿Qué aspecto oculto puede tener la escena?',
            options: { a: 'Una emoción no dicha', b: 'Una fiesta alegre', c: 'Un paisaje soleado' },
            correctOption: 'a',
            explanation: 'La escena sugiere emociones y relaciones que no se expresan directamente.',
          },
        ],
      },
      {
        id: 'critico',
        name: 'Crítico',
        description: 'Evalúa la intención del texto y su impacto en el lector.',
        image: '/images/cien-critico.png',
        scene: {
          image: '/images/cien-critico.png',
          description: 'Analiza cómo las decisiones del autor construyen el significado del cuento.',
          objects: [
            { id: 'obj1', label: '🔍 Personaje', x: '18%', y: '58%', fragment: 'El personaje principal representa la memoria y el paso del tiempo.' },
            { id: 'obj2', label: '🔍 Llamado', x: '60%', y: '42%', fragment: 'El llamado sugiere un cambio o una oportunidad importante en la historia.' },
            { id: 'obj3', label: '🔍 Luz', x: '79%', y: '67%', fragment: 'La luz enfatiza una esperanza oculta y el tono del relato.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué simboliza el personaje principal en el texto?',
            options: { a: 'La memoria y el tiempo', b: 'El dinero y el poder', c: 'La naturaleza' },
            correctOption: 'a',
            explanation: 'El personaje encarna la memoria familiar y el peso del tiempo en Macondo.',
          },
          {
            prompt: '¿Cuál es el efecto del llamado en la historia?',
            options: { a: 'Indica un cambio importante', b: 'Hace la escena aburrida', c: 'Es solo un detalle menor' },
            correctOption: 'a',
            explanation: 'El llamado sugiere un cambio relevante en la trama o en las decisiones del personaje.',
          },
          {
            prompt: 'La luz en la escena aporta una sensación de..',
            options: { a: 'esperanza', b: 'miedo', c: 'confusión' },
            correctOption: 'a',
            explanation: 'La luz aporta esperanza y un tono positivo al relato.',
          },
          {
            prompt: '¿Por qué importa analizar la intención del autor?',
            options: { a: 'Para comprender el mensaje profundo', b: 'Para memorizar palabras', c: 'Para repetir el contenido' },
            correctOption: 'a',
            explanation: 'Analizar la intención ayuda a entender el mensaje profundo del texto.',
          },
          {
            prompt: 'El estilo mágico del texto busca..',
            options: { a: 'impactar al lector con imágenes poderosas', b: 'confundir al lector', c: 'contar solo hechos' },
            correctOption: 'a',
            explanation: 'El realismo mágico busca impactar al lector con imágenes y emociones únicas.',
          },
        ],
      },
    ],
  },
  {
    id: 'casa',
    title: 'La Casa Grande',
    author: 'Álvaro Cepeda Samudio',
    description: 'Una narración que explora el pasado familiar con imágenes poderosas y simbolismo.',
    coverImage: '/images/casa-cover.png',
    levels: [
      {
        id: 'literal',
        name: 'Literal',
        description: 'Reconoce elementos concretos y detalles directos de la escena.',
        image: '/images/casa-literal.png',
        scene: {
          image: '/images/casa-literal.png',
          description: 'Encuentra los objetos directos y su función en el relato familiar.',
          objects: [
            { id: 'obj1', label: '🔍 Foto', x: '20%', y: '44%', fragment: 'La foto recuerda a la familia y las historias del pasado.' },
            { id: 'obj2', label: '🔍 Sillón', x: '65%', y: '22%', fragment: 'El sillón es un lugar de recuerdos y presencia en la casa grande.' },
            { id: 'obj3', label: '🔍 Pasillo', x: '48%', y: '70%', fragment: 'El pasillo conecta las habitaciones y el tiempo de la casa.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué objeto refiere a la memoria familiar?',
            options: { a: 'La foto', b: 'La lámpara', c: 'La nevera' },
            correctOption: 'a',
            explanation: 'La foto representa la memoria y los recuerdos de la familia.',
          },
          {
            prompt: '¿Qué función tiene el sillón en la escena?',
            options: { a: 'Es un lugar de recuerdos', b: 'Es un objeto nuevo', c: 'No tiene valor' },
            correctOption: 'a',
            explanation: 'El sillón simboliza la presencia de los recuerdos en la casa.',
          },
          {
            prompt: '¿Qué conecta el pasillo en la casa?',
            options: { a: 'Las habitaciones y el tiempo', b: 'La cocina con el jardín', c: 'La calle con el río' },
            correctOption: 'a',
            explanation: 'El pasillo une espacios y representa el paso del tiempo.',
          },
          {
            prompt: '¿Cómo se siente la casa en el texto?',
            options: { a: 'Llena de historia', b: 'Aburrida', c: 'Vacía' },
            correctOption: 'a',
            explanation: 'La casa grande está llena de historia y memoria familiar.',
          },
          {
            prompt: '¿Quién escribió La casa grande?',
            options: { a: 'Álvaro Cepeda Samudio', b: 'Gabriel García Márquez', c: 'Mario Vargas Llosa' },
            correctOption: 'a',
            explanation: 'Álvaro Cepeda Samudio es el autor de La casa grande.',
          },
        ],
      },
      {
        id: 'inferencial',
        name: 'Inferencial',
        description: 'Descubre significados ocultos y motivaciones detrás de los detalles.',
        image: '/images/casa-inferencial.png',
        scene: {
          image: '/images/casa-inferencial.png',
          description: 'Observa los símbolos que sugieren recuerdos y emociones profundas.',
          objects: [
            { id: 'obj1', label: '🔍 Carta', x: '24%', y: '30%', fragment: 'La carta trae noticias que despiertan el pasado y la nostalgia.' },
            { id: 'obj2', label: '🔍 Ventana', x: '72%', y: '48%', fragment: 'La ventana permite ver el mundo exterior y las expectativas del personaje.' },
            { id: 'obj3', label: '🔍 Flor', x: '42%', y: '72%', fragment: 'La flor simboliza la fragilidad y la belleza de los recuerdos.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué sugiere la carta en la escena?',
            options: { a: 'Noticias del pasado', b: 'Una receta', c: 'Un dibujo' },
            correctOption: 'a',
            explanation: 'La carta evoca noticias y recuerdos ligados al pasado familiar.',
          },
          {
            prompt: '¿Qué simboliza la ventana?',
            options: { a: 'Expectativas hacia afuera', b: 'Oscuridad', c: 'Ruido' },
            correctOption: 'a',
            explanation: 'La ventana representa una conexión con el mundo exterior y la esperanza.',
          },
          {
            prompt: '¿Qué representa la flor?',
            options: { a: 'Fragilidad y belleza', b: 'Fuerza y poder', c: 'Velocidad' },
            correctOption: 'a',
            explanation: 'La flor simboliza belleza y fragilidad en la memoria.',
          },
          {
            prompt: '¿Qué se infiere del ambiente familiar?',
            options: { a: 'Hay nostalgia y sensibilidad', b: 'Hay peligro inmediato', c: 'Es divertido' },
            correctOption: 'a',
            explanation: 'El ambiente sugiere nostalgia y sensibilidad en la casa grande.',
          },
          {
            prompt: '¿Qué tipo de emoción predomina en la escena?',
            options: { a: 'Nostalgia', b: 'Alegría extrema', c: 'Confusión total' },
            correctOption: 'a',
            explanation: 'La nostalgia es la emoción principal que se infiere del texto.',
          },
        ],
      },
      {
        id: 'critico',
        name: 'Crítico',
        description: 'Evalúa el propósito del texto y las decisiones narrativas del autor.',
        image: '/images/casa-critico.png',
        scene: {
          image: '/images/casa-critico.png',
          description: 'Analiza el significado simbólico y el impacto emocional del relato.',
          objects: [
            { id: 'obj1', label: '🔍 Recuerdo', x: '18%', y: '60%', fragment: 'El recuerdo es el núcleo de la narrativa y moviliza la interpretación crítica.' },
            { id: 'obj2', label: '🔍 Luz', x: '66%', y: '22%', fragment: 'La luz revela aspectos importantes del tono y la atmósfera del texto.' },
            { id: 'obj3', label: '🔍 Sombra', x: '44%', y: '74%', fragment: 'La sombra sugiere el peso y la profundidad de las historias familiares.' },
          ],
        },
        questions: [
          {
            prompt: '¿Qué reúne el recuerdo en la obra?',
            options: { a: 'La interpretación crítica del pasado', b: 'Una serie de fábulas', c: 'Un solo personaje' },
            correctOption: 'a',
            explanation: 'El recuerdo permite interpretar críticamente el pasado familiar.',
          },
          {
            prompt: '¿Qué aporta la luz en el texto?',
            options: { a: 'Tono y atmósfera', b: 'Ruido', c: 'Confusión' },
            correctOption: 'a',
            explanation: 'La luz ayuda a definir el tono y la atmósfera narrativa.',
          },
          {
            prompt: '¿Qué sugiere la sombra?',
            options: { a: 'Profundidad emocional', b: 'Alegría simple', c: 'Blanco puro' },
            correctOption: 'a',
            explanation: 'La sombra aporta una sensación de profundidad emocional.',
          },
          {
            prompt: '¿Qué se evalúa en un nivel crítico?',
            options: { a: 'El propósito del texto', b: 'La ortografía', c: 'El precio del libro' },
            correctOption: 'a',
            explanation: 'El nivel crítico evalúa el propósito y las intenciones del texto.',
          },
          {
            prompt: '¿Por qué es importante analizar la narración?',
            options: { a: 'Para comprender el mensaje profundo', b: 'Para recitarlo de memoria', c: 'Para decorar la casa' },
            correctOption: 'a',
            explanation: 'Analizar la narración revela el mensaje profundo del autor.',
          },
        ],
      },
    ],
  },
];

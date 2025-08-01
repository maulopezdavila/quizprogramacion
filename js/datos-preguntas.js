// Datos de todas las preguntas del quiz astronómico organizadas por nivel de dificultad

// Objeto principal que contiene todas las preguntas del quiz
const datosPreguntas = {
    // Preguntas de nivel fácil (conocimientos básicos)
    facil: [
        {
            // Primera pregunta sobre el Sol
            pregunta: "¿Cuál es la estrella más cercana a la Tierra?",
            opciones: ["Próxima Centauri", "El Sol", "Sirio", "Vega"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (El Sol)
            explicacion: "El Sol es nuestra estrella más cercana, ubicada a aproximadamente 150 millones de kilómetros de la Tierra.", // Explicación de la respuesta
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg" // URL de imagen relacionada
        },
        {
            // Segunda pregunta sobre planetas
            pregunta: "¿Cuántos planetas hay en nuestro Sistema Solar?",
            opciones: ["7", "8", "9", "10"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (8)
            explicacion: "Desde 2006, nuestro Sistema Solar tiene oficialmente 8 planetas, después de que Plutón fuera reclasificado como planeta enano.", // Explicación
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg" // URL de imagen
        },
        {
            // Tercera pregunta sobre el planeta más grande
            pregunta: "¿Cuál es el planeta más grande del Sistema Solar?",
            opciones: ["Saturno", "Júpiter", "Neptuno", "Urano"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Júpiter)
            explicacion: "Júpiter es el planeta más grande, con una masa mayor que todos los demás planetas combinados.", // Explicación
            imagen: "https://images.pexels.com/photos/39649/jupiter-red-spot-planet-39649.jpeg" // URL de imagen
        },
        {
            // Cuarta pregunta sobre el planeta más cercano al Sol
            pregunta: "¿Cuál es el planeta más cercano al Sol?",
            opciones: ["Venus", "Mercurio", "Marte", "Tierra"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Mercurio)
            explicacion: "Mercurio es el planeta más cercano al Sol y también el más pequeño del Sistema Solar.", // Explicación
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg" // URL de imagen
        },
        {
            // Quinta pregunta sobre la Luna
            pregunta: "¿Cómo se llama el satélite natural de la Tierra?",
            opciones: ["Luna", "Fobos", "Europa", "Titán"], // Opciones de respuesta
            respuestaCorrecta: 0, // Índice de la respuesta correcta (Luna)
            explicacion: "La Luna es el único satélite natural de la Tierra y el quinto más grande del Sistema Solar.", // Explicación
            imagen: "https://images.pexels.com/photos/87611/moon-lunar-sky-moonlight-87611.jpeg" // URL de imagen
        },
        {
            // Sexta pregunta sobre Marte
            pregunta: "¿Por qué Marte es conocido como el 'Planeta Rojo'?",
            opciones: ["Por su temperatura", "Por el óxido de hierro en su superficie", "Por su atmósfera", "Por sus volcanes"], // Opciones
            respuestaCorrecta: 1, // Índice de la respuesta correcta
            explicacion: "Marte debe su color rojizo al óxido de hierro (herrumbre) presente en su superficie.", // Explicación
            imagen: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-73910.jpeg" // URL de imagen
        },
        {
            // Séptima pregunta sobre los anillos de Saturno
            pregunta: "¿Qué planeta es famoso por sus anillos?",
            opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Saturno)
            explicacion: "Saturno es famoso por sus espectaculares anillos, aunque otros planetas gigantes también los tienen.", // Explicación
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg" // URL de imagen
        },
        {
            // Octava pregunta sobre el planeta más caliente
            pregunta: "¿Cuál es el planeta más caliente del Sistema Solar?",
            opciones: ["Mercurio", "Venus", "Marte", "Júpiter"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Venus)
            explicacion: "Venus es el planeta más caliente debido a su densa atmósfera de dióxido de carbono que atrapa el calor.", // Explicación
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg" // URL de imagen
        },
        {
            // Novena pregunta sobre galaxias
            pregunta: "¿Cómo se llama nuestra galaxia?",
            opciones: ["Andrómeda", "Vía Láctea", "Galaxia Espiral", "Centaurus A"], // Opciones de respuesta
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Vía Láctea)
            explicacion: "Vivimos en la Vía Láctea, una galaxia espiral con aproximadamente 200-400 mil millones de estrellas.", // Explicación
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg" // URL de imagen
        },
        {
            // Décima pregunta sobre el tiempo que tarda la Tierra en orbitar el Sol
            pregunta: "¿Cuánto tiempo tarda la Tierra en dar una vuelta completa alrededor del Sol?",
            opciones: ["365 días", "364 días", "366 días", "360 días"], // Opciones de respuesta
            respuestaCorrecta: 0, // Índice de la respuesta correcta (365 días)
            explicacion: "La Tierra tarda aproximadamente 365.25 días en completar una órbita alrededor del Sol, por eso tenemos años bisiestos.", // Explicación
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg" // URL de imagen
        },
        {
            // Undécima pregunta sobre astronautas
            pregunta: "¿Cómo se llaman las personas que viajan al espacio?",
            opciones: ["Cosmonautas", "Astronautas", "Ambas son correctas", "Pilotos espaciales"], // Opciones
            respuestaCorrecta: 2, // Índice de la respuesta correcta (Ambas son correctas)
            explicacion: "Tanto 'astronautas' como 'cosmonautas' son términos correctos para personas que viajan al espacio.", // Explicación
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg" // URL de imagen
        },
        {
            // Duodécima pregunta sobre cometas
            pregunta: "¿Qué es lo que vemos cuando un cometa se acerca al Sol?",
            opciones: ["Su núcleo", "Su cola brillante", "Sus anillos", "Sus satélites"], // Opciones
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Su cola brillante)
            explicacion: "Cuando un cometa se acerca al Sol, el calor sublima el hielo creando una cola brillante visible desde la Tierra.", // Explicación
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg" // URL de imagen
        },
        {
            // Decimotercera pregunta sobre la fuerza que mantiene los planetas en órbita
            pregunta: "¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?",
            opciones: ["Magnetismo", "Gravedad", "Electricidad", "Inercia"], // Opciones
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Gravedad)
            explicación: "La gravedad del Sol es la fuerza que mantiene a todos los planetas en sus órbitas.", // Explicación
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg" // URL de imagen
        },
        {
            // Decimocuarta pregunta sobre el color del Sol
            pregunta: "¿De qué color es realmente el Sol?",
            opciones: ["Amarillo", "Naranja", "Blanco", "Rojo"], // Opciones
            respuestaCorrecta: 2, // Índice de la respuesta correcta (Blanco)
            explicacion: "El Sol es en realidad blanco, pero lo vemos amarillo debido a la dispersión de la luz en la atmósfera terrestre.", // Explicación
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg" // URL de imagen
        },
        {
            // Decimoquinta pregunta sobre asteroides
            pregunta: "¿Dónde se encuentra el cinturón de asteroides?",
            opciones: ["Entre la Tierra y Marte", "Entre Marte y Júpiter", "Entre Júpiter y Saturno", "Más allá de Plutón"], // Opciones
            respuestaCorrecta: 1, // Índice de la respuesta correcta (Entre Marte y Júpiter)
            explicacion: "El cinturón de asteroides se encuentra entre las órbitas de Marte y Júpiter.", // Explicación
            imagen: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-73910.jpeg" // URL de imagen
        },
        // Continuando con más preguntas de nivel fácil hasta completar 30
        {
            pregunta: "¿Cuál es el satélite más grande de Júpiter?",
            opciones: ["Europa", "Ío", "Ganímedes", "Calisto"],
            respuestaCorrecta: 2,
            explicacion: "Ganímedes es el satélite más grande de Júpiter y también la luna más grande del Sistema Solar.",
            imagen: "https://images.pexels.com/photos/39649/jupiter-red-spot-planet-39649.jpeg"
        },
        {
            pregunta: "¿Qué causa las fases de la Luna?",
            opciones: ["La sombra de la Tierra", "La rotación de la Luna", "La posición de la Luna respecto al Sol y la Tierra", "Las nubes en la atmósfera"],
            respuestaCorrecta: 2,
            explicacion: "Las fases lunares son causadas por la posición cambiante de la Luna respecto al Sol y la Tierra.",
            imagen: "https://images.pexels.com/photos/87611/moon-lunar-sky-moonlight-87611.jpeg"
        },
        {
            pregunta: "¿Cuántas horas tiene un día en la Tierra?",
            opciones: ["23 horas", "24 horas", "25 horas", "22 horas"],
            respuestaCorrecta: 1,
            explicacion: "Un día en la Tierra dura 24 horas, que es el tiempo que tarda en rotar sobre su eje.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Qué instrumento se usa para observar las estrellas?",
            opciones: ["Microscopio", "Telescopio", "Periscopio", "Caleidoscopio"],
            respuestaCorrecta: 1,
            explicacion: "El telescopio es el instrumento principal para observar objetos celestes como estrellas, planetas y galaxias.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es el planeta con más lunas conocidas?",
            opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"],
            respuestaCorrecta: 1,
            explicacion: "Saturno tiene más de 80 lunas conocidas, siendo el planeta con mayor número de satélites naturales.",
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg"
        },
        {
            pregunta: "¿Qué es una estrella fugaz?",
            opciones: ["Una estrella que se mueve", "Un meteoro", "Un cometa", "Un satélite"],
            respuestaCorrecta: 1,
            explicacion: "Una estrella fugaz es en realidad un meteoro: una partícula de polvo espacial que se quema al entrar en la atmósfera.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿En qué época del año la Tierra está más cerca del Sol?",
            opciones: ["Verano", "Invierno", "Primavera", "Otoño"],
            respuestaCorrecta: 1,
            explicacion: "La Tierra está más cerca del Sol durante el invierno del hemisferio norte (enero), en el perihelio.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Cuál es el nombre de la misión que llevó al primer hombre a la Luna?",
            opciones: ["Apollo 10", "Apollo 11", "Apollo 12", "Gemini 7"],
            respuestaCorrecta: 1,
            explicacion: "Apollo 11 fue la misión que llevó a Neil Armstrong y Buzz Aldrin a la Luna en julio de 1969.",
            imagen: "https://images.pexels.com/photos/87611/moon-lunar-sky-moonlight-87611.jpeg"
        },
        {
            pregunta: "¿Qué planeta es conocido por tener el día más largo?",
            opciones: ["Mercurio", "Venus", "Marte", "Júpiter"],
            respuestaCorrecta: 1,
            explicacion: "Venus tiene el día más largo, durando 243 días terrestres para completar una rotación.",
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg"
        },
        {
            pregunta: "¿Cómo se llama el punto más cercano de una órbita al Sol?",
            opciones: ["Afelio", "Perihelio", "Apogeo", "Perigeo"],
            respuestaCorrecta: 1,
            explicacion: "El perihelio es el punto de la órbita de un planeta donde está más cerca del Sol.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Cuál es la temperatura aproximada en la superficie del Sol?",
            opciones: ["3,000°C", "5,500°C", "10,000°C", "15,000°C"],
            respuestaCorrecta: 1,
            explicacion: "La superficie del Sol tiene una temperatura de aproximadamente 5,500°C o 5,778 K.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué causa las auroras boreales?",
            opciones: ["Rayos cósmicos", "Partículas solares interactuando con la atmósfera", "Reflexión de la luz lunar", "Gases volcánicos"],
            respuestaCorrecta: 1,
            explicacion: "Las auroras son causadas por partículas del viento solar que interactúan con el campo magnético y la atmósfera terrestre.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la diferencia principal entre una estrella y un planeta?",
            opciones: ["El tamaño", "La forma", "Las estrellas producen su propia luz", "La distancia a la Tierra"],
            respuestaCorrecta: 2,
            explicacion: "Las estrellas producen su propia luz mediante fusión nuclear, mientras que los planetas reflejan la luz de su estrella.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?",
            opciones: ["8 minutos", "1 hora", "1 día", "Instantáneo"],
            respuestaCorrecta: 0,
            explicacion: "La luz del Sol tarda aproximadamente 8 minutos y 20 segundos en viajar hasta la Tierra.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué es la Estación Espacial Internacional?",
            opciones: ["Un satélite", "Una estación de investigación orbital", "Una nave espacial", "Un telescopio espacial"],
            respuestaCorrecta: 1,
            explicacion: "La Estación Espacial Internacional es un laboratorio orbital donde astronautas realizan experimentos científicos.",
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg"
        }
    ],
    
    // Preguntas de nivel intermedio (conocimientos generales)
    intermedio: [
        {
            pregunta: "¿Cuál es la velocidad de la luz en el vacío?",
            opciones: ["300,000 km/s", "299,792,458 m/s", "150,000 km/s", "500,000 km/s"],
            respuestaCorrecta: 1,
            explicacion: "La velocidad de la luz en el vacío es exactamente 299,792,458 metros por segundo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es un agujero negro?",
            opciones: ["Una estrella muy oscura", "Una región del espacio con gravedad tan fuerte que nada puede escapar", "Un planeta sin atmósfera", "Una nebulosa oscura"],
            respuestaCorrecta: 1,
            explicacion: "Un agujero negro es una región del espacio-tiempo donde la gravedad es tan fuerte que ni la luz puede escapar.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la estrella más brillante en el cielo nocturno?",
            opciones: ["Polaris", "Sirio", "Vega", "Betelgeuse"],
            respuestaCorrecta: 1,
            explicacion: "Sirio, en la constelación del Can Mayor, es la estrella más brillante del cielo nocturno.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué fenómeno causa las mareas en la Tierra?",
            opciones: ["La rotación terrestre", "La atracción gravitacional de la Luna y el Sol", "El campo magnético terrestre", "Los vientos solares"],
            respuestaCorrecta: 1,
            explicacion: "Las mareas son causadas principalmente por la atracción gravitacional de la Luna, y en menor medida del Sol.",
            imagen: "https://images.pexels.com/photos/87611/moon-lunar-sky-moonlight-87611.jpeg"
        },
        {
            pregunta: "¿Cuál es la edad aproximada del universo?",
            opciones: ["4.6 mil millones de años", "13.8 mil millones de años", "20 mil millones de años", "1 mil millones de años"],
            respuestaCorrecta: 1,
            explicacion: "El universo tiene aproximadamente 13.8 mil millones de años según las mediciones más recientes.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es una supernova?",
            opciones: ["El nacimiento de una estrella", "La explosión de una estrella masiva", "Una tormenta solar", "La colisión de dos planetas"],
            respuestaCorrecta: 1,
            explicacion: "Una supernova es la explosión catastrófica que marca el final de la vida de una estrella masiva.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es el planeta más denso del Sistema Solar?",
            opciones: ["Tierra", "Mercurio", "Venus", "Marte"],
            respuestaCorrecta: 0,
            explicacion: "La Tierra es el planeta más denso del Sistema Solar, con una densidad media de 5.52 g/cm³.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Qué es la radiación de fondo de microondas?",
            opciones: ["Radiación del Sol", "Remanente del Big Bang", "Radiación de los planetas", "Ondas de radio terrestres"],
            respuestaCorrecta: 1,
            explicacion: "La radiación de fondo de microondas es el remanente térmico del Big Bang, detectable en todo el universo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuántas constelaciones oficiales reconoce la Unión Astronómica Internacional?",
            opciones: ["88", "72", "96", "108"],
            respuestaCorrecta: 0,
            explicacion: "La Unión Astronómica Internacional reconoce oficialmente 88 constelaciones que cubren toda la esfera celeste.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es el corrimiento al rojo en astronomía?",
            opciones: ["El color de Marte", "El cambio de frecuencia de la luz debido al movimiento", "Una aurora roja", "La luz filtrada por la atmósfera"],
            respuestaCorrecta: 1,
            explicacion: "El corrimiento al rojo es el cambio hacia frecuencias más bajas de la luz debido al efecto Doppler o la expansión del universo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la masa del Sol en comparación con la Tierra?",
            opciones: ["100 veces más masivo", "1,000 veces más masivo", "333,000 veces más masivo", "1 millón de veces más masivo"],
            respuestaCorrecta: 2,
            explicacion: "El Sol es aproximadamente 333,000 veces más masivo que la Tierra.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué es una enana blanca?",
            opciones: ["Una estrella joven", "El remanente de una estrella como el Sol", "Un planeta helado", "Una luna de Júpiter"],
            respuestaCorrecta: 1,
            explicacion: "Una enana blanca es el núcleo remanente de una estrella de masa similar al Sol después de agotar su combustible nuclear.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la temperatura en el núcleo del Sol?",
            opciones: ["1 millón °C", "15 millones °C", "100 millones °C", "1 mil millones °C"],
            respuestaCorrecta: 1,
            explicacion: "El núcleo del Sol alcanza temperaturas de aproximadamente 15 millones de grados Celsius.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué es la materia oscura?",
            opciones: ["Materia que no emite luz", "Agujeros negros", "Planetas sin atmósfera", "Polvo espacial"],
            respuestaCorrecta: 0,
            explicacion: "La materia oscura es una forma de materia que no emite, absorbe ni refleja luz, pero sí ejerce influencia gravitacional.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es el exoplaneta más cercano a la Tierra?",
            opciones: ["Kepler-452b", "Próxima Centauri b", "TRAPPIST-1e", "HD 209458 b"],
            respuestaCorrecta: 1,
            explicacion: "Próxima Centauri b es el exoplaneta más cercano, ubicado a 4.24 años luz de la Tierra.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la precesión de los equinoccios?",
            opciones: ["El cambio de las estaciones", "El movimiento del eje terrestre", "La rotación de la Luna", "El movimiento de traslación"],
            respuestaCorrecta: 1,
            explicacion: "La precesión es el lento bamboleo del eje de rotación terrestre que completa un ciclo cada 26,000 años.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Cuál es la galaxia más cercana a la Vía Láctea?",
            opciones: ["Andrómeda", "Galaxia del Triángulo", "Gran Nube de Magallanes", "Centaurus A"],
            respuestaCorrecta: 2,
            explicacion: "La Gran Nube de Magallanes es la galaxia más cercana a la Vía Láctea, a unos 160,000 años luz.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la heliosfera?",
            opciones: ["La atmósfera del Sol", "La región de influencia del viento solar", "La superficie del Sol", "Las manchas solares"],
            respuestaCorrecta: 1,
            explicacion: "La heliosfera es la región del espacio donde el viento solar del Sol ejerce influencia sobre el medio interestelar.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Cuál es el período orbital de Halley?",
            opciones: ["50 años", "76 años", "100 años", "200 años"],
            respuestaCorrecta: 1,
            explicacion: "El cometa Halley tiene un período orbital de aproximadamente 76 años.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es un púlsar?",
            opciones: ["Una estrella variable", "Una estrella de neutrones que emite pulsos regulares", "Un agujero negro", "Una nebulosa"],
            respuestaCorrecta: 1,
            explicacion: "Un púlsar es una estrella de neutrones altamente magnetizada que emite haces de radiación electromagnética.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la inclinación del eje terrestre?",
            opciones: ["20.5°", "23.5°", "25.5°", "30°"],
            respuestaCorrecta: 1,
            explicacion: "El eje terrestre está inclinado aproximadamente 23.5° respecto a la perpendicular de su plano orbital.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Qué son los objetos del Cinturón de Kuiper?",
            opciones: ["Asteroides entre Marte y Júpiter", "Cuerpos helados más allá de Neptuno", "Lunas de los planetas gigantes", "Cometas de período corto"],
            respuestaCorrecta: 1,
            explicacion: "Los objetos del Cinturón de Kuiper son cuerpos helados que orbitan más allá de Neptuno, incluyendo a Plutón.",
            imagen: "https://images.pexels.com/photos/73873/solar-system-sun-mercury-venus-73873.jpeg"
        },
        {
            pregunta: "¿Cuál es la velocidad de escape de la Tierra?",
            opciones: ["7.9 km/s", "11.2 km/s", "15.5 km/s", "20.1 km/s"],
            respuestaCorrecta: 1,
            explicacion: "La velocidad de escape de la Tierra es de 11.2 km/s, la velocidad necesaria para escapar de su gravedad.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Qué es la zona habitable de una estrella?",
            opciones: ["La región donde puede existir agua líquida", "La distancia máxima de los planetas", "El área sin asteroides", "La zona de mayor radiación"],
            respuestaCorrecta: 0,
            explicacion: "La zona habitable es la región alrededor de una estrella donde las temperaturas permiten la existencia de agua líquida.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la composición principal de Júpiter?",
            opciones: ["Roca y metal", "Hielo y roca", "Hidrógeno y helio", "Dióxido de carbono"],
            respuestaCorrecta: 2,
            explicacion: "Júpiter está compuesto principalmente de hidrógeno (89%) y helio (10%), similar al Sol.",
            imagen: "https://images.pexels.com/photos/39649/jupiter-red-spot-planet-39649.jpeg"
        },
        {
            pregunta: "¿Qué es el punto de Lagrange?",
            opciones: ["Un cráter lunar", "Un punto de equilibrio gravitacional", "Una mancha solar", "Un tipo de galaxia"],
            respuestaCorrecta: 1,
            explicacion: "Los puntos de Lagrange son posiciones en el espacio donde las fuerzas gravitacionales se equilibran.",
            imagen: "https://images.pexels.com/photos/87009/earth-soil-creep-moon-87009.jpeg"
        },
        {
            pregunta: "¿Cuál es la diferencia entre magnitud aparente y absoluta?",
            opciones: ["No hay diferencia", "La aparente es como la vemos, la absoluta es intrínseca", "La absoluta cambia con el tiempo", "La aparente es más precisa"],
            respuestaCorrecta: 1,
            explicacion: "La magnitud aparente es el brillo que vemos desde la Tierra, la absoluta es el brillo intrínseco de la estrella.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué causa la rotación diferencial del Sol?",
            opciones: ["Es un cuerpo sólido", "Es un gas que rota más rápido en el ecuador", "Los campos magnéticos", "La gravedad de los planetas"],
            respuestaCorrecta: 1,
            explicacion: "Al ser un cuerpo gaseoso, el Sol rota más rápido en su ecuador (25 días) que en los polos (35 días).",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Cuál es el satélite más volcánicamente activo del Sistema Solar?",
            opciones: ["Europa", "Ío", "Encélado", "Titán"],
            respuestaCorrecta: 1,
            explicacion: "Ío, luna de Júpiter, es el cuerpo más volcánicamente activo debido a las fuerzas de marea gravitacional.",
            imagen: "https://images.pexels.com/photos/39649/jupiter-red-spot-planet-39649.jpeg"
        },
        {
            pregunta: "¿Qué es la paradoja de Fermi?",
            opciones: ["Un problema matemático", "La contradicción entre la probabilidad de vida extraterrestre y su ausencia", "Una ley física", "Un tipo de galaxia"],
            respuestaCorrecta: 1,
            explicacion: "La paradoja de Fermi cuestiona por qué no hemos encontrado evidencia de vida extraterrestre a pesar de las altas probabilidades.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        }
    ],
    
    // Preguntas de nivel difícil (para expertos)
    dificil: [
        {
            pregunta: "¿Cuál es la constante de Hubble aproximada en unidades actuales?",
            opciones: ["50 km/s/Mpc", "70 km/s/Mpc", "100 km/s/Mpc", "120 km/s/Mpc"],
            respuestaCorrecta: 1,
            explicacion: "La constante de Hubble actual es aproximadamente 70 km/s/Mpc, midiendo la expansión del universo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la radiación de Hawking?",
            opciones: ["Radiación de las estrellas", "Radiación teórica emitida por agujeros negros", "Radiación cósmica", "Radiación solar"],
            respuestaCorrecta: 1,
            explicacion: "La radiación de Hawking es la radiación térmica teórica emitida por agujeros negros debido a efectos cuánticos.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la metalicidad del Sol en la notación astronómica?",
            opciones: ["Z = 0.001", "Z = 0.02", "Z = 0.1", "Z = 0.5"],
            respuestaCorrecta: 1,
            explicacion: "La metalicidad del Sol es aproximadamente Z = 0.02, indicando que 2% de su masa son elementos más pesados que el helio.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué es el límite de Chandrasekhar?",
            opciones: ["1.4 masas solares", "3.2 masas solares", "5.6 masas solares", "10 masas solares"],
            respuestaCorrecta: 0,
            explicacion: "El límite de Chandrasekhar es aproximadamente 1.4 masas solares, el límite máximo para una enana blanca estable.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la temperatura de la radiación de fondo de microondas?",
            opciones: ["1.5 K", "2.7 K", "4.2 K", "6.8 K"],
            respuestaCorrecta: 1,
            explicacion: "La radiación de fondo de microondas tiene una temperatura de 2.725 K, remanente del Big Bang.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué fenómeno explica la aceleración de la expansión del universo?",
            opciones: ["Materia oscura", "Energía oscura", "Agujeros negros", "Radiación cósmica"],
            respuestaCorrecta: 1,
            explicacion: "La energía oscura es la explicación teórica para la aceleración observada en la expansión del universo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la densidad crítica del universo?",
            opciones: ["5×10⁻³⁰ g/cm³", "9×10⁻³⁰ g/cm³", "2×10⁻²⁹ g/cm³", "1×10⁻²⁸ g/cm³"],
            respuestaCorrecta: 1,
            explicacion: "La densidad crítica del universo es aproximadamente 9×10⁻³⁰ g/cm³, determinando la geometría del espacio-tiempo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la nucleosíntesis primordial?",
            opciones: ["Formación de elementos en estrellas", "Creación de elementos ligeros después del Big Bang", "Fusión en supernovas", "Procesos en agujeros negros"],
            respuestaCorrecta: 1,
            explicacion: "La nucleosíntesis primordial creó hidrógeno, helio y litio en los primeros minutos después del Big Bang.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es el parámetro de densidad actual del universo (Ω₀)?",
            opciones: ["0.3", "1.0", "1.5", "2.0"],
            respuestaCorrecta: 1,
            explicacion: "El parámetro de densidad actual Ω₀ ≈ 1.0, indicando un universo plano según las observaciones de WMAP y Planck.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es el radio de Schwarzschild?",
            opciones: ["Radio de una estrella de neutrones", "Radio del horizonte de eventos de un agujero negro", "Radio de la heliosfera", "Radio orbital de Mercurio"],
            respuestaCorrecta: 1,
            explicacion: "El radio de Schwarzschild define el horizonte de eventos de un agujero negro, donde la velocidad de escape iguala la velocidad de la luz.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la abundancia primordial de helio en el universo?",
            opciones: ["15%", "25%", "35%", "45%"],
            respuestaCorrecta: 1,
            explicacion: "Aproximadamente 25% de la materia bariónica del universo es helio, creado durante la nucleosíntesis primordial.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la violación CP en física de partículas?",
            opciones: ["Conservación de momento", "Violación de la simetría carga-paridad", "Conservación de energía", "Principio de incertidumbre"],
            respuestaCorrecta: 1,
            explicacion: "La violación CP explica por qué existe más materia que antimateria en el universo observable.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la luminosidad del Sol?",
            opciones: ["2.8×10²⁶ W", "3.8×10²⁶ W", "4.8×10²⁶ W", "5.8×10²⁶ W"],
            respuestaCorrecta: 1,
            explicacion: "La luminosidad solar es 3.828×10²⁶ watts, la energía total emitida por el Sol por segundo.",
            imagen: "https://images.pexels.com/photos/87651/sun-fireball-solar-flare-sunlight-87651.jpeg"
        },
        {
            pregunta: "¿Qué es la inflación cósmica?",
            opciones: ["Expansión actual del universo", "Período de expansión exponencial temprana", "Formación de galaxias", "Colapso gravitacional"],
            respuestaCorrecta: 1,
            explicacion: "La inflación cósmica fue un período de expansión exponencial del universo en sus primeros 10⁻³² segundos.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la masa de Planck?",
            opciones: ["1.2×10⁻⁸ kg", "2.2×10⁻⁸ kg", "3.2×10⁻⁸ kg", "4.2×10⁻⁸ kg"],
            respuestaCorrecta: 1,
            explicacion: "La masa de Planck es 2.176×10⁻⁸ kg, una unidad fundamental en física cuántica y gravitacional.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la bariogénesis?",
            opciones: ["Formación de estrellas", "Proceso que creó el exceso de materia sobre antimateria", "Nucleosíntesis estelar", "Formación de planetas"],
            respuestaCorrecta: 1,
            explicacion: "La bariogénesis es el proceso teórico que explica cómo se generó el exceso de bariones (materia) sobre antibariones.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la velocidad peculiar de la Vía Láctea respecto al fondo cósmico de microondas?",
            opciones: ["370 km/s", "470 km/s", "570 km/s", "670 km/s"],
            respuestaCorrecta: 0,
            explicacion: "La Vía Láctea se mueve a aproximadamente 370 km/s respecto al marco de referencia del fondo cósmico de microondas.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es el problema de la planitud del universo?",
            opciones: ["Por qué el universo es tan uniforme", "Por qué Ω está tan cerca de 1", "Por qué no vemos monopolos magnéticos", "Por qué existe la materia oscura"],
            respuestaCorrecta: 1,
            explicacion: "El problema de la planitud cuestiona por qué el parámetro de densidad Ω está tan precisamente cerca de 1.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la temperatura de Planck?",
            opciones: ["1.4×10³² K", "1.4×10³¹ K", "1.4×10³⁰ K", "1.4×10²⁹ K"],
            respuestaCorrecta: 0,
            explicacion: "La temperatura de Planck es 1.416×10³² K, la temperatura teórica máxima posible en el universo.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la época de recombinación?",
            opciones: ["Cuando se formaron las primeras estrellas", "Cuando los electrones se combinaron con núcleos", "Cuando se formaron los primeros átomos pesados", "Cuando comenzó la nucleosíntesis"],
            respuestaCorrecta: 1,
            explicacion: "La recombinación ocurrió ~380,000 años después del Big Bang, cuando el universo se enfrió lo suficiente para formar átomos neutros.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la ecuación de estado de la energía oscura (w)?",
            opciones: ["w = 0", "w = 1/3", "w = -1", "w = -1/3"],
            respuestaCorrecta: 2,
            explicacion: "La energía oscura tiene w = -1 (constante cosmológica), causando presión negativa y expansión acelerada.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la longitud de Planck?",
            opciones: ["1.6×10⁻³⁵ m", "2.6×10⁻³⁵ m", "3.6×10⁻³⁵ m", "4.6×10⁻³⁵ m"],
            respuestaCorrecta: 0,
            explicacion: "La longitud de Planck es 1.616×10⁻³⁵ metros, la escala donde los efectos cuánticos de la gravedad se vuelven importantes.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es el límite de Tolman-Oppenheimer-Volkoff?",
            opciones: ["1.5-2.0 masas solares", "2.0-3.0 masas solares", "3.0-4.0 masas solares", "4.0-5.0 masas solares"],
            respuestaCorrecta: 1,
            explicacion: "El límite TOV es la masa máxima (~2-3 masas solares) que puede tener una estrella de neutrones antes de colapsar en un agujero negro.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la época electrodébil?",
            opciones: ["Cuando se separaron las fuerzas electromagnética y débil", "Formación de partículas W y Z", "Ruptura de simetría electrodébil", "Todas las anteriores"],
            respuestaCorrecta: 3,
            explicacion: "La época electrodébil (10⁻¹² s después del Big Bang) marcó la separación de las fuerzas electromagnética y nuclear débil.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la paradoja de la información en agujeros negros?",
            opciones: ["Los agujeros negros no pueden formarse", "La información que cae en un agujero negro parece perderse", "Los agujeros negros no pueden evaporarse", "No existe tal paradoja"],
            respuestaCorrecta: 1,
            explicacion: "La paradoja cuestiona qué sucede con la información cuántica cuando cae en un agujero negro y este se evapora.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la transición de fase QCD?",
            opciones: ["Formación de quarks libres", "Confinamiento de quarks en hadrones", "Ruptura de simetría quiral", "Transición plasma de quarks-gluones a hadrones"],
            respuestaCorrecta: 3,
            explicacion: "La transición QCD (~10⁻⁶ s después del Big Bang) marcó el confinamiento de quarks y gluones en protones y neutrones.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la densidad de una estrella de neutrones típica?",
            opciones: ["10¹⁴ g/cm³", "10¹⁵ g/cm³", "10¹⁶ g/cm³", "10¹⁷ g/cm³"],
            respuestaCorrecta: 1,
            explicacion: "Las estrellas de neutrones tienen densidades de ~10¹⁵ g/cm³, comparable a la de un núcleo atómico.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es el campo de Higgs?",
            opciones: ["Campo que da masa a las partículas", "Campo electromagnético", "Campo gravitacional", "Campo de fuerza nuclear"],
            respuestaCorrecta: 0,
            explicacion: "El campo de Higgs es un campo cuántico que permea el espacio y da masa a las partículas fundamentales.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Cuál es la escala de la gran unificación (GUT)?",
            opciones: ["10¹⁶ GeV", "10¹⁵ GeV", "10¹⁴ GeV", "10¹³ GeV"],
            respuestaCorrecta: 0,
            explicacion: "La escala GUT (~10¹⁶ GeV) es donde teóricamente se unifican las fuerzas electromagnética, débil y fuerte.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        },
        {
            pregunta: "¿Qué es la supersimetría (SUSY)?",
            opciones: ["Simetría entre bosones y fermiones", "Simetría de gauge", "Simetría rotacional", "Simetría temporal"],
            respuestaCorrecta: 0,
            explicacion: "La supersimetría es una simetría teórica que relaciona bosones (fuerza) con fermiones (materia), prediciendo partículas supersimétricas.",
            imagen: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg"
        }
    ]
};
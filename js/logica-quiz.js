// Archivo principal con la lógica del quiz astronómico

// Variables globales para el estado del quiz
let nivelActual = ''; // Nivel de dificultad seleccionado (facil, intermedio, dificil)
let preguntasDelQuiz = []; // Array con las preguntas del quiz actual
let preguntaActualIndex = 0; // Índice de la pregunta actual (0-29)
let respuestasCorrectas = 0; // Contador de respuestas correctas
let tiempoInicio = 0; // Timestamp del inicio del quiz
let quizEnProgreso = false; // Bandera para saber si el quiz está activo

// Elementos del DOM que se utilizarán frecuentemente
let elementosPantalla = {}; // Objeto para almacenar referencias a elementos
let elementosQuiz = {}; // Objeto para elementos específicos del quiz

// Función de inicialización que se ejecuta cuando carga la página
function inicializarQuiz() {
    obtenerElementosDOM(); // Obtener referencias a elementos HTML
    configurarEventListeners(); // Configurar eventos de botones
    mostrarPantallaInicial(); // Mostrar la pantalla de inicio
    console.log('Quiz astronómico inicializado correctamente'); // Log de confirmación
}

// Función para obtener referencias a elementos del DOM
function obtenerElementosDOM() {
    // Pantallas principales
    elementosPantalla.inicio = document.getElementById('pantalla-inicio'); // Pantalla de inicio
    elementosPantalla.quiz = document.getElementById('pantalla-quiz'); // Pantalla del quiz
    elementosPantalla.resultados = document.getElementById('pantalla-resultados'); // Pantalla de resultados
    
    // Elementos del quiz
    elementosQuiz.preguntaActual = document.getElementById('pregunta-actual'); // Número de pregunta actual
    elementosQuiz.totalPreguntas = document.getElementById('total-preguntas'); // Total de preguntas
    elementosQuiz.nivelMostrado = document.getElementById('nivel-mostrado'); // Nivel mostrado
    elementosQuiz.barraRelleno = document.getElementById('barra-relleno'); // Barra de progreso
    elementosQuiz.imagenPregunta = document.getElementById('imagen-pregunta'); // Contenedor de imagen
    elementosQuiz.textoPregunta = document.getElementById('texto-pregunta'); // Texto de la pregunta
    elementosQuiz.contenedorOpciones = document.getElementById('contenedor-opciones'); // Contenedor de opciones
    elementosQuiz.contenedorRetroalimentacion = document.getElementById('contenedor-retroalimentacion'); // Contenedor de feedback
    elementosQuiz.retroalimentacion = document.getElementById('retroalimentacion'); // Mensaje de feedback
    elementosQuiz.botonSiguiente = document.getElementById('boton-siguiente'); // Botón siguiente
    
    // Elementos de resultados
    elementosQuiz.circuloPuntuacion = document.getElementById('circulo-puntuacion'); // Círculo de puntuación
    elementosQuiz.porcentajePuntuacion = document.getElementById('porcentaje-puntuacion'); // Porcentaje mostrado
    elementosQuiz.correctasFinales = document.getElementById('correctas-final'); // Respuestas correctas finales
    elementosQuiz.nivelFinal = document.getElementById('nivel-final'); // Nivel completado
    elementosQuiz.mensajeRendimiento = document.getElementById('mensaje-rendimiento'); // Mensaje de rendimiento
}

// Función para configurar todos los event listeners
function configurarEventListeners() {
    // Event listeners para botones de nivel
    const botonesNivel = document.querySelectorAll('.boton-nivel'); // Obtener todos los botones de nivel
    botonesNivel.forEach(boton => { // Para cada botón
        boton.addEventListener('click', function() { // Agregar evento click
            const nivel = this.getAttribute('data-nivel'); // Obtener nivel del botón
            iniciarQuiz(nivel); // Iniciar quiz con el nivel seleccionado
        });
    });
    
    // Event listener para botón siguiente
    if (elementosQuiz.botonSiguiente) { // Verificar que existe
        elementosQuiz.botonSiguiente.addEventListener('click', siguientePregunta); // Agregar evento
    }
    
    // Event listeners para botones finales
    const botonReiniciar = document.getElementById('boton-reiniciar'); // Botón reiniciar
    if (botonReiniciar) { // Verificar que existe
        botonReiniciar.addEventListener('click', reiniciarQuiz); // Agregar evento
    }
    
    const botonCambiarNivel = document.getElementById('boton-cambiar-nivel'); // Botón cambiar nivel
    if (botonCambiarNivel) { // Verificar que existe
        botonCambiarNivel.addEventListener('click', volverAlInicio); // Agregar evento
    }
}

// Función para mostrar la pantalla inicial
function mostrarPantallaInicial() {
    ocultarTodasLasPantallas(); // Ocultar todas las pantallas
    elementosPantalla.inicio.classList.add('activa'); // Mostrar pantalla de inicio
    limpiarProgreso(); // Limpiar cualquier progreso guardado
}

// Función para ocultar todas las pantallas
function ocultarTodasLasPantallas() {
    elementosPantalla.inicio.classList.remove('activa'); // Ocultar pantalla inicio
    elementosPantalla.quiz.classList.remove('activa'); // Ocultar pantalla quiz
    elementosPantalla.resultados.classList.remove('activa'); // Ocultar pantalla resultados
}

// Función principal para iniciar el quiz
function iniciarQuiz(nivel) {
    nivelActual = nivel; // Establecer nivel actual
    preguntaActualIndex = 0; // Resetear índice de pregunta
    respuestasCorrectas = 0; // Resetear contador de respuestas correctas
    tiempoInicio = Date.now(); // Registrar tiempo de inicio
    quizEnProgreso = true; // Marcar quiz como activo
    
    // Obtener y mezclar preguntas del nivel seleccionado
    const preguntasNivel = datosPreguntas[nivel]; // Obtener preguntas del nivel
    preguntasDelQuiz = obtenerPreguntasAleatorias(preguntasNivel, 30); // Obtener 30 preguntas aleatorias
    
    // Precargar las primeras imágenes para mejor rendimiento
    precargarImagenes(preguntasDelQuiz, 5); // Precargar 5 imágenes
    
    // Configurar interfaz del quiz
    configurarInterfazQuiz(); // Configurar elementos visuales
    mostrarPantallaQuiz(); // Mostrar pantalla del quiz
    mostrarPreguntaActual(); // Mostrar la primera pregunta
    
    console.log(`Quiz iniciado - Nivel: ${nivel}, Preguntas: ${preguntasDelQuiz.length}`); // Log de confirmación
}

// Función para configurar la interfaz del quiz
function configurarInterfazQuiz() {
    elementosQuiz.totalPreguntas.textContent = preguntasDelQuiz.length; // Mostrar total de preguntas
    elementosQuiz.nivelMostrado.textContent = capitalizarPrimeraLetra(nivelActual); // Mostrar nivel
    elementosQuiz.contenedorRetroalimentacion.classList.remove('visible'); // Ocultar retroalimentación
    animarBarraProgreso(0, preguntasDelQuiz.length); // Inicializar barra de progreso
}

// Función para mostrar la pantalla del quiz
function mostrarPantallaQuiz() {
    ocultarTodasLasPantallas(); // Ocultar otras pantallas
    elementosPantalla.quiz.classList.add('activa'); // Mostrar pantalla del quiz
}

// Función para mostrar la pregunta actual
function mostrarPreguntaActual() {
    if (preguntaActualIndex >= preguntasDelQuiz.length) { // Si no hay más preguntas
        finalizarQuiz(); // Finalizar el quiz
        return; // Salir de la función
    }
    
    const pregunta = preguntasDelQuiz[preguntaActualIndex]; // Obtener pregunta actual
    
    // Actualizar información de progreso
    elementosQuiz.preguntaActual.textContent = preguntaActualIndex + 1; // Número de pregunta (1-30)
    animarBarraProgreso(preguntaActualIndex + 1, preguntasDelQuiz.length); // Actualizar barra
    
    // Mostrar imagen si existe
    mostrarImagenPregunta(pregunta.imagen); // Mostrar imagen de la pregunta
    
    // Mostrar texto de la pregunta
    elementosQuiz.textoPregunta.textContent = pregunta.pregunta; // Establecer texto
    ajustarTamanoFuente(elementosQuiz.textoPregunta, pregunta.pregunta.length); // Ajustar tamaño
    
    // Generar opciones de respuesta
    generarOpcionesRespuesta(pregunta); // Crear botones de opciones
    
    // Ocultar retroalimentación
    elementosQuiz.contenedorRetroalimentacion.classList.remove('visible'); // Ocultar feedback
    
    console.log(`Mostrando pregunta ${preguntaActualIndex + 1}: ${pregunta.pregunta.substring(0, 50)}...`); // Log
}

// Función para mostrar la imagen de la pregunta
function mostrarImagenPregunta(urlImagen) {
    elementosQuiz.imagenPregunta.innerHTML = ''; // Limpiar contenedor
    
    if (urlImagen) { // Si hay imagen
        const img = document.createElement('img'); // Crear elemento imagen
        img.src = urlImagen; // Establecer fuente
        img.alt = 'Imagen relacionada con la pregunta'; // Texto alternativo
        img.style.maxWidth = '100%'; // Ancho máximo responsive
        img.style.maxHeight = '300px'; // Altura máxima
        img.style.borderRadius = '15px'; // Bordes redondeados
        img.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)'; // Sombra
        img.style.objectFit = 'cover'; // Ajuste de imagen
        
        manejarErrorImagen(img); // Configurar manejo de errores
        elementosQuiz.imagenPregunta.appendChild(img); // Agregar al contenedor
    }
}

// Función para generar las opciones de respuesta
function generarOpcionesRespuesta(pregunta) {
    elementosQuiz.contenedorOpciones.innerHTML = ''; // Limpiar opciones anteriores
    
    pregunta.opciones.forEach((opcion, index) => { // Para cada opción
        const botonOpcion = document.createElement('button'); // Crear botón
        botonOpcion.className = 'opcion-respuesta'; // Establecer clase CSS
        botonOpcion.textContent = opcion; // Establecer texto
        botonOpcion.setAttribute('data-index', index); // Guardar índice
        
        // Ajustar tamaño de fuente según longitud
        ajustarTamanoFuente(botonOpcion, opcion.length); // Ajustar fuente
        
        // Agregar event listener
        botonOpcion.addEventListener('click', function() { // Al hacer click
            seleccionarRespuesta(index, pregunta.respuestaCorrecta, pregunta.explicacion); // Procesar respuesta
        });
        
        elementosQuiz.contenedorOpciones.appendChild(botonOpcion); // Agregar al contenedor
    });
}

// Función para manejar la selección de respuesta
function seleccionarRespuesta(indiceSeleccionado, indiceCorrect, explicacion) {
    const botonesOpciones = document.querySelectorAll('.opcion-respuesta'); // Obtener todos los botones
    const esCorrecta = indiceSeleccionado === indiceCorrect; // Verificar si es correcta
    
    // Deshabilitar todas las opciones
    botonesOpciones.forEach(boton => { // Para cada botón
        boton.disabled = true; // Deshabilitar
    });
    
    // Marcar respuesta correcta e incorrecta
    botonesOpciones[indiceCorrect].classList.add('correcta'); // Marcar correcta
    if (!esCorrecta) { // Si la selección es incorrecta
        botonesOpciones[indiceSeleccionado].classList.add('incorrecta'); // Marcar incorrecta
    }
    
    // Actualizar contador si es correcta
    if (esCorrecta) { // Si es correcta
        respuestasCorrectas++; // Incrementar contador
        reproducirEfectoSonido('correcto'); // Efecto sonoro/vibración
    } else { // Si es incorrecta
        reproducirEfectoSonido('incorrecto'); // Efecto sonoro/vibración
    }
    
    // Mostrar retroalimentación
    mostrarRetroalimentacion(esCorrecta, explicacion); // Mostrar feedback
    
    // Guardar progreso
    guardarProgreso(nivelActual, preguntaActualIndex, respuestasCorrectas); // Guardar estado
    
    console.log(`Respuesta ${esCorrecta ? 'correcta' : 'incorrecta'}. Total correctas: ${respuestasCorrectas}`); // Log
}

// Función para mostrar la retroalimentación
function mostrarRetroalimentacion(esCorrecta, explicacion) {
    const tipoRespuesta = esCorrecta ? '¡Correcto!' : '¡Incorrecto!'; // Mensaje base
    const emoji = esCorrecta ? '✅' : '❌'; // Emoji correspondiente
    const colorClase = esCorrecta ? 'correcto' : 'incorrecto'; // Clase CSS
    
    // Crear contenido de retroalimentación
    elementosQuiz.retroalimentacion.innerHTML = `
        <div class="resultado-respuesta ${colorClase}"> 
            <h3>${emoji} ${tipoRespuesta}</h3>
            <p>${explicacion}</p>
        </div>
    `; // HTML de retroalimentación
    
    // Mostrar contenedor con animación
    elementosQuiz.contenedorRetroalimentacion.classList.add('visible'); // Hacer visible
    
    // Scroll suave hacia la retroalimentación
    elementosQuiz.contenedorRetroalimentacion.scrollIntoView({ // Scroll automático
        behavior: 'smooth', // Animación suave
        block: 'nearest' // Posición más cercana
    });
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    preguntaActualIndex++; // Incrementar índice
    
    if (preguntaActualIndex < preguntasDelQuiz.length) { // Si hay más preguntas
        mostrarPreguntaActual(); // Mostrar siguiente pregunta
    } else { // Si no hay más preguntas
        finalizarQuiz(); // Finalizar quiz
    }
}

// Función para finalizar el quiz
function finalizarQuiz() {
    quizEnProgreso = false; // Marcar quiz como finalizado
    const tiempoTotal = Math.floor((Date.now() - tiempoInicio) / 1000); // Calcular tiempo total
    const porcentaje = calcularPorcentaje(respuestasCorrectas, preguntasDelQuiz.length); // Calcular porcentaje
    
    // Reproducir efecto de finalización
    reproducirEfectoSonido('completado'); // Efecto sonoro/vibración
    
    // Mostrar pantalla de resultados
    mostrarResultados(porcentaje, tiempoTotal); // Mostrar resultados
    
    // Limpiar progreso guardado
    limpiarProgreso(); // Eliminar progreso temporal
    
    console.log(`Quiz finalizado - Correctas: ${respuestasCorrectas}/${preguntasDelQuiz.length} (${porcentaje}%)`); // Log
}

// Función para mostrar los resultados finales
function mostrarResultados(porcentaje, tiempoTotal) {
    // Actualizar elementos de resultados
    elementosQuiz.porcentajePuntuacion.textContent = `${porcentaje}%`; // Mostrar porcentaje
    elementosQuiz.correctasFinales.textContent = respuestasCorrectas; // Mostrar correctas
    elementosQuiz.nivelFinal.textContent = capitalizarPrimeraLetra(nivelActual); // Mostrar nivel
    elementosQuiz.mensajeRendimiento.textContent = obtenerMensajeRendimiento(porcentaje); // Mensaje
    
    // Animar círculo de puntuación
    const gradiente = crearGradientePuntuacion(porcentaje); // Crear gradiente
    elementosQuiz.circuloPuntuacion.style.background = gradiente; // Aplicar gradiente
    
    // Mostrar pantalla de resultados
    ocultarTodasLasPantallas(); // Ocultar otras pantallas
    elementosPantalla.resultados.classList.add('activa'); // Mostrar resultados
    
    // Animar aparición del porcentaje
    setTimeout(() => { // Después de mostrar la pantalla
        animarPorcentaje(0, porcentaje, 2000); // Animar contador
    }, 300);
}

// Función para animar el contador de porcentaje
function animarPorcentaje(desde, hasta, duracion) {
    const inicio = Date.now(); // Tiempo de inicio
    const diferencia = hasta - desde; // Diferencia a animar
    
    function actualizar() { // Función de actualización
        const transcurrido = Date.now() - inicio; // Tiempo transcurrido
        const progreso = Math.min(transcurrido / duracion, 1); // Progreso (0-1)
        const valorActual = Math.floor(desde + (diferencia * progreso)); // Valor actual
        
        elementosQuiz.porcentajePuntuacion.textContent = `${valorActual}%`; // Actualizar texto
        
        if (progreso < 1) { // Si no ha terminado
            requestAnimationFrame(actualizar); // Continuar animación
        }
    }
    
    requestAnimationFrame(actualizar); // Iniciar animación
}

// Función para reiniciar el quiz con el mismo nivel
function reiniciarQuiz() {
    if (nivelActual) { // Si hay un nivel seleccionado
        iniciarQuiz(nivelActual); // Reiniciar con el mismo nivel
    } else { // Si no hay nivel
        volverAlInicio(); // Volver al inicio
    }
}

// Función para volver a la pantalla inicial
function volverAlInicio() {
    nivelActual = ''; // Limpiar nivel actual
    preguntasDelQuiz = []; // Limpiar preguntas
    preguntaActualIndex = 0; // Resetear índice
    respuestasCorrectas = 0; // Resetear contador
    quizEnProgreso = false; // Marcar como no activo
    
    mostrarPantallaInicial(); // Mostrar pantalla inicial
}

// Event listener que se ejecuta cuando se carga completamente el DOM
document.addEventListener('DOMContentLoaded', function() {
    inicializarQuiz(); // Inicializar el quiz
    console.log('DOM cargado, quiz listo para usar'); // Log de confirmación
});

// Event listener para detectar cuando el usuario sale de la página
window.addEventListener('beforeunload', function(event) {
    if (quizEnProgreso) { // Si hay un quiz en progreso
        const mensaje = '¿Estás seguro de que quieres salir? Se perderá el progreso del quiz.'; // Mensaje
        event.returnValue = mensaje; // Para navegadores antiguos
        return mensaje; // Para navegadores modernos
    }
});

// Event listener para manejar cambios de orientación en móviles
window.addEventListener('orientationchange', function() {
    setTimeout(() => { // Después del cambio de orientación
        // Reajustar elementos si es necesario
        if (elementosQuiz.imagenPregunta && elementosQuiz.imagenPregunta.querySelector('img')) {
            const img = elementosQuiz.imagenPregunta.querySelector('img'); // Obtener imagen
            img.style.maxHeight = esDispositivoMovil() ? '200px' : '300px'; // Ajustar altura
        }
    }, 500); // Esperar medio segundo
});
// Archivo de funciones de utilidad para el quiz astronómico

// Función para mezclar aleatoriamente un array utilizando el algoritmo Fisher-Yates
function mezclarArray(array) {
    const arrayMezclado = [...array]; // Crear una copia del array original para no modificarlo
    
    // Recorrer el array desde el final hacia el principio
    for (let i = arrayMezclado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generar índice aleatorio
        [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]]; // Intercambiar elementos
    }
    
    return arrayMezclado; // Retornar el array mezclado
}

// Función para obtener un número específico de preguntas aleatorias de un nivel
function obtenerPreguntasAleatorias(preguntas, cantidad) {
    const preguntasMezcladas = mezclarArray(preguntas); // Mezclar todas las preguntas disponibles
    return preguntasMezcladas.slice(0, cantidad); // Tomar solo la cantidad solicitada
}

// Función para formatear el tiempo transcurrido en formato mm:ss
function formatearTiempo(segundos) {
    const minutos = Math.floor(segundos / 60); // Calcular minutos completos
    const segs = segundos % 60; // Calcular segundos restantes
    return `${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`; // Formato con ceros a la izquierda
}

// Función para calcular el porcentaje de respuestas correctas
function calcularPorcentaje(correctas, total) {
    if (total === 0) return 0; // Evitar división por cero
    return Math.round((correctas / total) * 100); // Calcular y redondear el porcentaje
}

// Función para obtener mensaje de rendimiento basado en el porcentaje
function obtenerMensajeRendimiento(porcentaje) {
    if (porcentaje >= 90) { // Excelente rendimiento
        return "¡Excelente! Eres un experto en astronomía 🌟";
    } else if (porcentaje >= 80) { // Muy buen rendimiento
        return "¡Muy bien! Tienes sólidos conocimientos 🚀";
    } else if (porcentaje >= 70) { // Buen rendimiento
        return "¡Buen trabajo! Sigues aprendiendo 🌙";
    } else if (porcentaje >= 60) { // Rendimiento regular
        return "No está mal, pero puedes mejorar 🪐";
    } else if (porcentaje >= 50) { // Rendimiento bajo
        return "Necesitas estudiar más astronomía 📚";
    } else { // Rendimiento muy bajo
        return "¡Sigue intentando! La astronomía es fascinante ⭐";
    }
}

// Función para crear gradiente cónico para el círculo de puntuación
function crearGradientePuntuacion(porcentaje) {
    const grados = (porcentaje / 100) * 360; // Convertir porcentaje a grados
    return `conic-gradient(#e94560 0deg, #e94560 ${grados}deg, rgba(255, 255, 255, 0.2) ${grados}deg)`; // Crear gradiente CSS
}

// Función para animar la barra de progreso
function animarBarraProgreso(preguntaActual, totalPreguntas) {
    const porcentaje = (preguntaActual / totalPreguntas) * 100; // Calcular porcentaje de progreso
    const barraRelleno = document.getElementById('barra-relleno'); // Obtener elemento de la barra
    
    if (barraRelleno) { // Verificar que el elemento existe
        barraRelleno.style.width = `${porcentaje}%`; // Aplicar el ancho calculado
    }
}

// Función para mostrar/ocultar elementos con animación suave
function mostrarElemento(elemento, mostrar = true) {
    if (!elemento) return; // Verificar que el elemento existe
    
    if (mostrar) { // Si se debe mostrar el elemento
        elemento.style.display = 'block'; // Hacer visible
        elemento.style.opacity = '0'; // Empezar transparente
        setTimeout(() => { // Después de un frame
            elemento.style.opacity = '1'; // Hacer opaco gradualmente
        }, 10);
    } else { // Si se debe ocultar el elemento
        elemento.style.opacity = '0'; // Hacer transparente
        setTimeout(() => { // Después de la transición
            elemento.style.display = 'none'; // Ocultar completamente
        }, 300);
    }
}

// Función para capitalizar la primera letra de una cadena
function capitalizarPrimeraLetra(texto) {
    if (!texto) return ''; // Verificar que hay texto
    return texto.charAt(0).toUpperCase() + texto.slice(1); // Capitalizar primera letra
}

// Función para generar un ID único
function generarIdUnico() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2); // Combinar timestamp y random
}

// Función para reproducir efecto de sonido (simulado con vibración en móviles)
function reproducirEfectoSonido(tipo) {
    // En dispositivos móviles, usar vibración para feedback háptico
    if (navigator.vibrate) { // Verificar soporte de vibración
        switch (tipo) {
            case 'correcto': // Vibración para respuesta correcta
                navigator.vibrate([100, 50, 100]); // Patrón corto
                break;
            case 'incorrecto': // Vibración para respuesta incorrecta
                navigator.vibrate([200, 100, 200, 100, 200]); // Patrón más largo
                break;
            case 'completado': // Vibración para quiz completado
                navigator.vibrate([300, 100, 300, 100, 300]); // Patrón de celebración
                break;
            default:
                navigator.vibrate(50); // Vibración por defecto
        }
    }
}

// Función para detectar si el dispositivo es móvil
function esDispositivoMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // Verificar user agent
}

// Función para ajustar el tamaño de fuente según el contenido
function ajustarTamanoFuente(elemento, longitudTexto) {
    if (!elemento) return; // Verificar que el elemento existe
    
    if (longitudTexto > 100) { // Texto muy largo
        elemento.style.fontSize = '0.9rem'; // Fuente más pequeña
    } else if (longitudTexto > 50) { // Texto mediano
        elemento.style.fontSize = '1rem'; // Fuente normal
    } else { // Texto corto
        elemento.style.fontSize = '1.1rem'; // Fuente un poco más grande
    }
}

// Función para manejar errores de carga de imágenes
function manejarErrorImagen(elementoImg) {
    elementoImg.onerror = function() { // Cuando falla la carga de imagen
        this.style.display = 'none'; // Ocultar imagen
        console.log('Error al cargar imagen:', this.src); // Log del error
    };
}

// Función para precargar las primeras imágenes del quiz
function precargarImagenes(preguntas, cantidad = 5) {
    const imagenesPorPrecargar = preguntas.slice(0, cantidad); // Tomar las primeras preguntas
    
    imagenesPorPrecargar.forEach(pregunta => { // Para cada pregunta
        if (pregunta.imagen) { // Si tiene imagen
            const img = new Image(); // Crear objeto imagen
            img.src = pregunta.imagen; // Establecer fuente
            manejarErrorImagen(img); // Manejar errores
        }
    });
}

// Función para limpiar el HTML de posibles elementos peligrosos
function limpiarHTML(texto) {
    const div = document.createElement('div'); // Crear elemento temporal
    div.textContent = texto; // Establecer como texto plano
    return div.innerHTML; // Retornar HTML limpio
}

// Función para guardar progreso en localStorage (opcional)
function guardarProgreso(nivel, preguntaActual, respuestasCorrectas) {
    const progreso = { // Objeto con el progreso
        nivel: nivel,
        preguntaActual: preguntaActual,
        respuestasCorrectas: respuestasCorrectas,
        timestamp: Date.now() // Marca de tiempo
    };
    
    try { // Intentar guardar
        localStorage.setItem('quizAstronomicoProgreso', JSON.stringify(progreso)); // Guardar en localStorage
    } catch (error) { // Si hay error
        console.log('No se pudo guardar el progreso:', error); // Log del error
    }
}

// Función para cargar progreso desde localStorage
function cargarProgreso() {
    try { // Intentar cargar
        const progreso = localStorage.getItem('quizAstronomicoProgreso'); // Obtener de localStorage
        return progreso ? JSON.parse(progreso) : null; // Parsear o retornar null
    } catch (error) { // Si hay error
        console.log('No se pudo cargar el progreso:', error); // Log del error
        return null; // Retornar null
    }
}

// Función para limpiar progreso guardado
function limpiarProgreso() {
    try { // Intentar limpiar
        localStorage.removeItem('quizAstronomicoProgreso'); // Eliminar de localStorage
    } catch (error) { // Si hay error
        console.log('No se pudo limpiar el progreso:', error); // Log del error
    }
}
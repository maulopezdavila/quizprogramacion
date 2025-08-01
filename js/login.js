// Sistema de login simple para el quiz astronómico

// Variables globales para el login
let usuarioLogueado = false
let nombreUsuario = ""

// Funciones que deben estar declaradas antes de su uso
function mostrarPantallaInicial() {
  // Implementación de mostrarPantallaInicial
  console.log("Mostrando pantalla inicial del quiz")
}

function limpiarProgreso() {
  // Implementación de limpiarProgreso
  console.log("Limpiando progreso del quiz")
}

// Función para inicializar el sistema de login
function inicializarLogin() {
  const formLogin = document.getElementById("form-login")
  const botonLogout = document.getElementById("boton-logout")

  // Event listener para el formulario de login
  if (formLogin) {
    formLogin.addEventListener("submit", manejarLogin)
  }

  // Event listener para el botón de logout
  if (botonLogout) {
    botonLogout.addEventListener("click", manejarLogout)
  }

  // Verificar si ya hay una sesión activa
  verificarSesionActiva()
}

// Función para manejar el login
function manejarLogin(event) {
  event.preventDefault() // Prevenir envío del formulario

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value.trim()
  const password = document.getElementById("password").value.trim()

  // Validación simple (solo verificar que no estén vacíos)
  if (nombre === "" || password === "") {
    mostrarMensajeError("Por favor, completa todos los campos")
    return
  }

  // Validación mínima de longitud
  if (nombre.length < 2) {
    mostrarMensajeError("El nombre debe tener al menos 2 caracteres")
    return
  }

  if (password.length < 3) {
    mostrarMensajeError("La contraseña debe tener al menos 3 caracteres")
    return
  }

  // "Autenticar" usuario (es solo fachada, siempre acepta)
  autenticarUsuario(nombre)
}

// Función para autenticar al usuario
function autenticarUsuario(nombre) {
  // Simular un pequeño delay de autenticación
  const botonLogin = document.querySelector(".boton-login")
  botonLogin.textContent = "Iniciando sesión..."
  botonLogin.disabled = true

  setTimeout(() => {
    // Guardar datos del usuario
    usuarioLogueado = true
    nombreUsuario = nombre

    // Guardar en sessionStorage para mantener la sesión
    sessionStorage.setItem("usuarioLogueado", "true")
    sessionStorage.setItem("nombreUsuario", nombre)

    // Ocultar pantalla de login y mostrar quiz
    ocultarPantallaLogin()
    mostrarQuizPrincipal()

    // Mostrar mensaje de bienvenida
    console.log(`Usuario ${nombre} ha iniciado sesión correctamente`)
  }, 1000) // Delay de 1 segundo
}

// Función para ocultar la pantalla de login
function ocultarPantallaLogin() {
  const pantallaLogin = document.getElementById("pantalla-login")
  if (pantallaLogin) {
    pantallaLogin.classList.remove("activa")
    pantallaLogin.style.display = "none"
  }
}

// Función para mostrar el quiz principal
function mostrarQuizPrincipal() {
  // Mostrar elementos que estaban ocultos
  const header = document.querySelector("header")
  const main = document.querySelector("main")
  const footer = document.querySelector("footer")

  if (header) header.style.display = "block"
  if (main) main.style.display = "flex"
  if (footer) footer.style.display = "block"

  // Inicializar el quiz si no está ya inicializado
  mostrarPantallaInicial()
}

// Función para manejar el logout
function manejarLogout() {
  // Confirmar logout
  if (confirm("¿Estás seguro de que quieres cerrar sesión?")) {
    cerrarSesion()
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  // Limpiar variables
  usuarioLogueado = false
  nombreUsuario = ""

  // Limpiar sessionStorage
  sessionStorage.removeItem("usuarioLogueado")
  sessionStorage.removeItem("nombreUsuario")

  // Limpiar cualquier progreso del quiz
  limpiarProgreso()

  // Recargar la página para volver al login
  window.location.reload()
}

// Función para verificar si hay una sesión activa
function verificarSesionActiva() {
  const sesionActiva = sessionStorage.getItem("usuarioLogueado")
  const nombreGuardado = sessionStorage.getItem("nombreUsuario")

  if (sesionActiva === "true" && nombreGuardado) {
    // Hay una sesión activa, saltar el login
    usuarioLogueado = true
    nombreUsuario = nombreGuardado
    ocultarPantallaLogin()
    mostrarQuizPrincipal()
  }
}

// Función para mostrar mensajes de error
function mostrarMensajeError(mensaje) {
  // Crear elemento de error si no existe
  let errorDiv = document.querySelector(".mensaje-error")
  if (!errorDiv) {
    errorDiv = document.createElement("div")
    errorDiv.className = "mensaje-error"
    errorDiv.style.cssText = `
            background: rgba(244, 67, 54, 0.2);
            border: 1px solid #f44336;
            color: #fff;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
            font-size: 0.9rem;
        `

    const formulario = document.querySelector(".formulario-login")
    formulario.appendChild(errorDiv)
  }

  // Mostrar mensaje
  errorDiv.textContent = mensaje
  errorDiv.style.display = "block"

  // Ocultar después de 3 segundos
  setTimeout(() => {
    if (errorDiv) {
      errorDiv.style.display = "none"
    }
  }, 3000)
}

// Función para obtener el nombre del usuario actual
function obtenerNombreUsuario() {
  return nombreUsuario
}

// Función para verificar si el usuario está logueado
function estaLogueado() {
  return usuarioLogueado
}

// Inicializar el login cuando se carga el DOM
document.addEventListener("DOMContentLoaded", () => {
  inicializarLogin()
})

// Limpiar sesión cuando se cierra la ventana/pestaña
window.addEventListener("beforeunload", () => {
  // Opcional: mantener la sesión o limpiarla
  // Para este caso, mantenemos la sesión en sessionStorage
})

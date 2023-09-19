let nuevaTarea=document.getElementById('nuevaTarea');
let listaTareas=document.getElementById('listaTareas');
// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaTexto = nuevaTarea.value.trim();
    if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function() {
    listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTarea.value = "";
    }
    }
    // Función para marcar una tarea como completada
    function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
    }

// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});
// // Agregar evento de clic al botón "Agregar"
// document.getElementById("agregar").addEventListener("click",
// agregarTarea);






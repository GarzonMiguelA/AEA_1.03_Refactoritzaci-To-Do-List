

//Almacenamos todas las tareas
let tasks = [];

const añadirTarea = () => {
    const input = document.getElementById('taskInput');  // Obtienemos el valor del input de texto.
    const task = input.value.trim();  // Eliminamos espacios innecesarios al inicio y final del texto.
    if (task) {  // Si no está vacío el input
        tasks.push(task); //añadimos la tarea como cadena de texto
        input.value = '';  // Limpiamos el input para que el user pueda volver a escribir.
        mostrarTarea();  // Actualizamos la lista.
    }
}


const borrarTarea = (index) => {
    tasks.splice(index, 1); // Eliminamos la tarea
    mostrarTarea(); // Actualizamos de nuevo la lista.
}

const mostrarTarea = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';  // Limpiamos la lista de tareas.

    tasks.forEach((task, index) => {
        // Usamos template literals para crear cada item con checkbox y botón de eliminar
        const liTemplate = `
            <li>
                <input type="checkbox">
                <span>${task}</span>
                <button onclick="borrarTarea(${index})">Eliminar</button>
            </li>
        `;
        // Agregamos el nuevo elemento al listado
        taskList.innerHTML += liTemplate;
    });
}
import { useState } from "react"
import Form from "./Form"
import List from "./List"

import './TasksContainer.css'

const defaultTasks = [
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 1, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'pendiente', priority: 'media' },
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 2, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'progreso', priority: 'baja' },
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 3, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'finalizada', priority: 'alta' },
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 4, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'progreso', priority: 'baja' },
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 5, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'finalizada', priority: 'alta' }
]

function TasksContainer() {

  const [tasks, setTasks] = useState(defaultTasks)

  const agregar = (task) => {
    setTasks([...tasks, task])
  }

  const eliminar = (id) => {
    const newTasks = tasks.filter((task) => task.id != id)
    setTasks(newTasks)
  }

  return (
    <section className="tasksContainer">
      <h1>INGRESÁ TU TAREA</h1>
      <Form agregar={agregar} />
      <h2 className="tasksH2">Tareas</h2>
      <List tasks={tasks} eliminar={eliminar} />
    </section>
  )
}

export default TasksContainer
import FilterContainer from './components/FilterContainer'
import TasksContainer from './components/TasksContainer'

import './App.css'
import { useState } from 'react'

const defaultTasks = [
  { name: 'Maquetado de la vista Home', category: 'Frontend', id: 1, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'Pendiente', priority: 'MEDIA' },
  { name: 'Crear EndPoints', category: 'Backend', id: 2, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'Proceso', priority: 'BAJA' },
  { name: 'Hacer la documentación de los nuevos cambios', category: 'Documentación', id: 3, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'Finalizada', priority: 'ALTA' },
  { name: 'Encriptar las contraseñas de los usuarios', category: 'Seguridad', id: 4, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'Proceso', priority: 'BAJA' },
  { name: 'Maquetado de la vista Carrito', category: 'Frontend', id: 5, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'Finalizada', priority: 'ALTA' }
]

const priorityOrder = {
  ALTA: 2,
  MEDIA: 1,
  BAJA: 0
}

const sortTasksByPriority = (tasks) => {
  return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
}

export default function App() {

  const [tasks, setTasks] = useState(sortTasksByPriority(defaultTasks))
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const filterTasks = (filter) => {
    if (filter === 'Todas') { setFilteredTasks(tasks); return }
    const newTasks = tasks.filter((task) => task.category == filter)
    setFilteredTasks(newTasks)
  }

  const addTask = (task) => {
    const newTasks = [...tasks, task]
    const sorted = sortTasksByPriority(newTasks)
    setTasks(sorted)
    setFilteredTasks(sorted)
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id != id)
    setTasks(newTasks)
    setFilteredTasks(newTasks)
  }

  const updateTask = (id, field, value) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, [field]: value }
      return task
    })

    const sorted = sortTasksByPriority(newTasks)
    setTasks(sorted)
    setFilteredTasks(sorted)
  }

  return (
    <main>
      <FilterContainer filterTasks={filterTasks} className='filterContainer' />
      <TasksContainer updateTask={updateTask} tasks={filteredTasks} addTask={addTask} deleteTask={deleteTask} className='tasksContainer' />
    </main >
  )
}

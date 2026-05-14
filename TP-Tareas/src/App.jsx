import FilterContainer from './components/FilterContainer'
import TasksContainer from './components/TasksContainer'

import './App.css'
// import { useState } from 'react'

export default function App() {

  // const defaultTasks = [
  //   { name: 'Maquetado de la vista Home', category: 'Frontend', id: 1, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'pendiente', priority: 'media' },
  //   { name: 'Maquetado de la vista Home', category: 'Frontend', id: 2, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'progreso', priority: 'baja' },
  //   { name: 'Maquetado de la vista Home', category: 'Frontend', id: 3, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'finalizada', priority: 'alta' },
  //   { name: 'Maquetado de la vista Home', category: 'Frontend', id: 4, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'progreso', priority: 'baja' },
  //   { name: 'Maquetado de la vista Home', category: 'Frontend', id: 5, description: 'Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima. Tengo que ir a comprar la leche despues del laburo. Importante que la leche tiene que ser comprada en la anonima y tiene que ser marca la anonima.', state: 'finalizada', priority: 'alta' }
  // ]

  // const [filter, useFilter] = useState(null)
  // const [tasks, setTasks] = useState(defaultTasks)

  // const sortByFilter = (tasks) => {

  //   const newTasks = tasks.filter(() => { })


  //   setTasks
  // }

  // sort={useFilter}
  // filter={filter}

  return (
    <main>
      <FilterContainer className='filterContainer' />
      <TasksContainer className='tasksContainer' />
    </main>
  )
}

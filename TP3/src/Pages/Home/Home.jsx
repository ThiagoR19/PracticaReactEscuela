import { useEffect, useState } from "react"
import axios from "axios"

import { defaultTasks } from "../../context/tareasDefault"
import FilterContainer from "../../components/FilterContainer"
import List from "../../components/List"

import './Home.css'

const priorityOrder = {
  2: 'ALTA',
  1: 'MEDIA',
  0: 'BAJA'
}

const sortTasksByPriority = (tasks) => {
  return [...tasks].sort((a, b) => priorityOrder[a] - priorityOrder[b])
}

function Home() {

  const [tasks, setTasks] = useState(sortTasksByPriority(defaultTasks))
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const URL = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
  const CONFIG = { headers: { Authorization: '47958998' } }

  useEffect(() => {
    axios.get(URL, CONFIG)
      .then((res) => {
        console.log(res.data.tareas)
        sortTasksByPriority(res.data.tareas)
        setTasks(sortTasksByPriority(res.data.tareas))
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])


  const filterTasks = (filter) => {
    if (filter === 'Todas') { setFilteredTasks(tasks); return }
    const newTasks = tasks.filter((task) => task.category == filter)
    setFilteredTasks(newTasks)
  }

  const deleteTask = (id) => {
    const URL = `https://api-tareas.ctpoba.edu.ar/api/tareas/:${id}`
    const CONFIG = { headers: { Authorization: '47958998' } }
    axios.delete(URL, CONFIG)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const updateTask = (id, field, value) => {
    const URL = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/:${id}`
    const CONFIG = { headers: { Authorization: '47958998' } }
    axios.put(URL, value, CONFIG)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section className="tasksContainer">
      <FilterContainer filterTasks={filterTasks} className='filterContainer' />
      <List deleteTask={deleteTask} updateTask={updateTask} tasks={tasks} filteredTasks={filteredTasks} />
    </section>
  )
}

export default Home
import { useEffect, useState } from "react"
import axios from "axios"

import FilterContainer from "../../components/FilterContainer"
import List from "../../components/List"

import './Home.css'
import { CONFIG } from "../../context/config"


const sortTasksByPriority = (tasks) => {
  return [...tasks].sort((a, b) => a.prioridad - b.prioridad)
}

function Home() {

  const [tasks, setTasks] = useState(sortTasksByPriority([]))
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  const refreshTasks = () => {
    const URL = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
    axios.get(URL, CONFIG)
      .then((res) => {
        sortTasksByPriority(res.data.tareas)
        setTasks(sortTasksByPriority(res.data.tareas))
        setFilteredTasks(sortTasksByPriority(res.data.tareas))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    refreshTasks()
  }, [])


  const filterTasks = (filter) => {
    if (filter === 'Todas') { setFilteredTasks(tasks); return }
    const newTasks = tasks.filter((task) => task.categoria == filter)
    setFilteredTasks(newTasks)
  }

  const deleteTask = (id) => {
    const URL = `https://api-tareas.ctpoba.edu.ar/api/tareas/${id}`
    axios.delete(URL, CONFIG)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        refreshTasks()
      })
  }

  const updateTask = (id, estado) => {
    const URL = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${id}`
    axios.put(URL, { estado }, CONFIG)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        refreshTasks()
      })
  }

  return (
    <section className="tasksContainer">
      <FilterContainer filterTasks={filterTasks} className='filterContainer' />
      <List deleteTask={deleteTask} updateTask={updateTask} tasks={filteredTasks} />
    </section>
  )
}

export default Home
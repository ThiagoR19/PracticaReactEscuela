import { useEffect, useState } from "react"
import axios from "axios"

import FilterContainer from "../../components/FilterContainer"
import List from "../../components/List"

import './Listado.css'
import { CONFIG } from "../../context/config"

function Listado() {

  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState(null)

  const refreshTasks = (filter = null) => {
    if (filter == 'Todas') { refreshTasks(); setFilter(null); return }
    const URL = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
    const CONFIG = {
      headers: { Authorization: '47958998' },
      params: {
        categoria: filter,
        orden: 'DESC'
      }
    }
    axios.get(URL, CONFIG)
      .then((res) => {
        setTasks(res.data.tareas)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    refreshTasks()
  }, [])

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
        refreshTasks(filter)
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
        refreshTasks(filter)
      })
  }

  return (
    <section className="tasksContainer">
      <FilterContainer refreshTasks={refreshTasks} setFilter={setFilter} className='filterContainer' />
      <List deleteTask={deleteTask} updateTask={updateTask} tasks={tasks} />
    </section>
  )
}

export default Listado
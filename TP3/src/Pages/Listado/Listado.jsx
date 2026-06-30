import { useEffect, useState } from "react"
import axios from "axios"

import FilterContainer from "../../components/FilterContainer"
import List from "../../components/List"

import './Listado.css'
import { CONFIG } from "../../context/config"

function Listado() {

  const [tasks, setTasks] = useState([])

  const refreshTasks = () => {
    const URL = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
    const CONFIG = {
      headers: { Authorization: '47958998' },
      params: {
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


  const filterTasks = (filter) => {
    if (filter == 'Todas') { refreshTasks(); return }
    const URL = `https://api-tareas.ctpoba.edu.ar/api/tareas`
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
      <List deleteTask={deleteTask} updateTask={updateTask} tasks={tasks} />
    </section>
  )
}

export default Listado
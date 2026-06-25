import { FiTrash } from "react-icons/fi";
import axios from "axios";
import useTarea from "../../hooks/useTarea";
import { priorityOrder } from '../../context/priorityOrder.js'

import './Form.css'
import { useState } from "react";

const URL = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
const CONFIG = {
  headers: {
    Authorization: '47958998'
  }
}

function Form() {

  const [tarea, setTarea] = useTarea()
  const [prioridad, setPrioridad] = useState(1)

  const addTask = (tarea) => {
    axios.post(URL, tarea, CONFIG)
      .then((res) => {
        console.log(res)
        alert('Tarea creada con exito')
        setTarea('nombre', '');
        setTarea('descripcion', '');
        setTarea('categoria', 'Frontend');
        setTarea('estado', 'pendiente');
        setTarea('prioridad', 1);
        setPrioridad(1);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (tarea.nombre === '') { alert('Complete todos los campos'); return }
    addTask(tarea)
  }

  return (
    <section id="form">
      <h1>Agregá Tu Tarea</h1>
      <form onSubmit={handleClick} className="form">
        <div>
          <input value={tarea.nombre} onChange={(e) => setTarea('nombre', e.target.value)} type="text" placeholder="Nombre..." />
          <select value={tarea.categoria} onChange={(e) => setTarea('categoria', e.target.value)} className="category">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Base de datos">Base de datos</option>
            <option value="Testing">Testing</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Documentación">Documentación</option>
          </select>
          <select value={tarea.estado} onChange={(e) => setTarea('estado', e.target.value)} className="state">
            <option value="pendiente">Pendiente</option>
            <option value="en curso">En Curso</option>
            <option value="completada">Finalizada</option>
          </select>
          <select
            value={prioridad}
            onChange={(e) => { setTarea('prioridad', e.target.value); setPrioridad(e.target.value) }}
            className={`priority ${priorityOrder[prioridad]}`}>
            <option value={1}>BAJA</option>
            <option value={2}>MEDIA</option>
            <option value={3}>ALTA</option>
          </select>
          <FiTrash className="trash" />
        </div>
        <textarea value={tarea.descripcion} onChange={(e) => setTarea('descripcion', e.target.value)} placeholder="Descripción..." onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}></textarea>
        <button onClick={handleClick} className="addTask" type="submit">Agregar Tarea</button>
      </form >
    </section>
  )
}

export default Form
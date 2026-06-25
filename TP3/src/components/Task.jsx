import { FiTrash } from "react-icons/fi";
import './Task.css'
import { useState } from "react";
import { priorityOrder } from '../context/priorityOrder.js'


function Task({ task, index, deleteTask, updateTask }) {

  const [clicked, setClicked] = useState(false)

  return (
    <div className={`task ${clicked ? 'taskClicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div>
        <h3>{index}. {task.nombre}</h3>
        <span className="category">{task.categoria}</span>
        <select
          value={task.estado}
          onChange={(e) => updateTask(task.id, e.target.value)}
          className="state"
          onClick={(e) => e.stopPropagation()}>
          <option value="pendiente">Pendiente</option>
          <option value="en curso">En Curso</option>
          <option value="completada">Finalizada</option>
        </select>
        <span className={`priority ${priorityOrder[task.prioridad]}`}>{priorityOrder[task.prioridad]}</span>
        <FiTrash onClick={(e) => { e.stopPropagation(); deleteTask(task.id) }} className="trash" />
      </div>
      <p className={`descripcion ${clicked && task.descripcion !== '' ? 'show' : ''}`}>
        {task.descripcion}
      </p>
    </div >
  )
}

export default Task
import { FiTrash } from "react-icons/fi";
import './Task.css'
import { useState } from "react";


function Task({ task, index, deleteTask, updateTask }) {

  const [clicked, setClicked] = useState(false)

  return (
    <div className={`task ${clicked ? 'taskClicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div>
        <h3>{index}. {task.nombre}</h3>
        <span className="category">{task.categoria}</span>
        <select
          onChange={(e) => updateTask(task.id, 'state', e.target.value)}
          className="state"
          onClick={(e) => e.stopPropagation()}>
          <option value="Pendiente">Pendiente</option>
          <option value="Proceso">En Progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <select
          onChange={(e) => updateTask(task.id, 'priority', e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className={`priority BAJA`}>
          <option value={1}>BAJA</option>
          <option value={2}>MEDIA</option>
          <option value={3}>ALTA</option>
        </select>
        <FiTrash onClick={() => deleteTask(task.id)} className="trash" />
      </div>
      <p className={`descripcion ${clicked && task.descripcion !== '' ? 'show' : ''}`}>
        {task.descripcion}
      </p>
    </div>
  )
}

export default Task
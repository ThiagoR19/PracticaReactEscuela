import { FiTrash } from "react-icons/fi";
import './Task.css'
import { useState } from "react";


function Task({ task, index, deleteTask, updateTask }) {

  const [clicked, setClicked] = useState(false)

  return (
    <div className={`task ${clicked ? 'taskClicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div>
        <h3>{index}. {task.name}</h3>
        <span className="category">{task.category}</span>
        <select
          value={task.state}
          onChange={(e) => updateTask(task.id, 'state', e.target.value)}
          className="state"
          onClick={(e) => e.stopPropagation()}>
          <option value="Pendiente">Pendiente</option>
          <option value="Proceso">En Progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <select
          value={task.priority}
          onChange={(e) => updateTask(task.id, 'priority', e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className={`priority ${task.priority}`}>
          <option value="BAJA">BAJA</option>
          <option value="MEDIA">MEDIA</option>
          <option value="ALTA">ALTA</option>
        </select>
        <FiTrash onClick={() => deleteTask(task.id)} className="trash" />
      </div>
      <p className={`descripcion ${clicked && task.description !== '' ? 'show' : ''}`}>
        {task.description}
      </p>
    </div>
  )
}

export default Task
import { FiTrash } from "react-icons/fi";
import './Task.css'
import { useState } from "react";


function Task({ name, category, index, description, defaultPriority, defaultState, id, deleteTask, updateTask }) {

  const [clicked, setClicked] = useState(false)

  return (
    <div className={`task ${clicked ? 'taskClicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div>
        <h3>{index}. {name}</h3>
        <span className="category">{category}</span>
        <select
          value={defaultState}
          onChange={(e) => updateTask(id, 'state', e.target.value)}
          className="state"
          onClick={(e) => e.stopPropagation()}>
          <option value="Pendiente">Pendiente</option>
          <option value="Proceso">En Progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <select
          value={defaultPriority}
          onChange={(e) => updateTask(id, 'priority', e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className={`priority ${defaultPriority}`}>
          <option value="BAJA">BAJA</option>
          <option value="MEDIA">MEDIA</option>
          <option value="ALTA">ALTA</option>
        </select>
        <FiTrash onClick={() => deleteTask(id)} className="trash" />
      </div>
      <p className={`descripcion ${clicked && description !== '' ? 'show' : ''}`}>
        {description}
      </p>
    </div>
  )
}

export default Task
import { FiTrash } from "react-icons/fi";
import './Task.css'
import { useState } from "react";


function Task({ name, category, index, description, defaultPriority, defaultState, id, eliminar }) {

  const [clicked, setClicked] = useState(false)
  const [priority, setPriority] = useState(defaultPriority)
  const [state, setState] = useState(defaultState)

  return (
    <div className={`task ${clicked ? 'taskClicked' : ''}`} onClick={() => setClicked(!clicked)}>
      <div>
        <h3>{index}. {name}</h3>
        <span className="category">{category}</span>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="state"
          onClick={(e) => e.stopPropagation()}>
          <option value="pendiente">Pendiente</option>
          <option value="progreso">En Progreso</option>
          <option value="finalizada">Finalizada</option>
        </select>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className={`priority ${priority}`}>
          <option value="baja">BAJA</option>
          <option value="media">MEDIA</option>
          <option value="alta">ALTA</option>
        </select>
        <FiTrash onClick={() => eliminar(id)} className="trash" />
      </div>
      <p className={`descripcion ${clicked && description !== '' ? 'show' : ''}`}>
        {description}
      </p>
    </div>
  )
}

export default Task
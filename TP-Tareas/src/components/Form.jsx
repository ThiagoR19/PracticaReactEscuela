import { FiTrash } from "react-icons/fi";
import './Form.css'
import { useState } from "react";

function Form({ agregar }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('frontend')
  const [defaultPriority, setDefualtPriority] = useState('baja')
  const [defaultState, setDefaultState] = useState('pendiente')
  const id = (new Date()).getTime()



  const handleClick = () => {

    if (name === '') {
      alert('Complete todos los campos');
      return
    }

    const task = {
      name,
      description,
      category,
      priority: defaultPriority,
      state: defaultState,
      id
    }
    agregar(task)

    setName('')
    setDescription('')
    setCategory('frontend')
    setDefualtPriority('baja')
    setDefaultState('pendiente')
  }

  return (
    <div className="form">
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category">
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Base De Datos">Bases de datos</option>
          <option value="Testing">Testing</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Documentación">Documentación</option>
        </select>
        <select value={defaultState} onChange={(e) => setDefaultState(e.target.value)} className="state" onClick={(e) => e.stopPropagation()}>
          <option value="pendiente">Pendiente</option>
          <option value="progreso">En Progreso</option>
          <option value="finalizada">Finalizada</option>
        </select>
        <select
          value={defaultPriority}
          onChange={(e) => setDefualtPriority(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className={`priority ${defaultPriority}`}>
          <option value="baja">BAJA</option>
          <option value="media">MEDIA</option>
          <option value="alta">ALTA</option>
        </select>
        <FiTrash className="trash" />
      </div>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción..." onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}></textarea>
      <button onClick={handleClick} className="addTask" type="submit">Agregar Tarea</button>
    </div>
  )
}

export default Form
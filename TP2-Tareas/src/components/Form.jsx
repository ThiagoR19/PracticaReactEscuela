import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import './Form.css'

function Form({ addTask }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Frontend')
  const [defaultPriority, setDefualtPriority] = useState('BAJA')
  const [defaultState, setDefaultState] = useState('Pendiente')
  const id = (new Date()).getTime()

  const handleClick = (e) => {

    e.preventDefault()

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

    addTask(task)

    setName('')
    setDescription('')
    setCategory('Frontend')
    setDefualtPriority('BAJA')
    setDefaultState('Pendiente')
  }

  return (
    <form onSubmit={handleClick} className="form">
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nombre..." />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category">
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Base de datos">Base de datos</option>
          <option value="Testing">Testing</option>
          <option value="Seguridad">Seguridad</option>
          <option value="Documentación">Documentación</option>
        </select>
        <select value={defaultState} onChange={(e) => setDefaultState(e.target.value)} className="state">
          <option value="Pendiente">Pendiente</option>
          <option value="Proceso">En Proceso</option>
          <option value="Finalizada">Finalizada</option>
        </select>
        <select
          value={defaultPriority}
          onChange={(e) => setDefualtPriority(e.target.value)}
          className={`priority ${defaultPriority}`}>
          <option value="BAJA">BAJA</option>
          <option value="MEDIA">MEDIA</option>
          <option value="ALTA">ALTA</option>
        </select>
        <FiTrash className="trash" />
      </div>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción..." onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
      }}></textarea>
      <button onClick={handleClick} className="addTask" type="submit">Agregar Tarea</button>
    </form >
  )
}

export default Form
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import { useState } from 'react'

const personasDefault = [
  { documento: 1345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true, id: 1 },
  { documento: 1245678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false, id: 2 },
  { documento: 13457678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true, id: 3 },
  { documento: 1211345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true, id: 4 },
  { documento: 1232345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false, id: 5 },
  { documento: 1212312345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false, id: 6 },
  { documento: 123123345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true, id: 7 }
]

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  function guardar(persona) {
    const nuevasPersonas = [...personas]
    nuevasPersonas.push(persona)
    setPersonas(nuevasPersonas)
  }

  const eliminar = (persona_id) => {
    const nuevasPersonas = personas.filter((persona) => {
      return persona.id != persona_id
    })
    setPersonas(nuevasPersonas)
  }

  return (
    <div className="App">
      <h1>Componente App</h1>
      <div className="Contenedor">
        <Formulario guardar={guardar} />
        <Listado personas={personas} eliminar={(persona_id) => eliminar(persona_id)} />
      </div>
    </div>
  )
}
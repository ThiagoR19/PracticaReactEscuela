git initimport Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import { useState } from 'react'

const personasDefault = [
  { documento: 1345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true },
  { documento: 1245678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false },
  { documento: 13457678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true },
  { documento: 1211345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true },
  { documento: 1232345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false },
  { documento: 1212312345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: false },
  { documento: 123123345678, nombre: 'Thiago', apellido: 'Riffo', isAlumno: true }
]

export default function App() {
  const [personas, setPersonas] = useState(personasDefault)
  const guardar = (persona) => {
    const nuevasPersonas = [...personas]
    nuevasPersonas.push(persona)
    setPersonas(nuevasPersonas)
  }
  return (
    <div className="App">
      <h1>Componente App</h1>
      <div className="Contenedor">
        <Formulario guardar={guardar} />
        <Listado personas={personas} />
      </div>
    </div>
  )
}
import { Tarjeta } from "./Tarjeta.jsx"
import './Listado.css'
import { useEffect, useState } from "react"
import axios from "axios"

export default function Listado() {

  const [personas, setPersonas] = useState([])

  const actualizar = () => {
    const url = 'https://backend-septimos.ctpoba.edu.ar/api/personas'
    const config = { headers: { Authorization: 47958998 } }

    axios.get(url, config)
      .then((resp) => {
        setPersonas(resp.data.personas)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    actualizar()
  }, [])

  const eliminar = (persona_id) => {
    const url = `https://backend-septimos.ctpoba.edu.ar/api/personas/${persona_id}`
    const config = { headers: { Authorization: 47958998 } }
    axios.delete(url, config)
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="ListadoContenedor">
      <h1>Componente Listado</h1>
      <div className="Listado">
        {personas.map((persona, index) =>
          <Tarjeta
            key={index}
            documento={persona.documento}
            nombre={persona.nombre}
            apellido={persona.apellido}
            anio={persona.anio}
            division={persona.division}
            isAlumno={persona.isAlumno}
            eliminar={() => eliminar(persona.id)}
          />
        )}
      </div>
    </div>
  )
}

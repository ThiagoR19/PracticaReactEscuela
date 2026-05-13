import { Tarjeta } from "./Tarjeta.jsx"
import './Listado.css'

export default function Listado({ personas, eliminar }) {
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
            eliminar={() => eliminar(persona.id)} />
        )}
      </div>
    </div>
  )
}

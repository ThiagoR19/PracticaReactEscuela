import usePersona from '../hooks/usePersona'
import './Formulario.css'

export default function Formulario({ guardar }) {

  const [persona, setDatoPersona] = usePersona()

  const handleSubmit = (e) => {
    e.preventDefault()
    guardar(persona)
  }

  return (
    <div className="FormularioContenedor">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Documento" onChange={(e) => setDatoPersona('documento', e.target.value)} value={persona.documento} />
        <input type="text" placeholder="Nombre" onChange={(e) => setDatoPersona('nombre', e.target.value)} value={persona.nombre} />
        <input type="text" placeholder="Apellido" onChange={(e) => setDatoPersona('apellido', e.target.value)} value={persona.apellido} />
        <select onChange={(e) => setDatoPersona('rol', e.target.value)} value={persona.rol}>
          <option value="Docente">Docente</option>
          <option value="Alumno">Alumno</option>
        </select>
        <select onChange={(e) => setDatoPersona('anio', e.target.value)} value={persona.anio}>
          <option value="Año" disabled>Año</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <select onChange={(e) => setDatoPersona('division', e.target.value)} value={persona.division}>
          <option value="Division" disabled>Division</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <button type="Submit">Guardar</button>
      </form>
    </div>
  )
}
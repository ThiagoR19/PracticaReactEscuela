import usePersona from '../hooks/usePersona'
import axios from 'axios'
import './Formulario.css'

const url = 'https://backend-septimos.ctpoba.edu.ar/api/personas'
const config = {
  headers: { Authorization: 47958998 }
}

export default function Formulario() {

  const [persona, setDatoPersona] = usePersona()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post(url, persona, config)
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => {
        console.error(error)
      })

  }

  return (
    <div className="FormularioContenedor">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Documento" onChange={(e) => setDatoPersona('documento', e.target.value)} value={persona.documento} />
        <input type="text" placeholder="Nombre" onChange={(e) => setDatoPersona('nombres', e.target.value)} value={persona.nombre} />
        <input type="text" placeholder="Apellido" onChange={(e) => setDatoPersona('apellidos', e.target.value)} value={persona.apellido} />
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
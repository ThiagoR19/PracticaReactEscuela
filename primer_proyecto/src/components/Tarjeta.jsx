import './Tarjeta.css'

export function Tarjeta({ documento, nombre, apellido, isAlumno, anio, division, eliminar }) {
  return (
    <div className="Tarjeta" style={{
      backgroundColor: isAlumno ? 'green' : 'red'
    }}>
      <span className='eliminar' onClick={() => eliminar()}>X</span>
      <h2>Documento: {documento}</h2>
      <h3>{nombre} {apellido}</h3>
      <h3>{anio}{anio ? 'º' : ''}  {division}{division ? 'º' : ''} </h3>
    </div>
  )
}

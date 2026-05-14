import './FilterContainer.css'

function FilterContainer() {
  return (
    <section className='filterContainer'>
      <h2 className='categorias'>Categorias</h2>
      <div className='filters'>
        <button className="btn btn-border-reveal">Frontend</button>
        <button className="btn btn-border-reveal">Backend</button>
        <button className="btn btn-border-reveal">Bases de datos</button>
        <button className="btn btn-border-reveal">Testing</button>
        <button className="btn btn-border-reveal">Seguridad</button>
        <button className="btn btn-border-reveal">Documentación</button>
      </div>
    </section>
  )
}

export default FilterContainer
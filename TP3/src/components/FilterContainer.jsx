import './FilterContainer.css'

const categories = [
  'Todas',
  'Frontend',
  'Backend',
  'Base de datos',
  'Testing',
  'Seguridad',
  'Documentación'
]

function FilterContainer({ refreshTasks, setFilter }) {

  return (
    <section className='filterContainer'>
      <h2 className='categorias'>Categorias</h2>
      <div className='filters'>
        {categories.map((category) => <button key={category} onClick={() => { refreshTasks(category); setFilter(category); return }} className="btn btn-border-reveal">{category}</button>)}
      </div>
    </section>
  )
}

export default FilterContainer
import './Header.css'
import { Link } from 'wouter'


function Header() {
  return (
    <header>
      <h1>Esto es un header</h1>
      <nav>
        <Link href="/">Incio</Link>
        <Link href="/nueva">Formulario</Link>
        <Link href="/listado">Listado</Link>
      </nav>
    </header>
  )
}

export default Header
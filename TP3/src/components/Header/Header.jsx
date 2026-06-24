import { Link } from "wouter"

function Header() {
  return (
    <header>
      <Link href="/form">Agregár Tarea</Link>
      <Link href="/home">Inicio</Link>
    </header>
  )
}

export default Header
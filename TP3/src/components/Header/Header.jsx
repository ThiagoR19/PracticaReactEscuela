import { Link } from "wouter"

import './Header.css'

function Header() {
  return (
    <header>
      <Link className='links' href="/form">Agregár Tarea</Link>
      <Link className='links' href="/home">Inicio</Link>
    </header>
  )
}

export default Header
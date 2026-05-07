import { useState } from 'react'

export default function usePersona() {

  const [nombre, setNombre] = useState('')
  const [documento, setDocumento] = useState('')
  const [apellido, setApellido] = useState('')
  const [anio, setAnio] = useState('')
  const [division, setDivision] = useState('')
  const [rol, setRol] = useState('')

  const isAlumno = rol == 'Alumno'

  const cambiarValor = (campo, valor) => {

    const opciones = {
      "nombre": (valor) => setNombre(valor),
      "documento": (valor) => setDocumento(valor),
      "apellido": (valor) => setApellido(valor),
      "anio": (valor) => setAnio(valor),
      "division": (valor) => setDivision(valor),
      "rol": (valor) => setRol(valor),
    }

    opciones[campo](valor)

  }

  return [{
    nombre,
    documento,
    apellido,
    anio,
    division,
    rol,
    isAlumno,
  }, cambiarValor]

}

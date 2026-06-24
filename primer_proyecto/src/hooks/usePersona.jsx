import { useState } from 'react'

export default function usePersona() {

  const [nombres, setNombres] = useState('')
  const [documento, setDocumento] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [anio, setAnio] = useState(1)
  const [division, setDivision] = useState(1)
  const [rol, setRol] = useState('')

  const isAlumno = rol == 'Alumno'
  const id = (new Date()).getTime()

  const cambiarValor = (campo, valor) => {

    const opciones = {
      "nombres": (valor) => setNombres(valor),
      "documento": (valor) => setDocumento(valor),
      "apellidos": (valor) => setApellidos(valor),
      "anio": (valor) => setAnio(valor),
      "division": (valor) => setDivision(valor),
      "rol": (valor) => setRol(valor),
    }

    opciones[campo](valor)

  }

  return [{
    nombres,
    documento,
    apellidos,
    anio,
    division,
    rol,
    isAlumno,
    id
  }, cambiarValor]

}

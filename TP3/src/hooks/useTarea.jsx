import { useState } from 'react'

export default function useTarea() {

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('Frontend')
  const [prioridad, setPrioridad] = useState(1)
  const [estado, setEstado] = useState('pendiente')


  const cambiarValor = (campo, valor) => {

    const opciones = {
      "nombre": (valor) => setNombre(valor),
      "descripcion": (valor) => setDescripcion(valor),
      "categoria": (valor) => setCategoria(valor),
      "prioridad": (valor) => setPrioridad(valor),
      "estado": (valor) => setEstado(valor),
    }
    opciones[campo](valor)
  }

  return [{
    nombre,
    descripcion,
    prioridad,
    categoria,
    estado,
  }, cambiarValor]

}

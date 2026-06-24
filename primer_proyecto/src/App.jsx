import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import { Route, Router, Switch } from "wouter"
import Header from "./components/Header"

export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path={'/nueva'} >
            <Formulario />
          </Route>
          <Route path={'/listado'} >
            <Listado />
          </Route>
          <Route path={'/'} >
            <div>
              <h1>Inicio de la aplicación</h1>
            </div>
          </Route>
          <Route>
            <h2>Página no encontrada</h2>
          </Route>
        </Switch>

      </Router>
    </div>
  )
}


// <div className="Contenedor">
//           
//           
//         </div>
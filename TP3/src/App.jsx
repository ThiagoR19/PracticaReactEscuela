import { Route, Router, Switch } from 'wouter'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './Pages/Form/Form'
import NoEncontrado from './Pages/NoEncontrado/NoEncontrado'
import Listado from './Pages/Listado/Listado'
import Inicio from './Pages/Inicio/Inicio'

import './App.css'

export default function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/form"><Form /></Route>
          <Route path="/Listado"><Listado /></Route>
          <Route path="/inicio"><Inicio /></Route>
          <Route><NoEncontrado /></Route>
        </Switch>
        <Footer />
      </Router>
    </main >
  )
}


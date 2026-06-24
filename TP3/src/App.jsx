import { Route, Router, Switch } from 'wouter'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Form from './Pages/Form/Form'
import NoEncontrado from './Pages/NoEncontrado/NoEncontrado'
import Home from './Pages/Home/Home'

import './App.css'

export default function App() {
  return (
    <main>

      <Router>
        <Header />
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route element={<NoEncontrado />} />
        </Switch>
        <Footer />
      </Router>
    </main >
  )
}


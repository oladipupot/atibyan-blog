import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Signup from './pages/signup'
import Signin from './pages/Signin'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/dashboard' element={ <Dashboard /> } />
      <Route path='/project' element={ <Project /> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/signin' element={ <Signin /> } />
    </Routes>
    </BrowserRouter>
  )
}

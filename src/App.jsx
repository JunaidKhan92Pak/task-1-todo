
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>
    <Routes>
    <Route index element={<Home/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='*' element={<>404 page not found</>} />
    </Routes>
    </>
  )
}

export default App

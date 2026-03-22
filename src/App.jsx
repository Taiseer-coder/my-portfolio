import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Navbar from '../components/Navbar'
import PremiumServices from '../components/Services'
import Skills from '../components/Skills'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/services" element={<PremiumServices/>}/>
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App

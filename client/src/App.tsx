import './App.css'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='videogames'/>
        <Route path='videogame/:id' element/>
        <Route path=''/>
        <Route path=''/>
      </Routes>
    </>
  )
}

export default App

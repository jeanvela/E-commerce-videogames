import './App.css'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './views/Products'
import CardDetail from './components/cardDetail/CardDetail'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videogames' element={<Products/>}/>
        <Route path='/videogames/:id' element={<CardDetail/>}/>
        <Route path=''/>
        <Route path=''/>
      </Routes>
    </>
  )
}

export default App

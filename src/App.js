import React from 'react'
import "./App.css"
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import Home from './pages/Home'
import Video from './pages/Video'
import Upload from './pages/Upload'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/video/:id' element={<Video/>} />
            <Route path='/upload/:id' element={<Upload/>} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
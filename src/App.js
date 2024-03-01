import React from 'react'
import Navbar from './components/Navbar'
import TopGradientDesign from './components/design-bg/TopGradientDesign'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import About from './components/about/About'
import Home from './pages/Home'
import Department from './components/about/Department'
import { useState } from 'react'
import LucknowFc from './components/about/LucknowFc'
import Squad from './components/squad/Squad'
import Team from './components/squad/Team'
import Academy from './components/squad/Academy'
import LfcTv from './components/lfc-tv/LfcTv'
import Trainning from './components/lfc-tv/Trainning'
import Media from './components/lfc-tv/Media'
import Match from './components/lfc-tv/Match'
import Gallery from './components/lfc-tv/Gallery'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <TopGradientDesign />
      <div className='bg-container'>
        <div className='main-container'>
          <BrowserRouter>
            <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Routes>
              <Route path='/' element={<Home isModalOpen={isModalOpen} />}>
                <Route path='about' element={<About />} />
                <Route path='squad' element={<Squad />} />
                <Route path='lfc-tv' element={<LfcTv />} />
              </Route>
              <Route path='lucknow-fc' element={<LucknowFc />} />
              <Route path='department' element={<Department />} />
              <Route path='team' element={<Team />} />
              <Route path='academy' element={<Academy />} />
              <Route path='trainning' element={<Trainning />} />
              <Route path='media' element={<Media />} />
              <Route path='match' element={<Match />} />
              <Route path='gallery' element={<Gallery />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App

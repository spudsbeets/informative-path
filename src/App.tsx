import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import LandingPage from './components/landingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicPage from './components/musicPage'
import CodePage from './components/codePage'
import MePage from './components/mePage'
import LinksPage from './components/linksPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
    <>
    <Header />
    <LandingPage />
    <Footer />
    </>}>
    </Route>
    <Route path="/musicPage" element={<MusicPage />}></Route>
    <Route path="/codePage" element={<CodePage />}></Route>
    <Route path="/mePage" element={<MePage />}></Route>
    <Route path="/linksPage" element={<LinksPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

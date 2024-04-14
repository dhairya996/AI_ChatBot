import { Routes, Route } from 'react-router-dom' 
import './App.css'
import StartPage from './pages/StartPage'
import NavBar from './components/NavBar'
import ChatRoom from './pages/ChatRoom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/chat" element={<ChatRoom/>}/>
      </Routes>
    </>
  )
}

export default App

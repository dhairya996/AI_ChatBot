import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/chat');
  }
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-md">Use this AI-Powered chat-bot for any course related queries you may have.</p>
                    <button onClick={handleButtonClick} className="btn btn-primary">Chat With AI</button>
                </div>
            </div>
    </div>
  )
}

export default StartPage
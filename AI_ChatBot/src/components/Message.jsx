import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        {message.id === 2? 
            <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {message.name}
            </div>
            <div className="chat-bubble">{message.text}</div>
            </div>:
            <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="chat-header">
                {message.name}
            </div>
            <div className="chat-bubble"> {message.text} </div>
            </div>
        }
        
    </div>
  )
}

export default Message
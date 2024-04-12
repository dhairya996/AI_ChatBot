import { useState } from 'react';
import React from 'react'
import Message from './Message'

const ChatBox = () => {
    const [value, setValue] = useState("");
    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log(value)
        setValue("")
    }
    const messages = [
        {
            id: 1,
            text: "Hello There!",
            name: "User"
        },
        {
            id: 2,
            text: "Hi, How are you!!",
            name: "Chat Bot"
        },
        {
            id: 1,
            text: "How have you been lately?",
            name: "User"
        },
        {
            id: 2,
            text: "Oh you know, just the regular stuff.",
            name: "Chat Bot"
        }
    ]
  return (
    <>
        <div className='pb-44 pt-20 containerWrap'>
            {messages.map(message => (
                <Message key={message.id} message={message} />
            ))}
        </div>
        <div className='bg-gray-300 rounded-xl bottom-0 w-full py-10 shadow-lg'>
            <form onSubmit={handleSendMessage} className=' px-2 containerWrap p-4 flex'>
                <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-200 rounded-r-none" type="text" />
                <button type="submit" className='w-auto bg-blue-500 text-white rounded-r-xl px-5 text-md'> Send </button>
            </form>
        </div>
    </>
  )
}

export default ChatBox
import { useState, useEffect } from 'react';
import React from 'react'
import Message from './Message'
import NavBar from './NavBar';
import { useMutation } from 'react-query';

const ChatBox = () => {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!value.trim()) return; // Ignore empty messages
        
        // Push user message to messages array
        setMessages(messages => [...messages, { id: messages.length + 1, text: value, name: "User" }]);
        setValue("");
        setMessages(messages=> [...messages, { id: messages.length + 1, text: "", name: "Loading"}])
        
        // Make API call to Flask API
        try {
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question: value })
            });
            // console.log(response)
            const data = await response.json();
            // console.log(data["response"]["output_text"])
            let chatbot_reply = data["response"]["output_text"]

            setMessages(messages => {const newMessages = [...messages]; newMessages.pop(); return newMessages})
            setMessages(messages => [...messages, { id: messages.length + 1, text: chatbot_reply, name: "Chat Bot" }]);
        } catch (error) {
            console.error('Error:', error);
        }
        
        // Clear input field after sending message
    };

    const handleEndChat = () => {
        window.location.reload();
    };

  return (
    <>
        <NavBar/>
        {messages.length === 0 && (
            <div className='flex flex-col items-center justify-center h-[400px]'>
            <img className='rounded-xl mb-4' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png" alt="GFG Logo" height={60} width={60} />
            <h1 className='text-center'> Hello User, If you have any query regarding any course,</h1> 
            <h1 className='text-center'> ask the Chat-Bot </h1>
        </div>
        )}
        <div className='rounded-xl'>
            <div className='py-40 pt-20 containerWrap'>
                {messages.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
        </div>
        
        <div className='bg-gray-300 rounded-xl fixed bottom-0 left-0 right-0 z-50 shadow-lg mb-2'>
            <form onSubmit={handleSendMessage} className=' px-2 containerWrap p-4 flex'>
            {messages.length > 0 && (
                <button type="button" onClick={handleEndChat} className='bg-red-500 text-white rounded-xl px-5 mr-3 text-md'>End </button>
                )}
                <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-200 rounded-r-none text-black shadow-lg" type="text" />
                <button type="submit" className='w-auto bg-blue-500 text-white rounded-r-xl px-5 text-md'> Send </button>
                
            </form>
        </div>
    </>
  )
}

export default ChatBox
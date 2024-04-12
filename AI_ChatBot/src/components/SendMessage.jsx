import React, { useState } from 'react'

const SendMessage = () => {

    const [value, setValue] = useState("");
    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log(value)
        setValue("")
    }

  return (
    <div className='bg-gray-300 rounded-xl bottom-0 w-full py-10 shadow-lg'>
        <form onSubmit={handleSendMessage} className=' px-2 containerWrap p-4 flex'>
            <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-200 rounded-r-none" type="text" />
            <button type="submit" className='w-auto bg-blue-500 text-white rounded-r-xl px-5 text-md'> Send </button>
        </form>
    </div>
  )
}

export default SendMessage
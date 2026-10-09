import React from 'react'
import { useState } from 'react'
import axios from "axios"

const App = () => {
  const [link, setLink] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/url/shorten`,{link}) 
      console.log(res)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className='bg-black text-white min-h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit}className='flex flex-col gap-2'>
        <div>
          Enter URL: </div>
        <input type="url" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="https://example.com" required className='bg-gray-300 text-gray-700'/>
        <div>
          <button type="submit" className='bg-gray-600 p-2'>Shorten</button>
        </div>
      </form>
    </div>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {

  return (
    <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
      <h1 className='text-2xl pb-10'>Login/Register System!</h1>
      <Form/>
    </div>
  )
}

export default App

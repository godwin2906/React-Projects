import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

 
return (
    <>
     <h1 className='text-3xl bg-green-500  p-3 rounded-md'>vite with tailwind</h1>
     <Card/>
     <Card />
    </>
  )
}

export default App

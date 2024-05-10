import React from 'react'
import { TiThMenu } from "react-icons/ti"

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-transparent flex items-center justify-between px-8'>
      <p>Logo</p>
      <h1 className='font-extrabold text-4xl'>Senegalese Music</h1>
      <TiThMenu size={32} />
    </div>
  )
}

export default Navbar

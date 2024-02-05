import React from 'react'
import Logo from './Logo'
import Nav from '../Nav'

const Header = () => {
  
  return (
    <div className='bg-sky-300 sticky top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between p-6'>
      <Logo />
      <Nav />
    </div>
  )
}

export default Header

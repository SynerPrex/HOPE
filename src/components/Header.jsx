import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-400 flex flex-row items-center justify-center bg-gray-900 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="/logo.svg" width="30" alt="" />
        <span className="ml-3 text-xl">HOPE</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href='#' className="mr-5 cursor-pointer hover:text-white">Home</a>
        <a href='https://synerprex.freewebhostmost.com/#about' className="mr-5 cursor-pointer hover:text-white">About Us</a>
        <a href='https://synerprex.freewebhostmost.com/#contact' className="mr-5 cursor-pointer hover:text-white">Contact Us</a>
      </nav>
      <a href='https://synerprex.freewebhostmost.com/' className="inline-flex items-center cursor-pointer bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Visit SynerPrex
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </header>
  
  )
}

export default Header
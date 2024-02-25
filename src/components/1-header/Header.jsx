import React, { useState } from 'react';

import './header.css'

function Header() {

  const [showModal,setShowModal] = useState(false);

  return (
    <header>

      <button className='menu icon-menu' onClick={() => {setShowModal(true)}}></button>
      <div/>

      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className='mode'>
        <span className='icon-moon-o'></span>
      </button>

      {showModal && (
        <div className='parent'>
        <div className="modal">
          <ul>
          <li><button className='icon-close' onClick={() => {setShowModal(false)}} /></li>
          <li><a href="">About</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Speaking</a></li>
          <li><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      )}

    </header>
  )
}

export default Header;
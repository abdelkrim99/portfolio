import React, { useState } from 'react';

import './header.css'

function Header() {

  const [showModal,setShowModal] = useState(false);

  return (
    <header>

      <button className='menu' onClick={() => {setShowModal(true)}}>show modal</button>
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

      <button>
        light
      </button>

      {showModal && (
        <div className='parent'>
        <div className="modal">
          <ul>
          <li><button onClick={() => {setShowModal(false)}}>close</button></li>
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
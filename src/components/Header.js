import React from 'react'
import './Header.css'

export default function Header() {
  return (
      <div>
          
          <header className='header'>

              <img src="./images/troll-face.png" alt=""
                  className='header--image' />
              
              <h2 className='header--title'>Meme Generator</h2>
              <p className='header--project'>React Course - Project 3</p>
              
          </header>
    </div>
  )
}

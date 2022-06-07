import React from 'react'
import './Meme.css'

export default function Meme() {
  return (
      <main>
          
          <section className='form'>

              <input type="text"
                  placeholder='Top text'  className='form--input'/>
              
              <input type="text"
                placeholder='Bottom text' className='form--input'/>

              <button className='btn'> Click here for new image</button>
          </section>
    </main>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div id="container">
      <header>
        <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
        <button id="cartBtn">
          <span id="cartNumber"></span>
          <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
        </button>
        <section id="cart">
          <h2>Din handlevogn</h2>
          <ul id="cartList">
          </ul>
        </section>
      </header>
      <nav>
        <ul>
          <li><a href="#">City</a></li>
          <li><a href="#">Ninjago</a></li>
          <li><a href="#">Castles and Knights</a></li>
          <li><a href="#">Marine and Pirates</a></li>
          <li><a href="#">Movie Characters</a></li>
        </ul>
      </nav>
      <main>
      </main>
    </div>
  )
}

export default App

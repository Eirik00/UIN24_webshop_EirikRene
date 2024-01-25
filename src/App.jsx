import { useState } from 'react'
import './App.css'
import { products } from './assets/legodudes'
import Title from './components/Title'
import ProductCard from './components/ProductCard'

function App() {

  function Header(){
    return(
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
    )
  }

  

  return (
    <div id="container">
      <Header>
        
      </Header>
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
        <Title/>
        {products.map(product => <ProductCard key={product.prodid} p={product}/>)}
      </main>
    </div>
  )
}

export default App

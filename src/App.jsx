import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentPage from './components/ContentPage'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("Ninjago")
  const [cart, setCart] = useState([])

  return (
      
    <Layout amount={amount} cart={cart} setCart={setCart} category={category}>
      <Routes>
          <Route path="/home" element={<Home />} />
      </Routes>
      <ContentPage setAmount={setAmount} category={category} setCart={setCart} cart={cart}/>
    </Layout>
  )

}

export default App

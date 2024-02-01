import Title from './Title'
import ProductCard from './ProductCard'
import {products} from '../assets/legoduds'
export default function ContentPage({ setAmount, category, setCart, cart}){
    return(
        <main>
          <Title category={category} />
          {products.map(product => 
          <ProductCard 
          setCart={setCart}
          prodid={product.prodid}
          cart={cart}
          key={product.prodid} 
          category={product.category} 
          title={product.title} 
          img={product.imagefile} 
          price={product.price}
          setAmount={setAmount}
          /> )}
        </main>
    )
}
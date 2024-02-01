export default function Cart({toggle, cart, setCart}){

function CartProduct({product, setCart, prodid}){
    const removeItem = () => {
        setCart(prevCart => prevCart.map(item => item.prodid === prodid  ? {...item, quantity: item.quantity - 1} : item) 
        .filter(item => item.quantity > 0))
    }
    return(    
    <li>
        <span className="title">{product.title}</span>
        <span className="price">{product.price},-</span>
        <span className="quantity">x{product.quantity}</span>
        <span className="functions">
            <button onClick={removeItem}>X</button>
        </span>
    </li>
    )
}

    return(
        <section id="cart" className={toggle ? "show" : null}>
                <h2>Din handlevogn</h2>
                <ul id="cartlist">
                    {cart.map(product => <CartProduct key={product.prodid} prodid={product.prodid} product={product} setCart={setCart}/>)}
                </ul>
            </section>
    )
}
const mainPage = document.getElementsByTagName("main")[0];
const cartDocument = document.getElementById("cartList");
const cartNumb = document.getElementById("cartNumber");
const cartBtn = document.getElementById("cartBtn");
const cartDoc = document.getElementById("cart");
/*for(let i=0;i<products.length;i++){
    let prod = products[i];
    let newElement = document.createElement("article");
    newElement.id = prod.prodid;

    let image = document.createElement("img");
    image.src = "website_images/PROD_"+prod.imagefile;
    image.alt = prod.title;
    newElement.appendChild(image);

    let atag = document.createElement("a");
    atag.href = "#";
    atag.innerHTML = prod.category;
    newElement.appendChild(atag);

    let title = document.createElement("h3");
    title.innerHTML = prod.title;
    newElement.appendChild(title);

    let span = document.createElement("span")
    span.innerHTML = "Kr. "+prod.price;
    newElement.appendChild(span);

    let button = document.createElement("button");
    button.innerHTML = "Legg i handlekurv";
    newElement.appendChild(button);

    mainPage.appendChild(newElement);
}*/
let productsHTML = "<h2>Ninjago</h2>";

products.map(product => productsHTML += `
<article>
    <img src="website_images/PROD_${product.imagefile}" alt="${product.title}"/>
    <a href="#">${product.category}</a>
    <h3>${product.title}</h3> <!-- H taggen gir prioritet i seo optimalisering -->
    <span>Kr. ${product.price}</span>
    <button onclick="addToCart(${product.prodid})">Legg i handlekurv</button>
</article>`);
mainPage.innerHTML = productsHTML;

//Handlevogn funksjonalitet
function addToCart(proId){
    let exist = cart.findIndex(p => proId === p.product);
    console.log(exist);

    if(exist === -1){
        cart.push({product: proId, quantity: 1});
    }else{
        cart[exist].quantity++;
    }
    updateCartDisplay();
}

function removeFromCart(index){

    if(cart[index].quantity > 1){
        cart[index].quantity--;
    }else{
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay(){
    let cartHTML = "";
    let cartNumber = 0;
    if(cart.length === 0){
        cartHTML += "<li>Du har ingen varer i handlekurven</li>";
    }

    cart.map((prod, index) => {
        let filterProduct = products.filter(filterprod => prod.product === filterprod.prodid)[0];
        cartHTML += `<li>
        <span class="title">${filterProduct.title}</span>
        <span class="price">${filterProduct.price}</span>
        <span class="quantity">x${prod.quantity}</span>
        <span class="functions">
            <button onclick="removeFromCart(${index})">X</button>
        </span>
        </li>
    `});
    cartDocument.innerHTML = cartHTML;
    cart.map(p => cartNumber += p.quantity);
    cartNumb.innerHTML = cartNumber;
}
updateCartDisplay();

cartBtn.addEventListener("click", ()=>{
    cartDoc.classList.toggle("show");
});
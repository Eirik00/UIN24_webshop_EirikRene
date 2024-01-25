export default function ProductCard({p}) {
    return(
      <article>
        <img src={"website_images/PROD_"+p.imagefile} alt={p.title}/>
        <a href="#">{p.category}</a>
        <h3>{p.title}</h3>
        <span>Kr. {p.price}</span>
        <button onClick={() => console.log("Du har lagt vare til handlekurv")}>Legg i handlekurv</button>
      </article>
    );
  }
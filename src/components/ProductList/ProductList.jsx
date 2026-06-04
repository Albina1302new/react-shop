import ProductItem from "../ProductItem/ProductItem"
import styles from "./ProductList.module.css"
import { useState } from "react"


function ProductList ({ products }){

    const [selectedCategory,setSelectedCategory] = useState("all")
    const categories = [
        {
            id:"all",
            label:"Alle",
        },
        {
            id:"bags",
            label:"Tasker",
        },
        {
            id:"belts",
            label:"Bælter",
        },
        {
            id:"shoes",
            label:"Sko",
        }
    ]

    const filteredProducts = products.filter(p => {
        if(selectedCategory == "all") return true
        return p.category == selectedCategory 
    })


    return (
      <>
        <div className={styles.buttons}>
          {categories.map((BTN) => (
            <button
              key={BTN.id}
              className={styles.btn}
              onClick={() => setSelectedCategory(BTN.id)}
            >
              {BTN.label}{" "}
            </button>
          ))}
        </div>

        <section className={styles.container}>
          {filteredProducts.map((p) => (
            <ProductItem
              key={p.id}
              img={p.src}
              title={p.title}
              price={p.price}
              brand={p.brand}
              imgHover={p.srcHover}
            />
          ))}
        </section>
      </>
    );
}

export default ProductList
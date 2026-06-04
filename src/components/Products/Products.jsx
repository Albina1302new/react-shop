
import ProductList from "../ProductList/ProductList";
import styles from "./Products.module.css"





function Products ({products}) {

    


    return (
      <section id="products">
        <h2 className={styles.productsTitle}>Alle Produkter</h2>
       
          
       
        <ProductList products={products} />
      </section>
    );
}

export default Products
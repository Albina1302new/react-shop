import styles from "./RecomendedProducts.module.css";
import ProductItem from "../ProductItem/ProductItem";

function RecomendedProducts({ products }) {
const filteredProducts = products.filter((p) => p.recommended == true);

  

  return (
    <section id="recommended" className={styles.recomendedContainer}>
      <h2 className={styles.recomendedTitle}>Vi Anbefaler</h2>
      <div className={styles.productsGrid}>
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
        </div>
    </section>
  );
}

export default RecomendedProducts;

import styles from "./GruopOfProducts.module.css"

function GruopOfProducts({groupOfProducts}) {

    return (
      <section  id="grupper" className={styles.gruopOfProducts}>
        <h2 className={styles.groupTitle}>Vores Tre Produktgrupper</h2>
        {groupOfProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.iconSrc}
              alt={product.title}
              className={styles.icon}
            />
            <div className={styles.content}>
                <h3>{product.title}</h3>
    
                <p>{product.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
}


export default GruopOfProducts
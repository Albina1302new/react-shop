import styles from "./Gallery.module.css"

function Gallery ({galleryImages}) {
    return(
    <section className={styles.galleryGrid}>
      {galleryImages.map((img) => (
        <img key={img.id} src={img.src} alt={img.altText} />
      ))}
    </section>
     )
    
}

export default Gallery
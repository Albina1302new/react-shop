import styles from "./ProductItem.module.css"

import { useState } from "react"

function ProductItem ({img,title, brand, price, imgHover}){
    const [hover, setHover] = useState(false)


    return(
        <div className={styles.item}>
            <img onMouseOver={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
             src={hover ? imgHover : img} alt={title} />
            <p>{title}</p>
            <p>{brand}</p>
            <p>{price}</p>
        </div>
    )


}

export default ProductItem



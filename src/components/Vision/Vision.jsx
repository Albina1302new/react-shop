import { vision } from "../../data/vision"
import styles from "./Vision.module.css"
import { useState } from "react";

function Vision () {
   const [isExpanded, setIsExpanded] = useState(false)
   function toggleExpanded() {
    setIsExpanded(!isExpanded)

   }

    return (
      <section id="vision" className={styles.container}>
            <h2 className={styles.heading}>{vision.heading}</h2>
            <p>{
                
                isExpanded ? vision.description : vision.description.substring(0,500) + "..."
                }
                
            </p>
            <button onClick={toggleExpanded} className={styles.btn}>{isExpanded ? "Læs mindre" : "Læs mere"}</button>
       
      </section>
    );
}


export default Vision
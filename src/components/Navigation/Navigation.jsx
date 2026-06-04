import styles from "./Navigation.module.css"
import { FaShop } from "react-icons/fa6";

function Navigation (){
    return (
      <nav className={styles.navigation}>
        <a className={styles.logo} href="./index.html">
          <FaShop className={styles.shopIcon}/>
          NORDIC STYLE
        </a>
        <ul className={styles.navList}>
          <li className={styles.navLinks}>
            <a href="#grupper">Vores Productgrupper</a>
          </li>
          <li className={styles.navLinks}>
            <a href="#recomanded">Vi Anbefaler</a>
          </li>
          <li className={styles.navLinks}>
            <a href="#products">Alle Producter</a>
          </li>
          <li className={styles.navLinks}>
            <a href="#vision">Vision</a>
          </li>
        </ul>
      </nav>
    );
}


export default Navigation
import styles from 
'./TopLine.module.css'
import { FaTruck } from "react-icons/fa";

function TopLine(){
    const time = new Date().getHours();
    let timeGreeding;
    if (time < 14) {
      timeGreeding = "dag";
    }  else {
      timeGreeding = "morgen";
    }
    
    return (
      <div className={styles.topLine}>
        <p>Bestiller du nu, vil din ordre blive sendt i {timeGreeding}</p>
        <FaTruck className={styles.truck}/>
      </div>
    );

}



export default TopLine
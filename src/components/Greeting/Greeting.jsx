import styles from "./Greeting.module.css"

import { RiHand } from "react-icons/ri";

function Greeting({firstName}){


    const time = new Date().getHours()
    let timeGreeding;
    if(time < 12){
        timeGreeding = 'Godmorgen,'
    }else if (time >= 12 && time < 18 ){
        timeGreeding = 'Goddag,'
    }else{
        timeGreeding = 'Godaften,'
    }
        

    return (
      <>
        <h1 className={styles.heroText}>
          {timeGreeding} {firstName}
          
          <RiHand className={styles.hand}/>
        </h1>
      </>
    );
}

export default Greeting
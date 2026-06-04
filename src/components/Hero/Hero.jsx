import Greeting from "../Greeting/Greeting";
import styles from "./Hero.module.css"

function Hero() {
    return (
      <header className={styles.header}>
        <img
          className={styles.heroImg}
          src="./assets/images/hero_img.jpg"
          alt="hero image"
        />
        <Greeting firstName={'Albina'}/>
       
      </header>
    );
}

export default Hero
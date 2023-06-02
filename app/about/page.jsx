import Leader from 'public/Leader.png'
import Faf from 'public/Faf.jpg'
import Sniper from 'public/Snipper.jpg'
import Image from "next/image"

import styles from '../../styles/aboutus.module.css'
const About = () => {
  return (
    <>
      <div class={styles.about_section}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
      </div>

      <h2 className={styles.title}>Our Team</h2>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.card}>
            <Image height={100} width={100} src={Leader} alt="Jane" />
            <div class={styles.container}>
              <h2>Jane Doe</h2>
              <p class={styles.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>
        <div class={styles.column}>
          <div class={styles.card}>
            <Image height={100} width={100} src={Leader} alt="Jane" />
            <div class={styles.container}>
              <h2>Jane Doe</h2>
              <p class={styles.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>
        <div class={styles.column}>
          <div class={styles.card}>
            <Image height={100} width={100} src={Leader} alt="Jane" />
            <div class={styles.container}>
              <h2>Jane Doe</h2>
              <p class={styles.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>        <div class={styles.column}>
          <div class={styles.card}>
            <Image height={100} width={100} src={Leader} alt="Jane" />
            <div class={styles.container}>
              <h2>Jane Doe</h2>
              <p class={styles.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.card} >
            <Image width={100} height={100} src={Sniper} alt="Mike" />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.card} >
            <Image height={100} width={100} src={Faf} alt="John" />
            <div class={styles.container}>
              <h2>John Doe</h2>
              <p class={styles.title}>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p><button class={styles.button}>Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
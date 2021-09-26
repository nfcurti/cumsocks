import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Countdown from 'react-countdown';

export default function Home() {
  const [userAddress, setUserAddress] = useState('')
    const Completionist = () => <span className={styles.countdown}>Minting is live!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <p className={styles.count_to_launch}>Countdown: {days} days {hours} hs {minutes} min {seconds} sec to launch</p>
      }
    }
  return (
    <div className={styles.container}>
      <Head>
        <title>Cumsocks</title>
        <meta name="description" content="10,000 Cumsocks, right from your bedroom" />
        <link rel="icon" href="/MINT BUTTON.gif" />
      </Head>
      <nav className={styles.navbar}>
        <img className={styles.navlogo} src='/TEXT LOGO.png'/>
        <ul className={styles.navul}>
          <li><a href='#mint'><img className={styles.nav_item} src='/MINT.png'/></a></li>
          <li><a href='#about'><img className={styles.nav_item} src='/ABOUT.png'/></a></li>
          <li><a href='#rarities'><img className={styles.nav_item} src='/RARITIES.png'/></a></li>
        
        </ul>
      </nav>

      <Countdown  date={1632984821000} renderer={renderer}/>
      <main id='mint' className={styles.main}>
        <div id='mint' className={styles.mint} >
          <img className={styles.mint_gif} src='/MINT BUTTON.gif'/>
          <button className={styles.con_button} ><img src='/mm.png'/>Connect</button>
        </div>
      </main>
      <main id='about' className={styles.about}>
          <p className={styles.count_to_launch}>ABOUT</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo eu nisl at lobortis. Ut elit nisl, volutpat non risus sit amet, tincidunt consectetur leo. Praesent scelerisque venenatis euismod. Maecenas sit amet elementum nisi, ut bibendum neque. Integer quis rhoncus eros, at porttitor erat. Fusce quis vulputate diam. Morbi at purus condimentum, sodales nulla in, vulputate mauris. Nulla placerat ante est, at hendrerit metus tempus in.</p>
          <div className={styles.rarities_list}>
            <div className={styles.rarities_item}>
           
              <img src='/MINT BUTTON.gif'/>
            </div>
            <div className={styles.rarities_item}>
             
              <img src='/MINT BUTTON.gif'/>
            </div>
            <div className={styles.rarities_item}>
           
              <img src='/MINT BUTTON.gif'/>
            </div>
          </div>
          <br/><br/><br/>
      </main>

        <div id='hero5' className={styles.hero5}>
          <a href='https://discord.gg'><img  src='/Trazado 47.svg'/></a>
          <a href='https://twitter.com/'><img  src='/Trazado 48.svg'/></a>
          <img src='/Grupo 60.svg'/>
        </div>
      <main id='rarities' className={styles.rarities}>
          <p className={styles.count_to_launch}>RARITIES</p>
          <p>There are 3 traits: background, cum and socks. Each trait is also divided in up to 5 tiers (1 being the rarest one)</p>
          <div className={styles.rarities_list}>
            <div className={styles.rarities_item}>
              <p>Background</p>
              <img src='/bgrarity.png'/>
            </div>
            <div className={styles.rarities_item}>
              <p>Cum</p>
              <img src='/cumrarity.png'/>
            </div>
            <div className={styles.rarities_item}>
              <p>Socks</p>
              <img src='/sockrarity.png'/>
            </div>
          </div>
      </main>

    </div>
  )
}

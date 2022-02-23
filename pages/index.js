import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <Image
        alt='Colton'
        src='/portrait.jpg'
        width='300px'
        height='300px'
        quality={100}
        className={styles.portrait}
      />
      <h1>COLTON SWEENEY</h1>
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</blockquote>
    </div>
  )
}

import { useState } from 'react'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { stack as Menu } from 'react-burger-menu'
import styles from '../styles/sidebar.module.css'

export default function Sidebar() {
    let [active, setActive] = useState(false)

    let menuStyles = {
        bmBurgerButton: {
            display: 'flex',
            position: 'fixed',
            left: '36px',
            top: '36px',
            height: '49px',
            width: '49px'
        },
        bmBurgerBars: {
            backgroundColor: '#333'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
    }

    return (
        <>
            <div className={styles.sidebar}>
                <ul className={styles.navigation}>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li><Link href="/portfolio">PORTFOLIO</Link></li>
                    <li><a href="https://myweb287blog.wordpress.com">BLOG</a></li>
                    <li><Link href="/contact">CONTACT</Link></li>
                </ul>
                <ul className={styles.social}>
                    <li><SocialIcon url="https://github.com/pizdetz" bgColor='#323338' /></li>
                    <li><SocialIcon url="https://twitter.com/coltonsdev" bgColor='#323338' /></li>
                    <li><SocialIcon url="https://www.linkedin.com/in/colton-sweeney" bgColor='#323338' /></li>
                    <li><SocialIcon url="https://medium.com/" bgColor='#323338' /></li>
                </ul>
            </div>
        </>
    )
}
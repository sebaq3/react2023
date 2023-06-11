import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="peliculas">Peliculas</a></li>
        <li><a href="series">Series</a></li>
        <li><a href="Noticias">Noticias</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
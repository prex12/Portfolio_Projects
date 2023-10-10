import React from 'react'
import style from '../css/header.module.css'

function Header() {
  return (
    <nav className={`${style.nav}`}>
        <a href="../public/index.html">Keep Tabs</a>
        <a href="../public/index.html">create Field</a>
    </nav>
  )
}

export default Header
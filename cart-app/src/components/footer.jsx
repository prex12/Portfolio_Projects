import React from 'react'
import './styles/footer.css'

const thisYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
        copyright {thisYear};
    </footer>
  )
}

export default Footer
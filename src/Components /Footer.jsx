import React from 'react'

const date = new Date(); 

const Footer = () => {
  return (
    <footer>
      Created by Ortal Wikoff {date.getFullYear()}
    </footer>
  )
}

export default Footer
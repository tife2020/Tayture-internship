import React from 'react'

function Header({title,description}) {
  return (
    <div>
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Header
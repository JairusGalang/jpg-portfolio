import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="inline-block px-4 py-2 rounded-full bg-dirtyPinkTransparent text-black hover:bg-dirtyPink font-medium transition-colors duration-300"
    >
      {text}
    </Link>
  )
}

export default Button
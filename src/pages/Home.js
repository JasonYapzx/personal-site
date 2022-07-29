import React from 'react'
import { useState } from 'react'

/* function to check if mouse is hovering over button */
function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}

const Home = () => {

  return (
    <>
      <h1>
        Hello and welcome to my site!
      </h1>
    </>
  )
}

export default Home;
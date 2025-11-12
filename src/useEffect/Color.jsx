import React, { useState } from 'react'

const Color = () => {
  // store multiple colors
  const [colors, setColors] = useState(["white"])
  const [index, setIndex] = useState(0)

  // generate random color and add to array
  const handleClick = () => {
    const randomColor ="#" + Math.floor(Math.random() * 16777215).toString(16)
    setColors([...colors, randomColor]) // add new color
    setIndex(colors.length) // move to the new one
  }

  return (
    <>
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: colors[index],
          marginBottom: "20px",
        }}
      ></div>
      <h2>{colors[index]}</h2>

      <button
        onClick={() =>
          setIndex((index - 1 + colors.length) % colors.length)
        }
      >
        Previous
      </button>

      <button
        style={{ height: "100px", width: "100px" }}
        onClick={handleClick}
      >
        Random
      </button>

      <button
        onClick={() => setIndex((index + 1) % colors.length)}
      >
        Next
      </button>
    </>
  )
}

export default Color

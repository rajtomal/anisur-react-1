import React from 'react'

const Child = (props) => {
    const data = "I am From Child Data."
    props.onChild(data)
  return (
    <div>
        <h2>Child To Parent Data pass</h2>
        <p>{props.data}</p>
    </div>
  )
}

export default Child;


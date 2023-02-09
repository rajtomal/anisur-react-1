import React, { useState } from 'react'

const FAQ = ({id, title, desc}) => {

        const [toggle, setToggle] = useState(false);

  return (
    <div>
        <h2>{title}</h2>
        <button onClick={() => {setToggle(!toggle)}}>{toggle ? '-' : '+'}</button>
        {toggle && <p>{desc}</p>}
    </div>
  )
}

export default FAQ
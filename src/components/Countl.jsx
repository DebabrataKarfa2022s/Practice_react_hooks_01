import React, { memo, useRef } from 'react'

const Countl = ({bioData}) => {
    const count = useRef(1)
  return (
    <div>
      <h1>my name is karfa from mednipur</h1>
      <p>this componets render {count.current++} times</p>

<p>my age is : {bioData.age}</p>
    </div>
  )
}

export default memo( Countl);

import React from 'react'

export default function LvsFuncComp1(props) {
  return (
    <div>
        <h2>Props is object</h2>
        <p><b>Info</b></p>
        <p>Fullname: {props.renderInfo.fullname}</p>
        <p>Age: {props.renderInfo.age}</p>
        <p>Phone: {props.renderInfo.phone}</p>
    </div>
  )
}

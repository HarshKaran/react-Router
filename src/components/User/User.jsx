import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div style={{fontSize:"25px" , fontWeight:"500" , background:"magenta" }}>User : {userid}</div>
  )
}

export default User
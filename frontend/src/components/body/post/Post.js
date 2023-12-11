import React, { useEffect } from 'react'
import axios from "axios"

function Post() {

useEffect(() => {
    axios.post("http://localhost:5000/nactiprispevky")
        .then(res => console.log(res))
        .catch(err => console.log(err))
})
    
  return (
    <div>Post</div>
  )
}

export default Post
import React from 'react'

function LogRegButton(props){
    console.log(props.loggedIn);
  return (
    <button>
        {props.loggedIn}
    </button>
  )
}

export default LogRegButton
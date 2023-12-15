import React, { useEffect, useState } from 'react'

function Post(props) {
  const [idx, setIdx] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    setIdx(props.i)
    setData(props.data)
  }, [props.i, props.data, data, idx])

  return (<>
    <h3>{data?.username}</h3>
    <p>{idx}</p>
    <p>{data?.text}</p>
    <p>{data?.created_on}</p>
  </>
  )
}

export default Post
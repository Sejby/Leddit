import React from 'react'

function LoggedInBanner() {
  return (
    <div id='banner'>
        <textarea type="text" placeholder='Co chcete inzerovat?' id='banner-text' maxLength={150} cols={50}/>
        <button type='submit' name='btn-banner' className='btn btn-primary'>Odeslat</button>
    </div>
  )
}

export default LoggedInBanner
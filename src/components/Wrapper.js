import React from 'react'

function Wrapper({children}) {
  return (
    <div className='position-absolute w-100'>
      {children}
    </div>
  )
}

export default Wrapper

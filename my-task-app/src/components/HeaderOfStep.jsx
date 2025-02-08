import React from 'react'

const HeaderOfStep = ({title,description}) => {
  return (
    <div>
        <h1 className='header-text'>
            {title}
        </h1>
        <p className='body-text'>{description}</p></div>

  )
}

export default HeaderOfStep
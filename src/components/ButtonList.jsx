import React from 'react'
import Button from './Button'

const list = ['All', "Live", "Soccer", "Songs", "Gaming", "Cricket", "News", "Cooking", "SMW", "Valentines", "React", "Javascript", "DSA"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item) => (<Button key={item} name={item} />))}
      
    </div>
  )
}

export default ButtonList
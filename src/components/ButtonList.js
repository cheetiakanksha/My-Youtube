import React from 'react'
import Button from './Button'

const ButtonList = () => {
  
  return (
    <div className='flex '>
      <Button name="All"/>
      <Button name="cooking"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="songs"/>
      <Button name="movies"/>
    </div>
  )
}

export default ButtonList

import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow p-2'>
        <img className="h-8"alt="user" src="https://static.thenounproject.com/png/642902-200.png"></img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage

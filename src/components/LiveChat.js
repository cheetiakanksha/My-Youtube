import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { RandomNameGenerate,makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages= useSelector((store)=>store.chat.message)
    const [liveMessage,setLiveMessage]=useState("");
    useEffect(()=>{
        const i= setInterval(()=>{
            dispatch(addMessage({name:RandomNameGenerate(),message:makeRandomMessage(15) }))
        },1500);
        return ()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className=' w-full h-[560px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
        <div>
        <h1 className='font-bold pb-2'>Live Chat</h1>
        {chatMessages.map((c,index)=><ChatMessage key={index}name={c.name} message={c.message}/>)}
        </div>
        
    </div>

    <div className='p-2'>
       <form className='w-full, p-2,m-2 ml-2  flex  rounded-lg' onSubmit={(e)=>{e.preventDefault(); dispatch(addMessage({name:"akanksha",message:liveMessage}));setLiveMessage("");}}>
        <input className="w-96 p-2 border border-gray-400 rounded-xl" type='text' value={setLiveMessage} onChange={(e)=>{setLiveMessage(e.target.value);}}></input>
        <button className='px-4 mx-2 bg-red-400 rounded-lg'>send</button>
    </form>
    </div>
    
    </>
   
  )
}

export default LiveChat

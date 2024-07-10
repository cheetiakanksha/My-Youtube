import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col'>
        <div className='px-5 flex w-full '>
            <div className='flex-grow'>
            <iframe width="950" height="600" 
            src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className='flex-grow ml-4 '>
                <LiveChat/>
            </div>
            
        </div>
        <div>
            <CommentsContainer/>
        </div>
    </div>
    
  )
}

export default WatchPage

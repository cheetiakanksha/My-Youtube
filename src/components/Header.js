import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { json } from 'react-router-dom'
import { cacheResults } from '../utils/searchSlice'

const Header = () => {
    const dispatch =useDispatch()
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions, setSuggestions]=useState([]);
    const [showSuggestions, setShowSuggestions]=useState(false);
    const searchCache=useSelector((store)=>store.search)
    useEffect(()=>{
        console.log(searchQuery);
       const timer=setTimeout(()=> {;
        //make an api call after every key press but do debouncing 
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }else{
            getSearchSuggestions()
        }
       },200)
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);

    const getSearchSuggestions=async()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery) ;
        const json=await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResults({[searchQuery]:json[1],}));
    }
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow'>
        <div className='flex col-span-1'>
            <img onClick={()=>toggleMenuHandler()}className="h-8 cursor-pointer"alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png" />
            <img className='h-8 w-12 mx-2' alt="yt logo" src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" />
        </div>
        <div className='col-span-10 px-16 '>
            <div>
            <input  className=" px-5 w-1/2 border border-gray-400 rounded-l-full"type="text" onChange={(e)=>setSearchQuery(e.target.value)}onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} ></input>
            <button className='border border-gray-400  px-5 bg-gray-100 rounded-r-full'>search</button>
            </div>
           {showSuggestions && <div className='absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
                {suggestions.map((s)=>(<li key={s} className='shadow-sm  py-2 px-3 hover:bg-gray-100'>{s}</li>
))}
            </ul>
        </div>}
        </div>

        <div className='col-span-1'>
            <img className="h-8"alt="user" src="https://static.thenounproject.com/png/642902-200.png"></img>
        </div>
    </div>
  )
}

export default Header

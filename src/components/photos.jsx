import React from 'react';

import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

const Photos = () => {
  return (
    <>
      <div>
        <img
          className="h-96 w-full p-4 "
          src="frontphoto.jpg"
          alt="Party Background"
        />
      </div>
      <div className='relative'>
        <img
          className='pb-4 pl-4 h-96 w-[750px] ml-[350px] transform transition duration-500 hover:scale-110 hover:rotate-3'
          src="singlephoto.jpg"
          alt=""
        />
        <img className='w-[220px] absolute  top-5 transform rotate-12 animate-swing' src="gift.svg" alt="" />
        <img className='w-[250px] absolute  top-16 left-20 transform -rotate-12 animate-swing ' src="gift2.svg" alt="" />
        <img className='w-28 absolute top-52 left-16 animate-bounce' src="smile.svg" alt="" />
        <h2 className='text-white absolute  top-44 left-16 font-serif font-bold text-5xl transform rotate-12 animate-bounce  hover:cursor-pointer'><Link to="/gift">Surprize</Link></h2>
     
        <img
          className="w-2/3 transform transition duration-500 hover:scale-110 hover:rotate-3"
          src="photo2.jpg"
          alt="Party Background"
        />
        <img
          className='w-72 absolute top-[550px] left-2/3 transform transition duration-500 hover:scale-110 hover:rotate-3 animate-swing'
          src="https://e1.pxfuel.com/desktop-wallpaper/880/505/desktop-wallpaper-backgrounds-cute-doraemon-doraemon-cartoon.jpg"
          alt=""
        />
        <img
          className='w-2/3 ml-80 p-4 transform transition duration-500 hover:scale-110 hover:rotate-3'
          src="photo3.jpg"
          alt=""
        />
       <img className='absolute bottom-[250px] w-56 left-10 transform  -rotate-12  animate-swing  hover:cursor-pointer ' src="letter.jpg
        " alt="" />
         <Link to="/wishing"><span className='font-bold bg-pink-300 rounded-xl p-2  bottom-[250px] absolute  transform -rotate-6 hover:bg-pink-500 hover:cursor-pointer transition-all'>Here is something Special for you</span></Link>
         <Link to="/"><span className='font-bold text-xl bg-gradient-to-r from-pink-200 font-serif to-pink-300  rounded-lg absolute bottom-5  p-2 left-2/3 transform -rotate-12  animate-spin cursor-pointer'>Go Back</span></Link>
         <ReactPlayer
          url='bomdiggi.mp3' // Audio URL
          playing={true} // Start playing automatically
          controls={false} // Hide controls
          width='0' // Hide the player controls
          height='0' // Hide the player controls
          className='absolute bottom-4 left-3 transform -rotate-12'
        />
      </div>
    </>
  )
}

export default Photos;

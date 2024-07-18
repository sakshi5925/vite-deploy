 import React from 'react'
 import { Link } from "react-router-dom";
 import ReactPlayer from 'react-player';
 const Wishing = () => {
   return (
     <div className='relative'>
       <img  className="animate-flicker"src="funny.jpg" alt="" />
       <span className='font-bold text-6xl bg-gradient-to-r from-pink-200 font-serif to-pink-300  rounded-lg absolute top-11  p-2 left-3 transform -rotate-12  animate-spin'>Highlights.....</span>
       <Link to="/"><span className='font-bold text-xl bg-gradient-to-r from-pink-200 font-serif to-pink-300  rounded-lg absolute bottom-5  p-2 left-2/3 transform -rotate-12  animate-spin cursor-pointer'>Go Back</span></Link>
       <ReactPlayer
          url='Amplifier.mp3' // Audio URL
          playing={true} // Start playing automatically
          controls={false} // Hide controls
          width='0' // Hide the player controls
          height='0' // Hide the player controls
          className='absolute bottom-4 left-3 transform -rotate-12'
        />
     </div>
   )
 }
 
 export default Wishing
 
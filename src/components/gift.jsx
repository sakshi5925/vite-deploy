import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';

const Gift = () => {
  const [page, setPage] = useState(1); // 1 for first page, 2 for second page

  useEffect(() => {
    // Change pages after 2 seconds
    const timer = setTimeout(() => {
      setPage(page === 1 ? 2 : 1); // Toggle page between 1 and 2
    }, 2000);

    return () => clearTimeout(timer);
  }, [page]);

  return (
    <>
      <div className='relative w-full'>
        <img className='absolute object-fill -top-9 h-[600px] w-full' src="https://png.pngtree.com/background/20220924/original/pngtree-happy-birthday-background-picture-image_1918893.jpg" alt="Background" />

        {/* Conditionally render first page */}
        {page === 1 && (
          <>
            <img
              className='w-[420px] h-[520px] transform -skew-y-12 rotate-3 left-44 relative m-9 shadow-2xl shadow-black'
              src="greetingcard.jpg"
              alt="Greeting Card Front"
            />
            <img
              className='w-[420px] h-[520px] -top-7 absolute left-[610px] shadow-2xl transition-opacity duration-1000 opacity-100'
              src="HappyBirthDay.jpg"
              alt="Greeting Card Front"
            />
          </>
        )}

        {/* Conditionally render second page */}
        {page === 2 && (
          <>
            <img
              className='w-[420px] h-[520px] transform -skew-y-12 rotate-3 left-44 relative m-9 shadow-2xl shadow-black'
              src="wish.jpg"
              alt="Another Greeting Card Front"
            />
            <img
              className='w-[420px] h-[520px] -top-7 absolute left-[610px] shadow-2xl transition-opacity duration-1000 opacity-100'
              src="lastpage.jpg"
              alt="Greeting Card Additional Page"
            />
          </>
        )}

        {/* Render audio player */}
        <ReactPlayer
          url='pehlapyar.mp3' // Audio URL
          playing={true} // Start playing automatically
          controls={false} // Hide controls
          width='0' // Hide the player controls
          height='0' // Hide the player controls
          className='absolute bottom-4 left-3 transform -rotate-12'
        />

        {/* Go Back link */}
        <Link to="/photos">
          <span className='font-bold text-xl bg-gradient-to-r from-pink-200 font-serif to-pink-300 rounded-lg absolute bottom-4 p-2 left-3 transform -rotate-12 animate-spin cursor-pointer'>Go Back</span>
        </Link>
      </div>
    </>
  );
}

export default Gift;

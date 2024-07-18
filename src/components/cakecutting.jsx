import React, { useState, useContext } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';


const Cakecutting = () => {
  const [cutCake, setCutCake] = useState(false);
  const [knifeAnimation, setKnifeAnimation] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false); // State to control music player

  const handleCutCake = () => {
    setKnifeAnimation(true);

    // Simulate cutting animation
    setTimeout(() => {
      setCutCake(true);
      console.log('Cake cut! Playing music...');
    
      setIsPlaying(true); // Start playing music
    }, 1000); // Adjust timing as per your animation duration

    // Simulate music playing
    // For demonstration, music starts immediately after cutting
    // You can adjust the logic for actual implementation
    setTimeout(() => {
      console.log('Music starts playing...');
    }, 2000); // Adjust timing as needed
  };

  return (
    <div className="cakecutting relative h-screen flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="https://cdn.shopify.com/s/files/1/0257/6718/2416/files/Party-Background-green-with-presents.jpg?v=1595051600"
        alt="Party Background"
      />

      {/* Cake Container */}
      <div className="wrapper relative w-[250px] h-[480px]">
        {/* Cake layers */}
        <div className={`cake absolute bottom-0 flex flex-col items-center ${cutCake ? 'cut' : ''}`}>
          <div className="w-[170px] h-[80px] bg-gradient-to-r from-purple-600 to-orange-400 rounded-t-3xl"></div>
          <div className="w-[250px] h-[80px] bg-gradient-to-r from-pink-500 to-orange-300 mt-[-20px] rounded-t-3xl"></div>
          <div className="w-[350px] h-[80px] bg-gradient-to-r from-red-400 to-orange-200 mt-[-20px] rounded-t-3xl"></div>
          {/* Mark to indicate cutting */}
          {cutCake && (
            <div className="absolute bottom-[30px] left-24 w-2 h-[50px] bg-gradient-to-r from-red-300 to-orange-500 rounded-b-lg border-red-500 border shadow-inner shadow-red-800 "></div>
          )}
        </div>

        {/* Animated Button */}
        <button
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 left-[625px] z-20 top-96 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 animate-bounce"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-500 rounded-md group-hover:bg-opacity-0">
            <Link to="/photos">Memories</Link>
          </span>
        </button>

        {/* Animated Gifts */}
        <img className="w-44 left-[605px] top-[329px] absolute transform rotate-12 z-10 animate-swing" src="gift.svg" alt="Gift 1" />
        <img className="w-96 left-[500px] top-[309px] absolute transform -rotate-12 animate-swing" src="gift2.svg" alt="Gift 2" />

        {/* Candles */}
        <div className="absolute bottom-[200px] left-32 flex flex-col items-center">
          <div className="w-[20px] h-[20px] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-flicker"></div>
          <div className="w-[10px] h-[40px] bg-gradient-to-r from-blue-500 to-pink-300"></div>
        </div>
        <div className="absolute bottom-[200px] left-40 flex flex-col items-center">
          <div className="w-[20px] h-[20px] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-flicker"></div>
          <div className="w-[10px] h-[40px] bg-gradient-to-r from-purple-500 to-pink-300"></div>
        </div>
        <div className="absolute bottom-[200px] left-48 flex flex-col items-center">
          <div className="w-[20px] h-[20px] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-flicker"></div>
          <div className="w-[10px] h-[40px] bg-gradient-to-r from-red-500 to-pink-300"></div>
        </div>

        {/* Knife */}
        {!cutCake && (
          <img
            className={`w-20 h-56 absolute bottom-[50px] left-1 cursor-pointer transition-transform duration-500 ${knifeAnimation ? 'transform translate-y-32' : ''}`}
            src="knife.svg"
            alt="Knife"
            onClick={handleCutCake}
          />
        )}
      </div>

      {/* React Player for Music */}
      {cutCake &&  (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="heart-container">
            <div className="heart-mask">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=K2aJTT29ZdU"
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cakecutting;

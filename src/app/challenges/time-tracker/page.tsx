import React from 'react';
import {Rubik} from 'next/font/google';
import data from './data.json';

const rubik = Rubik({subsets: ['latin']});

// ### Primary

// - Blue: #5847eb

// - Light red (work): #ff8c66
// - Soft blue (play): #56c2e6
// - Light red (study): #ff5c7c
// - Lime green (exercise): #4acf81
// - Violet (social): 	#7536d3
// - Soft orange (self care): #f1c65b

// ### Neutral

// - Very dark blue: #0f1424
// - Dark blue: #1c1f4a
// - Desaturated blue: #6f76c8
// - Pale Blue: #bdc1ff

const TimeTrackerPage = () => {
  return (
    <div
      className={`${rubik.className} bg-[#0f1424] h-full w-screen min-w-fit flex items-center justify-center text-sm text-[#382314]`}
    >
      {/* Component container */}
      <div className="w-330 grid grid-cols-1">
        <div></div>
      </div>
    </div>
  );
};

export default TimeTrackerPage;

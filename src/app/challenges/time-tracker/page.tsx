'use client';

import React, {useState} from 'react';
import {Rubik} from 'next/font/google';
import data from './data.json';
import ProfilePic from '/public/time-tracker/image-jeremy.png';
import Image from 'next/image';

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
  const [timeFrame, setTimeFrame] = useState('Weekly');
  const timeframes = ['Daily', 'Weekly', 'Monthly'];

  return (
    <div
      className={`${rubik.className} bg-[#0f1424] min-h-fit w-screen min-w-fit flex flex-col items-center text-sm text-[#6f76c8]`}
    >
      {/* Component container */}
      <div className="w-[328px] grid grid-cols-1 gap-6 py-20">
        {/* Profile box */}
        <div className="w-full h-[204px] bg-[#1c1f4a] flex flex-col rounded-2xl relative">
          <div className="h-2/3 w-full pl-7 flex gap-4 items-center bg-[#5847eb] rounded-2xl">
            {/* Display pic */}
            <div className="h-[70px] w-[70px] bg-white p-0.5 rounded-full">
              <Image
                src={ProfilePic}
                alt=""
                className="w-auto h-full"
              />
            </div>
            {/* Main text */}
            <div>
              <p className="text-[#bdc1ff]">Report for</p>
              <h1 className="text-xl text-white">Jeremy Robson</h1>
            </div>
          </div>
          {/* Timeframes */}
          <div className="h-1/3 flex flex-row items-center justify-between text-lg  pl-9 pr-6">
            {timeframes.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name="timeframe-select"
                  value={option}
                  id={option}
                  className="peer appearance-none"
                  checked={timeFrame === option}
                  onChange={(e) => setTimeFrame(e.target.value)}
                />
                <label
                  htmlFor={option}
                  className="peer-checked:text-white hover:cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Time type boxes */}
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`w-full h-40 rounded-2xl ${item.bgColor} relative`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TimeTrackerPage;
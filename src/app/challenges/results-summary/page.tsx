import React from 'react';
import data from './data.json';
import Image from 'next/image';
import {Hanken_Grotesk} from 'next/font/google';
import Link from 'next/link';

const hanken = Hanken_Grotesk({subsets: ['latin']});

const ResultsSummaryPage = () => {
  const total = data.reduce((sum, item) => sum + item.score, 0);
  const result = Math.floor(total / data.length);

  return (
    <div
      className={`${hanken.className} h-screen w-screen flex flex-col items-center md:justify-center text-sm`}
    >
      {/* Component container */}
      <div className="w-[375px] md:h-[510px] md:w-[740px] flex flex-col md:flex-row items-center ">
        {/* Results containers */}
        <div
          className={`h-[355px] md:h-full w-full md:w-1/2 p-8 rounded-b-3xl md:rounded-3xl bg-gradient-to-b from-[#7857ff] to-[#2e2be9] flex flex-col items-center text-white text-center`}
        >
          <h1 className="text-sm md:text-2xl text-[#c8c7ff] font-semibold mb-7">
            Your Result
          </h1>
          {/* Score circle */}
          <div className="h-[140px] w-[140px] md:h-[200px] md:w-[200px] mb-8 md:mb-10 rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] flex flex-col items-center justify-center">
            <p className="text-[40px] md:text-[53px] font-bold my-5">
              {result}
            </p>
            <p className="text-[#ebf1ff50] font-semibold">of 100</p>
          </div>
          <p className="text-lg md:text-3xl font-semibold mb-2 md:mb-5">
            Great
          </p>
          <p className="text-[#ebf1ff90] md:text-base font-medium">
            You scored higher than 65% of the <br /> people who have taken
            <br className="hidden md:block" /> these tests.
          </p>
        </div>
        {/* Summary container */}
        <div className="w-[315px] md:h-full md:w-1/2 pt-7 md:py-8 md:pl-[60px] md:pr-10 md:-ml-5 flex flex-col items-center md:rounded-r-3xl md:shadow-[30px_30px_60px_-10px_rgba(0,0,0,0.1)]">
          <h1 className="self-start mb-6 text-base md:text-xl font-semibold">
            Summary
          </h1>
          <div className="flex flex-col w-full gap-5 mb-6 md:mb-10">
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`${item.bgColor} h-14 flex flex-row justify-between p-5 rounded-2xl`}
              >
                <div className={`flex flex-row`}>
                  <Image
                    src={item.icon}
                    alt=""
                    height={20}
                    width={20}
                  />
                  <p className={`${item.textColor} font-semibold ml-4`}>
                    {item.category}
                  </p>
                </div>
                <p className="font-bold">
                  {item.score}
                  <span className="text-[#303b5a60]"> / 100</span>
                </p>
              </div>
            ))}
          </div>
          <Link
            href={'/challenges'}
            className="flex items-center justify-center self-end h-14 w-full rounded-[30px] bg-[#303b5a] text-white text-base font-medium hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9]"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummaryPage;

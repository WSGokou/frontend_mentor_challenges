import React from 'react';
import {DM_Sans} from 'next/font/google';
import Logo from '/public/expenses-chart/logo.svg';
import Image from 'next/image';
import data from './data.json';

const dmSans = DM_Sans({weight: ['400', '500', '700'], subsets: ['latin']});
//     ### Primary

// - Soft red: #ec775f
// - Cyan: #76b5bc

// ### Neutral

// - Dark brown: #382314
// - Medium brown: 	#93867b
// - Cream: #f8e9dd
// - Very pale orange: #fffaf5

const ExpenseChartPage = () => {
  const total = data.reduce((sum, item) => sum + item.amount, 0);
  const maxAmount = data.reduce((max, item) => {
    return item.amount > max ? item.amount : max;
  }, data[0].amount);
  const currentDate = new Date();
  const currentDay = currentDate
    .toLocaleString('en', {weekday: 'short'})
    .toLowerCase();

  // Find today's object in the data array
  const todayData = data.find((item) => item.day === currentDay);

  return (
    <div
      className={`${dmSans.className} bg-[#f8e9dd] h-full w-screen min-w-fit flex items-center justify-center text-sm text-[#382314]`}
    >
      {/* Component container */}
      <div className="w-[345px] md:w-[540px] flex flex-col gap-4">
        {/* Balance containter */}
        <div className="bg-[#ec775f] w-full pl-5 md:pl-8 pr-6 md:pr-10 pb-5 pt-6 md:py-7 rounded-lg md:rounded-2xl flex flex-row justify-between">
          <div className="text-[#fffaf5]">
            <p className="text-sm md:text-lg md:mb-1">My balance</p>
            <p className="text-2xl md:text-3xl font-medium">$921.48</p>
          </div>
          {/* Logo */}
          <Image
            src={Logo}
            alt=""
            className="self-center"
          />
        </div>
        {/* Chart container */}
        <div className="bg-white w-full rounded-lg md:rounded-2xl flex flex-col px-5 md:px-10 py-7 md:pt-10 md:pb-14">
          <h1 className="font-semibold text-2xl md:text-3xl md:mb-5">
            Spending - Last 7 days
          </h1>
          {/* Bars */}
          <div className="flex flex-row gap-3 md:gap-5 justify-center mt-12">
            {data.map((item, idx) => {
              const barHeight = (item.amount / maxAmount) * 150;
              const heightClass = `h-[${barHeight.toFixed(0)}px]`;
              const amountHeight = barHeight + 39;
              const amountClass = `bottom-[${amountHeight.toFixed(0)}px]`;

              return (
                <div
                  key={idx}
                  className="flex flex-col w-full items-center justify-end text-center group relative"
                >
                  {/* amount */}
                  <p
                    className={`text-[#fffaf5] md:text-xl ${amountClass} bg-[#382314] px-1 md:px-2 py-1.5 md:py-2 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 absolute`}
                  >
                    {`$${item.amount.toFixed(2)}`}
                  </p>
                  {/* bar */}
                  <div
                    className={`w-8 md:w-12 ${heightClass} rounded-sm md:rounded-md mb-4 mt-2 ${
                      item.day === todayData?.day
                        ? 'bg-[#76b5bc] hover:bg-[#76b5bcaf]'
                        : 'bg-[#ec775f] hover:bg-[#ec775faf]'
                    }`}
                  ></div>
                  {/* day */}
                  <p className="text-[#93867bad] text-xs">{item.day}</p>
                </div>
              );
            })}
          </div>
          {/* Line divider */}
          <div className="w-full border border-[#f8e9dd] my-7"></div>
          {/* Total section */}
          <div className="flex flex-row justify-between items-end">
            <div>
              <p className="text-[#93867bc2] md:text-lg mb-1">
                Total this month
              </p>
              <p className="text-2xl md:text-5xl font-bold">{`$${
                total * 2
              }`}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-base md:text-xl">+2.4%</p>
              <p className="text-[#93867bc2] text-sm md:text-base">
                from last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChartPage;

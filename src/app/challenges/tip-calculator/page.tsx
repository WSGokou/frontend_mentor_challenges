'use client';

import React, {useState} from 'react';
import {Space_Mono} from 'next/font/google';
import Image from 'next/image';
import splitterLogo from '/public/tip-calculator/logo.svg';
import personIcon from '/public/tip-calculator/icon-person.svg';
import dollarIcon from '/public/tip-calculator/icon-dollar.svg';

const spaceMono = Space_Mono({weight: ['700'], subsets: ['latin']});

const hideInputArrows =
  '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-2 focus:border-[#26c0ab]';

const totalTextStyles = {
  container: 'flex flex-row justify-between items-center',
  text: 'flex flex-col',
  header: 'text-[#f4fafa] text-base',
  para: 'text-sm',
  amount: 'text-[#26c0ab] text-3xl lg:text-4xl',
};
// Total container 	#00494d
// Tip/peoplenumber #5e7a7d
// Custom text 	#7f9c9f
// bg colour 	#c5e4e7
// input bg #f4fafa
// reset button #26c0ab

const TipCalculatorPage = () => {
  const [bill, setBill] = useState<number>(0);
  const [numPeople, setNumPeople] = useState<number>(0);
  const [selectedTip, setSelectedTip] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number>(0);
  const tipPercentages = [
    {label: '5%', value: 0.05},
    {label: '10%', value: 0.1},
    {label: '15%', value: 0.15},
    {label: '25%', value: 0.25},
    {label: '50%', value: 0.5},
  ];

  const tip = bill * selectedTip;
  const tipPerPerson = numPeople ? (tip / numPeople).toFixed(2) : '0.00';
  const totalPerPerson = numPeople
    ? ((bill + tip) / numPeople).toFixed(2)
    : '0.00';

  const onReset = () => {
    setBill(0);
    setNumPeople(0);
    setSelectedTip(0);
    setCustomTip(0);
  };

  const resetButtonDisabled = !numPeople && !bill && !customTip;

  return (
    <div
      className={`${spaceMono.className} bg-[#c5e4e7] min-h-[1080px] h-full w-screen min-w-fit flex flex-col items-center text-2xl text-[#5e7a7d]`}
    >
      {/* App Container */}
      <div className="pt-12 lg:pt-40 min-h-fit h-full flex flex-col items-center gap-10 lg:gap-[88px]">
        {/* Logo container */}
        <div>
          <Image
            src={splitterLogo}
            alt=""
          />
        </div>
        {/* Calculator container */}
        <div className="bg-white flex flex-col lg:flex-row lg:gap-12 rounded-t-2xl lg:rounded-2xl pb-10 px-6 pt-10 lg:p-8 w-[375px] lg:w-[920px] min-h-fit h-full lg:h-[482px] lg:shadow-2xl">
          {/* Inputs container */}
          <div className="w-full flex flex-col">
            {/* Bill input */}
            <div className="flex flex-col gap-3 mb-10">
              <label
                htmlFor="bill"
                className="text-sm"
              >
                Bill
              </label>
              <div className="h-12 flex flex-row relative items-center">
                <Image
                  src={dollarIcon}
                  alt=""
                  className="absolute left-4"
                />
                <input
                  type="number"
                  name="bill"
                  id="bill-input"
                  placeholder="0"
                  value={bill || ''}
                  className={`${hideInputArrows} text-right text-[#00494d] h-full bg-[#f4fafa] rounded-md w-full pl-9 pr-5`}
                  onChange={(e) => {
                    setBill(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            {/* Tip percentage */}
            <div className="mb-10 flex flex-col gap-5">
              <h4 className="text-sm">Select Tip %</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 font-light gap-4 text-[#f4fafa]">
                {tipPercentages.map((tip, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-center text-center`}
                  >
                    <input
                      type="radio"
                      id={tip.label}
                      value={tip.value}
                      name="tip-select"
                      className={`peer appearance-none`}
                      checked={selectedTip === tip.value}
                      onChange={(e) => {
                        setSelectedTip(Number(e.target.value));
                      }}
                    />
                    <label
                      htmlFor={tip.label}
                      className={`w-full bg-[#00494d] hover:bg-[#26c0ab70] cursor-pointer hover:text-[#00494d] peer-checked:text-[#00494d] peer-checked:bg-[#26c0ab] py-2 rounded-md`}
                    >
                      {tip.label}
                    </label>
                  </div>
                ))}
                <input
                  type="number"
                  placeholder="Custom"
                  value={customTip || ''}
                  onChange={(e) => {
                    setSelectedTip(Number(e.target.value) / 100);
                    setCustomTip(Number(e.target.value));
                  }}
                  className={`${hideInputArrows} bg-[#f4fafa] px-5 lg:px-3 text-right text-[#00494d] rounded-sm placeholder:text-[#5e7a7d]`}
                />
              </div>
            </div>
            {/* Number of people input */}
            <div className="flex flex-col gap-3 mb-9 lg:mb-0">
              <label
                htmlFor="people"
                className="text-sm"
              >
                Number of People
              </label>
              <div className="h-12 flex flex-row relative items-center">
                <Image
                  src={personIcon}
                  alt=""
                  className="absolute left-4"
                />
                <input
                  type="number"
                  name="people"
                  id="numPeopleInput"
                  placeholder="0"
                  required
                  value={numPeople || ''}
                  className={`${hideInputArrows} text-right text-[#00494d] h-full bg-[#f4fafa] rounded-md w-full pl-9 pr-5`}
                  onChange={(e) => {
                    setNumPeople(Number(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>

          {/* Totals container */}
          <div className="bg-[#00494d] w-full p-6 pt-11 lg:pt-16 lg:pb-10 lg:px-9 flex flex-col gap-8 rounded-2xl">
            {/* Tip Amount */}
            <div className={`${totalTextStyles.container}`}>
              {/* Text */}
              <div className={`${totalTextStyles.text}`}>
                <h3 className={`${totalTextStyles.header}`}>Tip Amount</h3>
                <p className={`${totalTextStyles.para}`}>/ person</p>
              </div>
              {/* Amount */}
              <div
                className={`${totalTextStyles.amount}`}
              >{`$${tipPerPerson}`}</div>
            </div>
            {/* Total */}
            <div className={`${totalTextStyles.container}`}>
              {/* Text */}
              <div className={`${totalTextStyles.text}`}>
                <h3 className={`${totalTextStyles.header}`}>Total</h3>
                <p className={`${totalTextStyles.para}`}>/ person</p>
              </div>
              {/* Amount */}
              <div
                className={`${totalTextStyles.amount}`}
              >{`$${totalPerPerson}`}</div>
            </div>
            <div
              className={`bg-[#ffffff] lg:mt-auto w-full rounded-md ${
                !resetButtonDisabled ? '' : 'opacity-25'
              }`}
            >
              <button
                onClick={onReset}
                className="bg-[#26c0ab] enabled:hover:bg-[#26c0ab70] text-[#00494d] text-xl rounded-md py-3 w-full"
                disabled={resetButtonDisabled}
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorPage;

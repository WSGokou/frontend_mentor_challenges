import Image from 'next/image';
import React from 'react';
import {Outfit} from 'next/font/google';

const outfit = Outfit({subsets: ['latin']});

const NFTCardPage = () => {
  const imageSrc = '/nft-preview-card/image-equilibrium.jpg';
  const title = 'Equilibrium #3429';
  const price = '0.041 ETH';
  const timeRemaining = '3 days left';
  const description = (
    <p className="font-light text-base">
      Our Eqilibrium collection promotes <br /> balance and calm.
    </p>
  );
  const creatorName = 'Jules Wyvern';

  return (
    <div
      className={`${outfit.className} bg-[#0d192b] h-screen w-screen flex items-center justify-center text-sm text-[#8bacda]`}
    >
      {/* Component */}
      <div className="bg-[#14253d] h-[545px] md:h-[600px] w-[330px] md:w-[355px] p-6 md:p-7 flex flex-col items-start justify-between rounded-2xl">
        {/* NFT Image */}
        <Image
          src={imageSrc}
          alt=""
          height={200}
          width={200}
          className="w-full rounded-lg"
        />
        {/* Title */}
        <h1 className="text-white font-semibold text-xl">{title}</h1>
        {/* Description */}
        {description}
        {/* Price and time remaining */}
        <div className="flex flex-row justify-between w-full">
          {/* Price */}
          <div className="text-[#00fff7] font-medium flex flex-row gap-2">
            <Image
              src={'/nft-preview-card/icon-ethereum.svg'}
              alt=""
              height={10}
              width={10}
            />
            {price}
          </div>
          {/* Time */}
          <div className="flex flex-row gap-1.5">
            <Image
              src={'/nft-preview-card/icon-clock.svg'}
              alt=""
              height={17}
              width={17}
            />
            {timeRemaining}
          </div>
        </div>
        {/* Seperation line */}
        <div className="border-[0.5px] w-full border-[#2f415b]"></div>
        {/* Creator */}
        <div className="font-light text-sm flex flex-row items-center">
          <Image
            src={'/nft-preview-card/image-avatar.png'}
            alt=""
            height={30}
            width={30}
            className="mr-3 border border-white rounded-full"
          />
          Creation of <span className="text-white ml-1">{creatorName}</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCardPage;

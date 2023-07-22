import {Metadata} from 'next';
import Image from 'next/image';
import React from 'react';
import {Outfit} from 'next/font/google';

const outfit = Outfit({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'QR code component',
  description: 'Generated by create next app',
};

const QRCodePage = () => {
  return (
    <div
      className={`${outfit.className} bg-[#d6e2f0] h-screen w-screen min-w-fit flex items-center justify-center text-center text-sm`}
    >
      {/* Component */}
      <div className="border h-fit max-h-[500px] p-4 pb-0 bg-white rounded-2xl flex flex-col items-center shadow-lg">
        {/* QR Code */}
        <Image
          src="/qrcode/image-qr-code.png"
          alt="QRCode"
          width={288}
          height={288}
          className="rounded-xl mb-7"
        />
        <div>
          <h1 className="text-[#1f3251] text-2xl font-semibold mb-5">
            Improve your front-end
            <br /> skills by building projects
          </h1>
          <p className="text-[#7b879d] text-[15px] mb-11">
            Scan the QR code to visit Frontend
            <br /> Mentor and take your coding skills <br /> to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;

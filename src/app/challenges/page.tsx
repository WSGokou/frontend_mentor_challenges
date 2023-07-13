import Link from 'next/link';
import React from 'react';

const challenges = [
  //   {text: 'Home', href: '/'},
  {text: 'QR Code Component', href: '/challenges/qrcode'},
];

const ChallengesPage = () => {
  return (
    <div className="p-4 flex flex-col items-center text-white text-center bg-blue-400 h-screen">
      <Link
        href={'/'}
        className="text-2xl hover:text-yellow-400 self-start"
      >
        Home
      </Link>
      <p className="text-xl mb-20">
        A button to navigate back to this page can be found at the bottom of
        each challenge
      </p>
      <h1 className="text-4xl font-bold mb-10">Challenges</h1>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-20">
        {challenges.map((challenge, idx) => (
          <Link
            href={challenge.href}
            key={idx}
            className="hover:text-yellow-400"
          >
            {challenge.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChallengesPage;

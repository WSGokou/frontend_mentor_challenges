import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center bg-blue-400 h-screen">
      <h1 className="text-5xl md:text-7xl mb-7 font-bold">
        Frontend Mentor Challenges
      </h1>
      <p className="text-xl mb-7">
        {`This is a website showcasing all of the challenges i've completed on frontendmentor.io`}{' '}
      </p>
      <Link
        href={'/challenges'}
        className="hover:text-yellow-400 text-3xl"
        aria-label="View challenges"
      >
        Click here to view challenges
      </Link>
    </div>
  );
}

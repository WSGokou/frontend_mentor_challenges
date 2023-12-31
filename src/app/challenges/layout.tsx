import Link from 'next/link';

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen min-h-fit relative">
      {children}
      <div className="relative">
        <Link
          href={'/challenges'}
          className="bg-blue-900 text-white rounded-md p-2 m-1 absolute -bottom-20"
        >
          Challenges
        </Link>
      </div>
    </div>
  );
}

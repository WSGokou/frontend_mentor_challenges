import Link from 'next/link';

export default function ChallengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {children}
      <Link
        href={'/challenges'}
        className="bg-blue-900 text-white rounded-md p-2 self-start m-1 absolute -bottom-20"
      >
        Challenges
      </Link>
    </div>
  );
}

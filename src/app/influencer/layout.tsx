import { ReactNode } from 'react';

export default function InfluencerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='font-pre'>
      {children}
    </div>
  );
}

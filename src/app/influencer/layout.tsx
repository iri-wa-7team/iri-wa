import InfluNavBar from '@/components/navbar/InfluNavBar';
import { ReactNode } from 'react';

export default function InfluencerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='font-pre'>
      <InfluNavBar />
      {children}
    </div>
  );
}

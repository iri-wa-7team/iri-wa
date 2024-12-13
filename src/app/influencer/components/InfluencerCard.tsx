import { twMerge } from 'tailwind-merge';

type InfluencerCardProps = {
  children: React.ReactNode;
  style?: string;
};

const InfluencerCard = ({
  children,
  style = 'bg-white',
}: InfluencerCardProps) => {
  return (
    <div className={twMerge('flex w-[1240px] flex-col rounded-[32px]', style)}>
      {children}
    </div>
  );
};

export default InfluencerCard;

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
    <div
      className={twMerge(
        'flex w-full max-w-[720px] flex-col rounded-[14px]',
        style
      )}
    >
      {children}
    </div>
  );
};

export default InfluencerCard;

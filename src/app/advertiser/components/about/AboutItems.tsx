import Image from 'next/image';

type BoxItemProps = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
};

export default function AboutItem({
  id,
  title,
  description,
  imgUrl,
}: BoxItemProps) {
  return (
    <div className='flex h-[200px] justify-between gap-x-20 mx-auto'>
      <div>
        <Image src={imgUrl} alt={id} width={160} height={160} />
      </div>
      <div>
        <div className='text-3xl text-primaryColor mb-[14px] '>{id}</div>
        <div className='xs:w-[310px]'>
          <p className='font-semibold text-lg tracking-[-0.075em] text-gray-700 mb-1'>{title}</p>
          <p className='text-[14px] text-gray-700 font-pre '>{description}</p>
        </div>
      </div>
    </div>
  );
}

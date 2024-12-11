import backgroundBubble from '/public/assets/images/background_bubble.png';

export default function Join() {
  return (
    <div
      className='h-[649px] w-full bg-cardMint'
      style={{
        backgroundImage: `url(${backgroundBubble.src})`,
        backgroundSize: 'auto',
        width: '100%',
        height: '649px',
      }}
    ></div>
  );
}

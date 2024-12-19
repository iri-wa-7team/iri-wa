interface PerformanceBoxProps {
    title: string;
    count: string;
    unit: string;
  }

const UnitItem = ({ title, count, unit }: PerformanceBoxProps) => {
  return (
    <div className="flex flex-col border-t border-gray-600 pt-2 text-center md:text-left text-gray-500">
    <h4 className="text-sm tracking-tight mb-1">{title}</h4>
    <p className="text-2xl font-medium ">
      {count}
      <span className="ml-1 text-lg font-normal ">{unit}</span>
    </p>
  </div>
  );
};

export default function PerformanceSection() {
  return (
    <section className="w-full bg-cardYellow font-montserrat py-14">
      <div className="relative xs:w-[768px] mx-auto flex md:flex-row gap-x-20">
        {/* Title Section */}
        <div className="relative top-0 left-14 mb-8 md:mb-0">
          <h3 className="text-sm uppercase tracking-wide text-teal-500 mb-2">
            Performance
          </h3>
          <h2 className="text-2xl font-bold text-gray-700 leading-snug tracking-tighter">
            와이리를 통해 캠페인을<br />진행 해보세요
          </h2>
        </div>

        {/* Stats Section */}
        <div className="relative left-12 grid grid-cols-2 gap-8 md:grid-cols-2 pt-[34px] ">
          <UnitItem title="보유 인플루언서 수" count="25,000+" unit="명" />
          <div></div>
          <UnitItem title="캠페인 신청수" count="16,024+" unit="건" />
          <UnitItem title="캠페인 선정수" count="2,281+" unit="건" />
        </div>
      </div>
    </section>
  );
}

import ReactCounterUp from "@/components/shared/ReactCounterUp";

const ExperienceCardItemLandingTwo = ({
  counterNumber,
  counterElement,
  decimals,
  text,
}: {
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}) => {
  return (
    <div className="experience-one card-style-two p-32px">
      <div className="experience__item">
        <p className="experience__item-number display-4">
          {counterElement}

          <ReactCounterUp end={counterNumber} decimals={decimals} />
        </p>
        <p className="experience__item-text textL">{text}</p>
      </div>
    </div>
  );
};

export default ExperienceCardItemLandingTwo;

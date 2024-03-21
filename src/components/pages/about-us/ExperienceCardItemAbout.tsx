import ReactCounterUp from "@/components/shared/ReactCounterUp";

const ExperienceCardItemAbout = ({
  counterNumber,
  counterElement,
  rightElement,
  decimals,
  text,
}: {
  counterNumber: number;
  counterElement?: string;
  rightElement?: string;
  decimals?: number;
  text: string;
}) => {
  return (
    <div className="experience-in-number__item">
      <p className="experience-in-number__item-number heading-1">
        {counterElement}

        <ReactCounterUp end={counterNumber} decimals={decimals} />
        {rightElement}
      </p>
      <p className="textL experience-in-number__item-text ">{text}</p>
    </div>
  );
};

export default ExperienceCardItemAbout;

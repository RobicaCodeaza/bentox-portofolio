"use client";
import CountUp from "react-countup";

const ReactCounterUp = ({
  decimals,
  end,
}: {
  decimals?: number;
  end: number;
}) => {
  return (
    <CountUp
      start={0}
      end={end}
      decimals={decimals}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

export default ReactCounterUp;

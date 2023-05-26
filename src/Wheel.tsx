import { Wheel as RcrWheel, WheelDataType } from "react-custom-roulette";
import "./Wheel.css";
import { useState } from "react";

type WheelProps = {
  data: WheelDataType[];
  onSpinEnd?: (result: WheelDataType) => void;
};

export const Wheel = ({ data, onSpinEnd }: WheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <button
      className="wheel-btn"
      onClick={() => {
        setResult(Math.floor(Math.random() * data.length));
        setIsSpinning(true);
      }}
    >
      {data.length > 0 ? (
        <RcrWheel
          mustStartSpinning={isSpinning}
          prizeNumber={result}
          data={data}
          disableInitialAnimation
          onStopSpinning={() => {
            setIsSpinning(false);
            onSpinEnd?.(data[result]);
          }}
        />
      ) : (
        <div>Add some items!</div>
      )}
    </button>
  );
};

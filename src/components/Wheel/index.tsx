import "./Wheel.css";
import { useEffect, useRef, useState } from "react";
import { ListItem } from "lib/use-wheel-data";
const { Wheel: SpinWheel } = require("spin-wheel/dist/spin-wheel-esm");

const blueColor = "#2f81f7";
const redColor = "#f85149";

type WheelProps = {
  data: ListItem[];
  onSpinEnd?: (result: ListItem) => void;
};

export const Wheel = ({ data, onSpinEnd }: WheelProps) => {
  // const [isSpinning, setIsSpinning] = useState(false);
  // const [result, setResult] = useState(0);
  const [wheelInstance, setWheelInstance] = useState<any>();
  const [container, setContainer] = useState<HTMLDivElement>();

  useEffect(() => {
    if (container) {
      const itemValues = data.map((item) => ({ label: item.value, weight: 1 }));
      const itemBackgroundColors = data.map((item) =>
        item.isDub ? blueColor : redColor
      );

      if (!wheelInstance) {
        setWheelInstance(new SpinWheel(container));
      } else {
        wheelInstance.init({
          items: itemValues,
          itemBackgroundColors,
        });
      }
    }
  }, [container, data, wheelInstance]);

  return (
    <div
      ref={(el) => {
        if (el) {
          setContainer(el);
        }
      }}
    />
    // <button
    //   className="wheel-btn"
    //   onClick={() => {
    //     setResult(Math.floor(Math.random() * data.length));
    //     setIsSpinning(true);
    //   }}
    // >
    // </button>
  );
};

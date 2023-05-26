import { useCallback, useEffect, useState } from "react";
import { WheelDataType } from "react-custom-roulette";

const localStorageKey = "wheelspindata";

const blueColor = "#2f81f7";
const redColor = "#f85149";

const interleaveItems = <T>(a: T[], b: T[]) => {
  const length = Math.max(a.length, b.length);
  const interleaved: T[] = [];

  for (let i = 0; i < length; i++) {
    if (i < a.length) {
      interleaved.push(a[i]);
    }

    if (i < b.length) {
      interleaved.push(b[i]);
    }
  }

  return interleaved;
};

const getWheelDataArray = (
  positiveItems: string[],
  negativeItems: string[]
) => {
  const positiveWheelItems: WheelDataType[] = positiveItems.map((item) => ({
    option: item,
    style: { backgroundColor: blueColor },
  }));

  const negativeWheelItems: WheelDataType[] = negativeItems.map((item) => ({
    option: item,
    style: { backgroundColor: redColor },
  }));

  return interleaveItems(positiveWheelItems, negativeWheelItems);
};

export const useWheelData = () => {
  const [negativeItems, _setNegativeItems] = useState<string[]>([]);
  const [positiveItems, _setPositiveItems] = useState<string[]>([]);

  useEffect(
    () => {
      const dataRaw = localStorage.getItem(localStorageKey);

      if (dataRaw !== null) {
        const parsedData = JSON.parse(dataRaw) as {
          positiveItems: string[];
          negativeItems: string[];
        };
        _setNegativeItems(parsedData.negativeItems);
        _setPositiveItems(parsedData.positiveItems);
      }
    },
    // only want this to run once on app load
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setNegativeItems = useCallback(
    (values: string[]) => {
      _setNegativeItems(values);
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({
          positiveItems,
          negativeItems: values,
        })
      );
    },
    [positiveItems]
  );

  const setPositiveItems = useCallback(
    (values: string[]) => {
      _setPositiveItems(values);
      localStorage.setItem(
        localStorageKey,
        JSON.stringify({
          positiveItems: values,
          negativeItems,
        })
      );
    },
    [negativeItems]
  );

  return {
    negativeItems,
    positiveItems,
    wheelData: getWheelDataArray(positiveItems, negativeItems),
    setNegativeItems,
    setPositiveItems,
  };
};

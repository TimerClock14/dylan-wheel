import { useCallback, useEffect, useState } from "react";

export type ListItem = {
  value: string;
  isDub: boolean;
};

const localStorageKey = "wheelspindata";

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

const getWheelDataArray = (items: ListItem[]) => {
  const positiveWheelItems: ListItem[] = [];
  const negativeWheelItems: ListItem[] = [];

  items.forEach((item) => {
    const arr = item.isDub ? positiveWheelItems : negativeWheelItems;
    arr.push(item);
  });

  return interleaveItems(positiveWheelItems, negativeWheelItems);
};

export const useWheelData = () => {
  const [items, _setItems] = useState<ListItem[]>([]);

  useEffect(
    () => {
      const dataRaw = localStorage.getItem(localStorageKey);

      if (dataRaw) {
        console.log(dataRaw);
        const parsedData = JSON.parse(dataRaw) as { items: ListItem[] };
        _setItems(parsedData.items);
      }
    },
    // only want this to run once on app load
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const setItems = useCallback((values: ListItem[]) => {
    _setItems(values);
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        items: values,
      })
    );
  }, []);

  return {
    items,
    setItems,
    wheelData: getWheelDataArray(items),
  };
};

import "./App.css";
import { ItemList } from "./ItemList";
import { Wheel } from "./Wheel";
import { useWheelData } from "./use-wheel-data";

function App() {
  const {
    wheelData,
    setPositiveItems,
    setNegativeItems,
    positiveItems,
    negativeItems,
  } = useWheelData();

  return (
    <div className="App">
      <Wheel data={wheelData} />

      <div className="lists-and-queue">
        <div className="lists">
          <ItemList values={positiveItems} onChange={setPositiveItems}>
            Dubs
          </ItemList>

          <ItemList values={negativeItems} onChange={setNegativeItems}>
            Ls
          </ItemList>
        </div>
        <div className="queue">queue</div>
      </div>
    </div>
  );
}

export default App;

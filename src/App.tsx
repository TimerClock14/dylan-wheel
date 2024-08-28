import "App.css";
import { ItemList } from "components/ItemList";
import { Queue } from "components/Queue";
import { Wheel } from "components/Wheel";
import { useWheelData } from "lib/use-wheel-data";

function App() {
  const { wheelData, items, setItems } = useWheelData();

  return (
    <div className="App">
      <div className="wheel">
        <Wheel data={wheelData} />
      </div>

      <div className="lists-and-queue">
        <ItemList values={items} onChange={setItems} />
        <Queue />
      </div>
    </div>
  );
}

export default App;

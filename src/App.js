import "./App.css";
import Counter from "./components/Counter";
import CounterBasedOnPreviousState from "./components/CounterBasedOnPreviousState";
import HookCounterThree from "./components/hookcounterthree";
import UseStateWithArrays from "./components/useStateWithArrays";
import UseEffectCleaUp from "./components/UseEffectCleaUp";
import UseEffect from "./components/UseEffect";
import Mouse from "./components/Mouse";
import IntervalCounter from "./components/IntervalCounter";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterBasedOnPreviousState />
      <HookCounterThree />
      <UseStateWithArrays />
      <UseEffect />
      {/* <Mouse/> */}
      <UseEffectCleaUp />
      <IntervalCounter />
      <FetchData />
    </div>
  );
}

export default App;

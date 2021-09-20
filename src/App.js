import Counter from "./components/Counter";
import CounterBasedOnPreviousState from "./components/CounterBasedOnPreviousState";
import HookCounterThree from "./components/hookcounterthree";
import IntervalCounter from "./components/IntervalCounter";
import UseStateWithArrays from "./components/useStateWithArrays";
import UseEffectCleaUp from "./components/UseEffectCleaUp";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import Mouse from "./components/Mouse";
import FetchData from "./components/FetchData";

import "./App.css";
import UseReducer2 from "./useReducer/UseReducer";
import DataFetching from "./useReducer/DataFetching";

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
      <UseReducer/>
      <UseReducer2/>
      <DataFetching/>
    </div>
  );
}

export default App;

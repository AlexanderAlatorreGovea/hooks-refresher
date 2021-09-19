
import './App.css';
import Counter from './components/Counter';
import CounterBasedOnPreviousState from './components/CounterBasedOnPreviousState';
import HookCounterThree from './components/hookcounterthree';
import UseStateWithArrays from './components/useStateWithArrays';
import UseEffect from './components/UseEffect';
import Mouse from './components/Mouse';
import UseEffectCleaUp from './components/UseEffectCleaUp';
import IntervalCounter from './components/IntervalCounter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterBasedOnPreviousState/>
      <HookCounterThree/>
      <UseStateWithArrays/>
      <UseEffect/>
      {/* <Mouse/> */}
      <UseEffectCleaUp/>
    <IntervalCounter/>
    </div>
  );
}

export default App;

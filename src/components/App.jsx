import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/actions';

const App = () => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log('decrement: ', decrement);
  console.log('increment', increment);
  console.log('counter: ', counter);
  return (
    <div>
      <h1>Counter</h1>
      <h4>{counter}</h4>
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  )
}
export default App;

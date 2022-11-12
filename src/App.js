import { useSelector,useDispatch } from 'react-redux';
import {actions} from './store/index'

function App() {
  const dispatcher = useDispatch();
  const increment = () => {
    dispatcher(actions.increment())
  }

  const decrement = () => {
    dispatcher(actions.decrement())
  }

  const addBy = () => {
    dispatcher(actions.addBy(10))
  }

  const counter = useSelector((state) => state.counter)
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>decrement</button>
    </div>
  );
}

export default App;

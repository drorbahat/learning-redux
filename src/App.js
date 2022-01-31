import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter'
import { toogleDarkMode } from './redux/theme'

function App() {
  const { count } = useSelector(state => state.counter)
  const { isDarkMode } = useSelector(state => state.theme)
  console.log(isDarkMode)
  const dispatch = useDispatch()

  return (
    <div className="App" style={{ background: isDarkMode ? 'gray' : 'white' }}>
      <h1 className="App-title">the count is</h1>
      <h1 className="App-title">{count}</h1>
      <div className="App-buttons">
        <button
          className="App-buttons-button plus-button"
          onClick={() => { dispatch(increment()) }}
        >+</button>
        <button
          className="App-buttons-button minus-button"
          onClick={() => { dispatch(decrement()) }}
        >-</button>
        <button
          onClick={() => { dispatch(toogleDarkMode()) }}>Dark mode</button>
      </div>
    </div>
  );
}

export default App;

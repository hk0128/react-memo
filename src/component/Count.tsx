import './Count.css'
import {useReducer} from 'react'

const initialState = { count: 0 }

type State = { count: number }

type Action = 
  | { type: 'increment' } 
  | { type: 'decrement' }
  | { type: 'reset' }

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function Count() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  )
}

export default Count

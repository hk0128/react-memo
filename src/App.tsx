import { createContext, useState } from 'react'
import './App.css'
import Child from './component/Child'
import Count from './component/Count'
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { updateName, updateAge } from './redux/action';

export const ChildContext = createContext('')

function App(props:any) {

  const [child, setChild] = useState('Child Name');

  return (
    <>
      <h1>- App画面 -</h1>
      <ChildContext.Provider value={child}>
        <div>
          <h3>■ useContext サンプル</h3>
          <Child />
        </div>
        <div>
          <h3>■ useReducer サンプル</h3>
          <Count />
        </div>
        <div>
          <h3>■ redux サンプル</h3>
          <p>名前:{props.user.name}</p>
          <p>年齢:{props.user.age}</p>
          <button onClick={() => props.updateAge(44)}>updateAge</button>
          <br/>
          <Link to="/sub">Subへ</Link>
        </div>
      </ChildContext.Provider>
    </>
  )
}

const mapStateToProps = (state:any) => (
  {
      user: state.user,
  }
)

const mapDispatchToProps = (dispatch:any) => (
  {
      updateName: (name:any) => dispatch(updateName(name)),
      updateAge: (age:any) => dispatch(updateAge(age)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

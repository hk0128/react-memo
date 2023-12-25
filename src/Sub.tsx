import './Sub.css'
import { Link } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { updateName, updateAge } from './redux/action';

function Sub(props:any) {
  return (
    <>
      <h1>- Sub画面 -</h1>
      <div>
        <h3>■ redux サンプル</h3>
        <p>名前:{props.user.name}</p>
        <p>年齢:{props.user.age}</p>
        <button onClick={() => props.updateName('hogehoge')}>updateName</button>
        <br/>
        <Link to="/">Appへ</Link>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sub);

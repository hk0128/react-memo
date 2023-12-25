
import './Child.css'
import {useContext} from 'react'
import {ChildContext} from '../App'

function Child() {
  const child = useContext(ChildContext)
  return (
    <>
      <p>子コンポーネントの名前は{child}です。</p>
    </>
  )
}

export default Child

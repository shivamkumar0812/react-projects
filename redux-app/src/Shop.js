import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch  = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  return (
    <div className='container my-3'>
      <h2>Deposit/Withdraw Money</h2>
      <button className='btn btn-primary mx-2' onClick={()=> {depositMoney(100)}}> +</button>
      Update your balance
      <button className='btn btn-primary mx-2'onClick={()=> {withdrawMoney(100)}}>-</button>
    </div>
  )
}

export default Shop

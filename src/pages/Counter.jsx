import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  increase, decrease,reset } from '../redux/slices/counterSlice'
import { Button } from 'react-bootstrap'

const Counter = () => {

    const state = useSelector((store) => store.counterReducer)
    const dispatch = useDispatch();

    console.log(increase)

  return (
    <div className='d-flex gap-2'>
        <Button onClick={() => dispatch(decrease())}>Azalt</Button>
        <p className="text-light fw-bold px-4 fs-1">{state.count}</p>
        <button onClick={() => dispatch(increase())} className='btn btn-success'>Arttır</button>
        <button onClick={() => dispatch(reset(0))} className='bg-warning'>Sıfırla</button>
    </div>
  )
}

export default Counter;
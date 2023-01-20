import React from 'react'
import { ACTIONS } from './app'

export default function Operation({operation, dispatch}) {
  return (
    <button onClick={()=>dispatch({type: ACTIONS.CHOOSE_OP, payload: {operation: operation}})}>{operation}</button>
  )
}

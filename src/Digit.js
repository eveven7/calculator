import React from 'react'
import { ACTIONS } from './app'

export default function Digit({digit, dispatch}) {
  return (
    <button onClick={()=>dispatch({type: ACTIONS.APPEND_NUMBER, payload: {digit: digit}})}>{digit}</button>
  )
}

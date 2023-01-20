import React from "react";
import { useReducer } from "react";
import Digit from "./Digit";
import Operation from "./Operation";


export const ACTIONS = {
    COMPUTE:"COMPUTE",
    DELETE:"DEL",
    CLEAR:"CL",
    APPEND_NUMBER:"adddigit",
    CHOOSE_OP: "chooseop"
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.APPEND_NUMBER:
            if(payload.digit === "." && state.currentOperand.includes(".")) return state
            return {...state, currentOperand: `${state.currentOperand || ""}${payload.digit}`}
        case ACTIONS.CHOOSE_OP:
            return {prevOperand: `${state.currentOperand || ""}`, operation:`${payload.operation}`, currentOperand:""}
        case ACTIONS.COMPUTE:
            switch(state.operation){
                case '/':
                    return {currentOperand: `${state.prevOperand / state.currentOperand}`,prevOperand: "", operation:""}
                case '*':
                    return {currentOperand: `${state.prevOperand * state.currentOperand}`,prevOperand: "", operation:""}
                case '+':
                    return {currentOperand: `${+state.prevOperand + +state.currentOperand}`,prevOperand: "", operation:""}
                case '-':
                    return {currentOperand: `${state.prevOperand - state.currentOperand}`,prevOperand: "", operation:""}
                default:
                    return state
            }
        case ACTIONS.CLEAR:
            return {currentOperand:"", prevOperand:"", operation:""}
        case ACTIONS.DELETE:
            return {...state, currentOperand: state.currentOperand.slice(0,-1)}
        default:
            return state
    }
}


export default function App(){
    
    const [{currentOperand = "", prevOperand = "", operation = ""}, dispatch] = useReducer(reducer,{

    })
    
    
    
    return (
       <main>
            <div className="display-result">
                <div className="previous-operand">{prevOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button onClick={()=>dispatch({type: ACTIONS.CLEAR})} className="span-2">ac</button>
            <button onClick={()=>dispatch({type: ACTIONS.DELETE})}>del</button>
            <Operation operation={"/"} dispatch={dispatch}/>
            <Digit digit="1" dispatch={dispatch}/>
            <Digit digit="2" dispatch={dispatch}/>
            <Digit digit="3" dispatch={dispatch}/>
            <Operation operation={"*"} dispatch={dispatch}/>
            <Digit digit="4" dispatch={dispatch}/>
            <Digit digit="5" dispatch={dispatch}/>
            <Digit digit="6" dispatch={dispatch}/>
            <Operation operation={"+"} dispatch={dispatch}/>
            <Digit digit="7" dispatch={dispatch}/>
            <Digit digit="8" dispatch={dispatch}/>
            <Digit digit="9" dispatch={dispatch}/>
            <Operation operation={"-"} dispatch={dispatch}/>
            <Digit digit="0" dispatch={dispatch}/>
            <Digit digit="." dispatch={dispatch}/>
            <button onClick={()=>dispatch({type:ACTIONS.COMPUTE})} className="span-2">=</button>
       </main> 
    )
}
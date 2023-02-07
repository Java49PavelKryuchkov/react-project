import React from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../redux/counterSlice";
type Props = {
    operand: number;
}
export const CounterUpdater: React.FC<Props> = ({operand}) => {
    const dispatch = useDispatch();
    return <div>
        <p>operand = {operand}</p>
        <button onClick={() => dispatch(counterActions.increment(operand))}>+</button>
        <button onClick={() => dispatch(counterActions.decrement(operand))}>-</button>
        <button onClick={() => dispatch(counterActions.reset())}>reset</button>
    </div>
}






















// import {useDispatch} from 'react-redux';
// import { counterActions } from '../redux/counterSlice';
// export const CounterUpdater: React.FC = () => {
//     const dispatch = useDispatch();
//     return <div>
//         <button onClick={() => dispatch(counterActions.increment())}>+</button>
//         <button onClick={() => dispatch(counterActions.decrement())}>-</button>
//         <button onClick={() => dispatch(counterActions.reset())}>Reset</button>
//     </div>
// }
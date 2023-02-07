import React from "react";
import { useSelector } from "react-redux";
type Props = {
    factor: number;
}
export const CounterMultiply: React.FC<Props> = ({factor}) => {
    const count = useSelector<any, any>(state => state.counter.count);
    return <p>{count} * {factor} = {count * factor}</p>
}
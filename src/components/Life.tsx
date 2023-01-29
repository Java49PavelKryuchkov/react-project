import React, { useEffect, useRef } from "react";
import { LifeMatrix } from "../service/LifeMatrix";
import { getRandomMatrix } from "../utils/random";
import { Matrix } from "./Matrix";

type Props = {
    dimensions: number;
    tickInterval: number;
}

export const Life: React.FC<Props> = ({dimensions, tickInterval}) => {
    const lifeMatrix = useRef<LifeMatrix>();
    const [numbers, setNumbers] = React.useState<number[][]>([]);
    function tic() {
        if (lifeMatrix.current == null) {
            lifeMatrix.current = new LifeMatrix(getRandomMatrix(dimensions, dimensions, 0, 1))
        }
        setNumbers(lifeMatrix.current.nextStep());
    }
    React.useEffect(() => {
        const interval = setInterval(tic, tickInterval);
        return () => clearInterval(interval);
    }, [tickInterval])
    return <div>
        <Matrix numbers={numbers}/>
    </div>
}
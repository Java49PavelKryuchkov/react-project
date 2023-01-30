import { getLifeMatrix, getRandomMatrix } from "../utils/random";

export class LifeMatrix {
    constructor(private _numbers: number[][]) {}
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        return getLifeMatrix(this._numbers);
    }
}
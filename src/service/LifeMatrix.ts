import { getLifeMatrix, getRandomMatrix } from "../utils/random";

export class LifeMatrix {
    constructor(private _numbers: number[][]) {}
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        this._numbers = getRandomMatrix(this._numbers.length,
            this._numbers[0].length, 0, 1);
        return getLifeMatrix(this._numbers);
    }
}
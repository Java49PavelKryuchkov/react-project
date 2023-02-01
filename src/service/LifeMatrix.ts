import {  getNextCellValue, getRandomMatrix } from "../utils/random";

export class LifeMatrix {
    constructor(private _numbers: number[][]) {}
    get numbers() {
        return this._numbers;
    }
    nextStep(): number[][] {
        const nextMatrix: number[][] = this._numbers.map((row, i) =>row.map((col, j) => 
        getNextCellValue(this._numbers, i, j)));
        this._numbers = nextMatrix;
        return this._numbers;
    }
}
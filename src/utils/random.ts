import { DefaultDeserializer } from "v8";

const live: number = 1;
const dead: number = 0;

export function getRandomNumber(min: number, max: number,
     isMinInclusive: boolean = true, isMaxInclusive: boolean = false) {
        if (!isMinInclusive) {
            min++;
        }
        if (isMaxInclusive) {
            max++;
        }
        if (min == max) {
            throw "min may not be equaled to max";
        }
        if (min > max) {
            [min, max] = [max, min];
        }
        return min + Math.trunc(Math.random() * (max - min));
        
}
export function getElement(array: any[]): any {
    return array[getRandomNumber(0, array.length)];
}
export function getRandomMatrix(rows: number, columns: number, min: number,
     max: number): number[][] {
    const resMatrix: number[][] = [[]];
    for (let i = 0; i < rows; i++) {
        resMatrix[i] = [];
        for (let j = 0; j < columns; j++) {
            resMatrix[i][j] = getRandomNumber(min, max, true, true);
        }
    }
    return resMatrix;
}
export function fromAlive(value: number): number {
    return (value === 2 || value === 2) ? live: dead;
}
export function fromDead(value: number): number {
    return (value === 3) ? live : dead;
}
export function topBottomNeighbourCell(numbers: number[][], i: number, j: number): number {
    return numbers[i] ? getCellValue(numbers[i][j-1]) + getCellValue(numbers[i][j+1]) + numbers[i][j] : dead;
}
export function getCellValue(cell: number | undefined): number {
    return cell ? live : dead;
}
export function getNextCellValue(numbers: number[][], i: number, j: number): number {
    const nNeighbourLives: number = getCellValue(numbers[i][j-1]) + getCellValue(numbers[i][j+1]) +
    topBottomNeighbourCell(numbers, i-1, j) + topBottomNeighbourCell(numbers, i+1, j);
    return numbers[i][j] ? fromAlive(nNeighbourLives) : fromDead(nNeighbourLives);
}


export function getRandomDate(minYear: number, maxYear: number): Date {
    const year = getRandomNumber(minYear, maxYear);
    const month = getRandomNumber(0, 12);
    const day = getRandomNumber(1, 32);
    const dateRes = new Date(year, month, day);
    return dateRes;
}
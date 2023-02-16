import { Employee } from "../models/Employee";
import employeeConfig from "../config/employee-config.json";
import { getElement, getRandomDate, getRandomNumber } from "../utils/random";

export function createRandomEmployee(): Employee {
    const {minId, maxId, departments,
        minBirthYear, maxBirthYear, minSalary, maxSalary} = employeeConfig;
    const id = getRandomNumber(minId, maxId, true, true);
    const name = "name" + id.toString().slice(0,3);
    const department = getElement(departments);
    const birthDate = getRandomDate(minBirthYear, maxBirthYear).toISOString().slice(0, 10);
    const salary = getRandomNumber(minSalary, maxSalary);
    const employee = {id, name, birthDate, department, salary};
    return employee;
}
export function ageStats(employees: Employee[]): {minAge:number, maxAge:number, avgAge: number} {
    const currentYear = new Date().getFullYear();
    const result = employees.reduce((res, empl) => {
        const age = currentYear - new Date(empl.birthDate).getFullYear();
        if(res.minAge > age) {
            res.minAge = age;
        } else if(res.maxAge < age) {
            res.maxAge = age
        }
        res.avgAge += age;
        return res;
    }, {minAge: 1000, maxAge: 0, avgAge: 0});
    result.avgAge = Math.trunc(result.avgAge / employees.length);
    return result;
}
export function salaryStats(employees: Employee[]): {minSalary:number, maxSalary:number, avgSalary: number} {
    const result = employees.reduce((res, empl) => {
        if(res.minSalary > empl.salary) {
            res.minSalary = empl.salary;
        } else if(res.maxSalary < empl.salary) {
            res.maxSalary = empl.salary
        }
        res.avgSalary += empl.salary;
        return res;
    }, {minSalary: 60000, maxSalary: 0, avgSalary: 0});
    result.avgSalary = Math.trunc(result.avgSalary / employees.length);
    return result;
}
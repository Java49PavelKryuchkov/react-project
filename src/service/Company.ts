import { Employee } from "../models/Employee";

export class Company {
    private employees: Employee[] = [];
    addEmployee(empl: Employee): void {
        this.employees.push(empl);
    }
    updateEmployee(empl: Employee): void {
        const index = this.employees.findIndex(el => el.id == empl.id);
        if(index>=0) {
            this.employees[index] = empl;   
        }
    }
    getEmployee(id: number): Employee | null {
        const index = this.employees.findIndex(el => el.id == id);
        return index < 0 ? null : this.employees[index]
    }
    removeEmployee(id: number): void {
        const index = this.employees.findIndex(el => el.id == id);
        index >= 0 && this.employees.splice(index, 1);
    }
    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}
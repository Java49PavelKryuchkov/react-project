import {collection,  getFirestore, getDocs, setDoc, doc, deleteDoc} from 'firebase/firestore';
import {app} from '../config/firebase-config';
import { Employee } from '../models/Employee';
import { getRandomNumber } from '../utils/random';
import employeeConfig from '../config/employee-config.json'
import { Observable } from 'rxjs';
import {collectionData} from 'rxfire/firestore'

const EMPLOYEES = 'employees';

export class CompanyFirebase {
    private employeesCol = collection(getFirestore(app), EMPLOYEES);
    async addEmployee(empl: Employee): Promise<void> {
        empl.id = getRandomNumber(employeeConfig.minId, employeeConfig.maxId);
        await this.updateEmployee(empl);
    }
    async updateEmployee(empl: Employee): Promise<void> {
        await setDoc(doc(this.employeesCol, empl.id.toString()), empl)
    }
    async removeEmployee(id:number): Promise<void> {
        await deleteDoc(doc(this.employeesCol, id.toString()))
    }
    getAllEmployees(): Observable<Employee[]> {
        return collectionData(this.employeesCol) as Observable<Employee[]>
    }
}

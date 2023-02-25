import React, { useState } from "react"
import { Employee } from "../../models/Employee"
import employeeConfig from '../../config/employee-config.json';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

type Props = {
    submitFn: (empl: Employee) => boolean,
    employeeUpdate?: Employee
}
const initialEmployee: Employee = {
    id: 0, birthDate: '',
    name: "",
    department: "",
    salary: 0
}
export const EmployeeForm: React.FC<Props> = ({submitFn, employeeUpdate}) => {
    const {departments, minSalary, maxSalary, minBirthYear, maxBirthYear} = employeeConfig;
    const [employee, setEmployee] = useState<Employee>(employeeUpdate ? employeeUpdate : initialEmployee);
    function handlerName(event: any) {
        const name = event.target.value;
        const emplCopy = {...employee};
        emplCopy.name = name;
        setEmployee(emplCopy);
    }
    function handlerSalary(event: any) {
        const salary = event.target.value;
        const emplCopy = {...employee};
        emplCopy.salary = salary;
        setEmployee(emplCopy);
    }
    function handlerBirthDate(event: any) {
        const birthDate = event.target.value;
        const emplCopy = {...employee};
        emplCopy.birthDate = birthDate;
        setEmployee(emplCopy);
    }
    function handlerDepartment(event: any) {
        const department = event.target.value;
        const emplCopy = {...employee};
        emplCopy.department = department;
        setEmployee(emplCopy);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(employee);
        document.querySelector('form')!.reset();
    }
    function onResetFn(event: any) {
        setEmployee(employeeUpdate ? employeeUpdate : initialEmployee)
    }
    return <Box>
        <form onSubmit={onSubmitFn} onReset={onResetFn}>
        <FormControl fullWidth required>
            <InputLabel id="select-department-id">Department</InputLabel>
            <Select labelId="select-department-id" label="Department"
            value={employee.department} onChange={handlerDepartment}>
                <MenuItem value=''>None</MenuItem>
                {departments.map(dep => <MenuItem value={dep}>{dep}</MenuItem>)}
            </Select>
        </FormControl>
        <TextField type='text' required fullWidth label="Employee name"
        helperText='type employee name' value={employee.name} onChange={handlerName}
        inputProps = {{
            readOnly: !!employeeUpdate

        }}/>
        <TextField type='date' required fullWidth label="birthDate"
        value={employee.birthDate} onChange={handlerBirthDate}
        inputProps  = {{
            readOnly: !!employeeUpdate,
            min: `${minBirthYear}-01-01`,
            max: `${maxBirthYear}-12-31`
        }} InputLabelProps = {{
            shrink: true
        }}
         />
         <TextField type='number' required fullWidth label='salary'
         value={employee.salary} onChange={handlerSalary}
         helperText={`enter salary in range [${minSalary}-${maxSalary}]`}
              inputProps = {{
                min: `${minSalary}`,
                max: `${maxSalary}`
              }}/>
              <Button type='submit'>Submit</Button>
              <Button type='reset'>Reset</Button>
        </form>
    </Box>
}
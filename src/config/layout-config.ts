import { NavigatorProps } from "../models/NavigatorProps";

export const layoutConfig: NavigatorProps = {
    routes: [
        {path: "/", label: "Employees", flAdmin: false,flAuth: true},
        {label: 'Add Employee', path: '/add', flAdmin: true,flAuth: true},
        {label: 'Generation', path: '/generation', flAdmin: true,flAuth: true},
        {label: 'Age Statistics', path: '/statistics/age', flAdmin: false,flAuth: true},
        {label: 'Salary Statistics', path: '/statistics/salary', flAdmin: false,flAuth: true},
        {label: 'Login', path: '/login', flAdmin: false,flAuth: false},
        {label: 'Logout', path: '/logout', flAdmin: false,flAuth: true}
    ]
}
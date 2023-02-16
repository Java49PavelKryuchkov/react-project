import { NavigatorProps } from "../models/NavigatorProps";

export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        {path: "/", label: "Employees"},
        {label: 'Add Employee', path: '/add'},
        {label: 'Age Statistics', path: '/statistics/age'},
        {label: 'Salary Statistics', path: '/statistics/salary'}
    ]
}
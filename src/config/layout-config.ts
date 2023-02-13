import { NavigatorProps } from "../models/NavigatorProps";

export const layoutConfig: NavigatorProps = {
    className: 'navigator-list',
    routes: [
        {path: "/", label: "Home"},
        {label: 'Customers', path: '/customers'},
        {label: 'Orders', path: '/orders'},
        {label: 'Products', path: '/products'}
    ]
}
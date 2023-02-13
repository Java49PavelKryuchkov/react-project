import { NavLink, Outlet } from "react-router-dom"
import { NavigatorProps } from "../../models/NavigatorProps"

export const Navigator: React.FC<NavigatorProps> = ({className, routes}) => {
    return <div>
        <nav>
            <ul className={className}>
                {getNavItems(routes)}
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}
function getNavItems (routes: {path:string, label: string}[]): React.ReactNode {
    return routes.map(e => 
        <li className="navigator-item">
        <NavLink to={e.path} style={({isActive}) => getActiveProps(isActive)}>{e.label}</NavLink>
        </li>
    )
}
function getActiveProps(isActive: boolean) : React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = {backgroundColor: "blue", color: "white", fontSize: "1.2em"}
    }
    return res;
}
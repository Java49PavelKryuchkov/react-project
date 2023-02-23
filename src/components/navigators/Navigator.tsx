import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { NavigatorProps } from "../../models/NavigatorProps"
import {Box, AppBar, Tabs, Tab, tabClasses} from "@mui/material"
import React, { useEffect } from "react"

export const Navigator: React.FC<NavigatorProps> = ({routes}) => {
    const [tabNumber, setTabNumber] = React.useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if(routes.length != 0) {
            navigate(routes[0].path)
        }
        setTabNumber(0);
    }, [routes])
    function changeNumber (event: any, number: number) {
        setTabNumber(number);
    }
    return <Box sx={{marginTop: "15vh"}}>
        <AppBar sx={{backgroundColor: "transparent"}}>
            <Tabs value={tabNumber >= routes.length ? 0 : tabNumber} onChange={changeNumber}>
                {getNavItems(routes)}
            </Tabs>
        </AppBar>
        <Outlet></Outlet>
    </Box>
}
function getNavItems (routes: {path:string, label: string}[]): React.ReactNode {
    return routes.map(e => <Tab component={NavLink} to={e.path} label={e.label}/>
    )
}
function getActiveProps(isActive: boolean) : React.CSSProperties {
    let res: React.CSSProperties = {};
    if (isActive) {
        res = {backgroundColor: "blue", color: "white", fontSize: "1.2em"}
    }
    return res;
}
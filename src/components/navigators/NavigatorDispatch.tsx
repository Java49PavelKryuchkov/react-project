import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { NavigatorProps } from '../../models/NavigatorProps'
import { Navigator } from "./Navigator";
import { NavigatorMobile } from "./NavigatorMobile";

export const NavigatorDispatch: React.FC<NavigatorProps> = ({routes}) => {
    const noMobile = useMediaQuery('(min-width:900px)');
    return <Box>
        {noMobile ? <Navigator routes={routes}/> : <NavigatorMobile routes={routes}/>}
    </Box>
}
import { Box, Typography } from "@mui/material";
import React from "react";
import { NavigatorProps } from "../../models/NavigatorProps";

export const NavigatorMobile: React.FC<NavigatorProps> = ({routes}) => {
    return <Box>
        {routes.map(r => <Typography>{JSON.stringify(r)}</Typography>)}
    </Box>
}
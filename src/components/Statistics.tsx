import { Box, Typography } from "@mui/material"
import { DataGrid, GridColumns } from "@mui/x-data-grid"
import React from "react"

export type Props = {
    field: string,
    title: string,
    object: any[]
}

const columns: GridColumns = [
    {
        field: "minValue", headerName: "Minimal Value", headerAlign: "center",
        align: "center", headerClassName: "header", flex: 1
    },
    {
        field: "maxValue", headerName: "Maximal Value", headerAlign: "center",
        align: "center", headerClassName: "header", flex: 1
    },
    {
        field: "avgValue", headerName: "Average Value", headerAlign: "center",
        align: "center", headerClassName: "header", flex: 1
    }
]

export const Statistics: React.FC<Props> = ({field, title, object}) => {
    let statistics: any = {id: 1};
    if(object.length > 0) {
    const localObject: {minValue: number, maxValue: number, avgValue: number} = 
    {
        minValue: object[0][field],
        maxValue: object[0][field],
        avgValue: 0
    };
    statistics = object.reduce((res, cur) => {
        if(res.minValue > cur[field]) {
            res.minValue = cur[field]
        } else if(res.maxValue < cur[field]) {
            res.maxValue = cur[field]
        }
        res.avgValue += cur[field];
        return res;
    }, localObject);
    statistics.id = 1;
    statistics.avgValue = Math.round(statistics.avgValue / object.length)
}
return <Box sx={{ width: "50vw", height: "30Vh" }}>
<Typography sx={{fontSize: "1.8em",
 fontWeight: "bold", textAlign: "center"}}>{title}</Typography>
<DataGrid columns={columns} rows={[statistics]} />
</Box>
}
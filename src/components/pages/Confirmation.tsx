import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { employeesActions } from "../../redux/employeesSlice";
type ConfirmProps = {
    title: string,
    content: string,
    confirmFn: (isOk: boolean) => void,
    open: boolean
}
export const Confirmation: React.FC<ConfirmProps> = ({title, confirmFn, content, open}) => {
  const handleClose = (isOk: boolean) => {
    confirmFn(isOk);
  };

    
    return <Box>
        <Dialog
    open={open}
    onClose={() => handleClose(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {content}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            OK
          </Button>
        </DialogActions>
  </Dialog>
        </Box>
}
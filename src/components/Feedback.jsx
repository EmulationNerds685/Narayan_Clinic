import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
  } from "@mui/material";
  
  function FeedbackDialog({ open, onClose, isError, message }) {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>{isError ? "Submission Error" : "Query Raised!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default FeedbackDialog;
  
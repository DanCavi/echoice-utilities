import { Alert, Snackbar } from "@mui/material"

const SnackbarAlert = ({
  message = 'Hello World',
  open,
  severity = 'info',
  onClose,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        { message }
      </Alert>
    </Snackbar>
  )
}
export default SnackbarAlert
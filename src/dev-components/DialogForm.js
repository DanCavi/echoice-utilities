import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material"
import CustomInput from "ui-component/Input/CustomInput";
import TituloStandar from "ui-component/Titulo/TituloStandar";
import { toCamelCase } from "dev-utils/functions";

const FormList = ({ 
  list = ['Name', 'Username', 'Password', 'Check password']
}) => {


  return (
    <>
      {list.map((field) => {
        const isPasswordField = /pass/i.test(field)
        return (
          <Grid item xs={6} key={field}>
            <TituloStandar titulo={field} key={field}/>
            <CustomInput name={toCamelCase(field)} type={isPasswordField ? "password" : "text"} key={field} />
          </Grid>
        )
      })}
    </>
  )
}

const DialogForm = (props) => {

  const {
    open,
    onClose,
    title = 'Form Title',
    contentText,
    handleSubmit = (formJson) => console.log('DialogFormJson: ', formJson),
    maxWidth = 'sm',
  } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    handleSubmit(formJson);
    onClose();
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={maxWidth}
        PaperProps={{
          component: "form",
          onSubmit: onSubmit,
        }}
      >

        <DialogTitle variant="h3">
          {title}
        </DialogTitle>

        <DialogContent>

          {contentText && (
            <DialogContentText>
              {contentText}
            </DialogContentText>
          )}

          <Grid container spacing={2} p={2}>
            <FormList />
          </Grid>

        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" type="submit">Confirm</Button>
        </DialogActions>


      </Dialog>
    </>
  )
}
export default DialogForm
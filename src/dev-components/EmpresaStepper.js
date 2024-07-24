import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material"
import CustomInput from "ui-component/Input/CustomInput";
import TituloStandar from "ui-component/Titulo/TituloStandar";
import { toCamelCase } from "dev-utils/functions";
import { useRef, useState } from "react";
import axios from "axios";

const steps = ['Required', 'Optional'];

const StepInputs = ({
  active = false,
  fields = ['Name', 'Email', 'Phone Number', 'Address']
}) => {
  return (

    <Grid container spacing={2} sx={{ p: 2, display: active ? 'flex' : 'none' }}>
      {fields.map((name) => (
        <Grid item xs={4} key={name}>
          <TituloStandar titulo={name} />
          <CustomInput name={toCamelCase(name)} />
        </Grid>
      ))}
    </Grid>
  )
}


const EmpresaStepper = ({
  activeStep = 0,
  handleBack,
  setRows,
  scrollInto,
  setSnackbar,
  formRef
}) => {

  
  const handleNext = () => {
    setInternalActiveStep(prev => prev + 1)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (internalActiveStep === steps.length - 1) {
      
      const data = new FormData(e.target)
      const formDataObject = { id: Date.now() };
      
      data.forEach((value, key) => {
        formDataObject[key] = value
      })
      setRows(prev => [...prev, formDataObject])
      e.target.reset()
      if (setSnackbar) {
        setSnackbar({
          open: true,
          message: 'New Company Added',
          severity: 'success'
        })
      }
      setInternalActiveStep(0)
      if (scrollInto) {
        scrollInto.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      
      
    } else {
      handleNext()
    }
  }
  
  const [internalActiveStep, setInternalActiveStep] = useState(activeStep);
  
  return (
    <Box
      component={'form'}
      sx={{ width: '100%' }}
      onSubmit={handleSubmit}
      ref={formRef}
    >


      <Stepper activeStep={internalActiveStep} alternativeLabel >
        {steps.map((label, i) => {
          const optionalProps = {};

          return (
            <Step key={label}>
              <StepLabel optional={i !== 0 ? <Typography variant="caption">Optional</Typography> : null} ></StepLabel>
            </Step>

          )
        })}
      </Stepper>

      <StepInputs active={internalActiveStep === 0} fields={['Name', 'Legal Identification', 'Country']} />
      <StepInputs active={internalActiveStep === 1} fields={['Email', 'Phone Number', 'Address']} />

      <Stack direction={'row'} justifyContent="space-between" >

        <Button
          variant="outlined"
          disabled={internalActiveStep === 0}
          onClick={handleBack ? handleBack : () => setInternalActiveStep(prev => prev - 1)}
        >
          Back
        </Button>
        <Button
          variant={internalActiveStep === steps.length - 1 ? 'contained' : 'outlined'}
          type='submit'
        >
          {internalActiveStep === steps.length - 1 ? 'Save' : 'Next'}


        </Button>

      </Stack>
    </Box>
  )

}


export default EmpresaStepper
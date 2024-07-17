import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Step, StepLabel, Stepper } from "@mui/material"
import CustomInput from "ui-component/Input/CustomInput";
import TituloStandar from "ui-component/Titulo/TituloStandar";
import { toCamelCase } from "dev-utils/functions";
import { useState } from "react";

const steps = ['Step 1', 'Step 2', 'Step 3'];

const StepOne = () => {
  
  const variables = ['Usuario', 'Password', 'Confirmar Password'];
  return (


    variables.map((name) => {
      return (
        <Grid item xs={4}>
          <TituloStandar titulo={name} />
          <CustomInput name={toCamelCase(name)} />
        </Grid>
      )
    })
  )
}

const StepTwo = () => {

  const vars = ['Nombre', 'Telefono', 'Dirección']

  return (

    vars.map((name) => {
      return (
        <Grid item xs={4}>
          <TituloStandar titulo={`${name}`} />
          <CustomInput name={toCamelCase(name)} />
        </Grid>
      )
    })

  )
}

const StepThree = () => {

  
  const variables = ['Campo', 'Campo', 'Campo'];

  return (


    variables.map((name) => {
      return (
        <Grid item xs={4}>
          <TituloStandar titulo={`${name}`} />
          <CustomInput name={toCamelCase(name)} />
        </Grid>
      )
    })
  )
}


const WSStepper = ({
  activeStep = 0,
  handleNext,
  handleBack,
}) => {


  const [internalActiveStep, setInternalActiveStep] = useState(activeStep);

  return (
    <Box sx={{ width: '100%' }}>


      <Stepper activeStep={internalActiveStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <Grid container spacing={2} sx={{ p: 2 }}>
        {internalActiveStep === 0 && <StepOne />}
        {internalActiveStep === 1 && <StepTwo />}
        {internalActiveStep === 2 && <StepThree />}
      </Grid>

      <Stack direction={'row'} justifyContent="space-between" >

        <Button
          variant="outlined"
          disabled={internalActiveStep === 0}
          onClick={handleBack ? handleBack : () => setInternalActiveStep(prev => prev - 1)}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          disabled={internalActiveStep === steps.length - 1}
          onClick={handleNext ? handleNext : () => setInternalActiveStep(prev => prev + 1)}
        >
          Next

        </Button>

      </Stack>
    </Box>
  )

}


export default WSStepper
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

function RowRadioGroup({ numVars }) {
  return (
    <FormControl>
      <FormLabel id='row-radio-group'>Variable {numVars}</FormLabel>
      <RadioGroup
        row
        name="row-radio-buttons-group"
      >

        <FormControlLabel value={0} control={<Radio />} label="Basic Auth" />
        <FormControlLabel value={1} control={<Radio />} label="Header" />
        <FormControlLabel value={2} control={<Radio />} label="Parameter" />
      </RadioGroup>
    </FormControl>
  )
}

const VariableField = ({ numVars }) => {

  return (
    <Grid container spacing={2} >
      <Grid item xs={4}>
        <RowRadioGroup numVars={numVars} />
      </Grid>
      <Grid item xs={4}>
        <TituloStandar titulo="Name variable" />
        <CustomInput />
      </Grid>
      <Grid item xs={4}>
        <TituloStandar titulo="Variable" />
        <CustomInput />
      </Grid>

    </Grid>
  )
}

export default VariableField
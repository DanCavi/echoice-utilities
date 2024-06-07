import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const RowRadioGroup = () => {
  return (
    <FormControl>
      <FormLabel>Variable 1</FormLabel>
      <RadioGroup
        row
      >

        <FormControlLabel value={0} control={<Radio />} label="Basic Auth" />
        <FormControlLabel value={1} control={<Radio />} label="Header" />
        <FormControlLabel value={2} control={<Radio />} label="Parameter" />
      </RadioGroup>
    </FormControl>
  )
}

const VariableField = () => {
  return (
    <Grid container spacing={2} >

      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6}>
      <CustomInput />
      </Grid>
      <Grid item xs={6}>
        <RowRadioGroup />
      </Grid>
      <Grid item xs={6}>

        <CustomInput />

      </Grid>

    </Grid>
  )
}
export default VariableField
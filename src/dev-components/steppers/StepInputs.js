import { Grid } from "@mui/material"
import { toCamelCase } from "dev-utils/functions"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const StepInputs = ({
  active = false,
  fields = ['Name', 'Email', 'Phone Number', 'Address'],
  columns = 3
}) => {
  return (
    <Grid 
      container 
      spacing={2}
      sx={{
        p: 2,
        display: active ? 'flex' : 'none',
      }}
    >

      {fields.map((name) => (
        <Grid
          item
          xs={12 / columns}
          key={name}
        >

          <TituloStandar
            titulo={name}
          />
          <CustomInput
            name={toCamelCase(name)}
          />

        </Grid>
      ))}

    </Grid>
  )
}
export default StepInputs
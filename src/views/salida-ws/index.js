import { Grid, Stack } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const SalidaWS = () => {
  return (
    <MainCard title="Salida Web Service">
      <Stack spacing={2}>
        <SubCard title="Crear Salida">

          <Grid container spacing={3}>

            <Grid item xs={8}>

            <TituloStandar titulo="Nombre Web Service"/>
            <CustomInput />
            </Grid>

            <Grid item xs={6}>

              <TituloStandar titulo="Tipo Web Service"/>
              <CustomInput />

            </Grid>

          </Grid>
        </SubCard>

        <SubCard title="Web Services List">

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default SalidaWS
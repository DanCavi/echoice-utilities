import { Grid, Stack } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import SelectStandar from "ui-component/Select/Select"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const SalidaWS = () => {
  return (
    <MainCard title="Salida Web Service">
      <Stack spacing={2}>
        <SubCard title="Crear Salida">

          <Grid container spacing={3}>

            <Grid item xs={10}>

            <TituloStandar titulo="Nombre Web Service"/>
            <CustomInput />
            </Grid>

            <Grid item xs={4}>

              <TituloStandar titulo="WSs"/>
              <SelectStandar datos={['CCS']} />

            </Grid>
            <Grid item xs={4}>

              <TituloStandar titulo="Variables"/>
              <SelectStandar


                datos={['rut_deudor, nombre_deudor, nro_docs_boletin, nro_docs_infocom']} 
                multiple 
                
              />

            </Grid>

          </Grid>
        </SubCard>

        <SubCard title="Web Services List">

          <DataGrid
            rows={[]}
            columns={[{
              field: 'name',
              headerName: 'Name',
              flex: .4
            }]}
            autoHeight
          />

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default SalidaWS
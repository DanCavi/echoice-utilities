import { Grid, Stack } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import SelectStandar from "ui-component/Select/Select"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const SystemOption = () => {
  return (
    <MainCard title="System Option">
      <Stack spacing={2}>
        <SubCard title='Configuración de Consultas Multihilo'>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TituloStandar titulo="Cantidad de Hilos" />
              <SelectStandar datos={Array.from({ length: 10 }, (_, i) => i + 1)} />
            </Grid>
          </Grid>

        </SubCard>
        <SubCard title='Configuración de Colas FIFO'>

        <Grid container spacing={2}>
            <Grid item xs={6}>
              <TituloStandar titulo="Tamaño de la Cola" />
              <SelectStandar datos={Array.from({ length: 10 }, (_, i) => i + 1)} />
            </Grid>
            <Grid item xs={6}>
              <TituloStandar titulo="Expiración en dias" />
              <SelectStandar datos={Array.from({ length: 10 }, (_, i) => i + 1)} />
            </Grid>

          </Grid>

        </SubCard>
        <SubCard title='Configuración de Seguridad'>

          
        <Grid item xs={6}>
              <TituloStandar titulo="Proveedores 2FA" />
              <SelectStandar datos={Array.from({ length: 10 }, (_, i) => i + 1)} />
            </Grid>

        </SubCard>
        <SubCard title='Configuración de timeout'>

          

        </SubCard>
        <SubCard title='Configuración de cache'>

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default SystemOption
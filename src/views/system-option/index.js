import { Stack } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"

const SystemOption = () => {
  return (
    <MainCard title="System Option">
      <Stack spacing={2}>
        <SubCard title='Configuración de timeout'>

        </SubCard>
        <SubCard title='Configuración de permisos'>

        </SubCard>
        <SubCard title='Configuración de logs'>

        </SubCard>
        <SubCard title='Configuración de cache'>

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default SystemOption
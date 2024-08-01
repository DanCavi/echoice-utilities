import { Stack } from "@mui/material"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import SelectStandar from "ui-component/Select/Select"

const VariableWorkshop = () => {
  return (
    <MainCard title="Variable Workshop">
      <Stack spacing={2}>
        <SubCard title="Taller de Variables">
          <Stack direction={'row'} spacing={2}>

            <SubCard>
              
            </SubCard>
            <SubCard>
              
            </SubCard>



          </Stack>
        </SubCard>
        <SubCard title="Repositorio de variables">
          
        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default VariableWorkshop
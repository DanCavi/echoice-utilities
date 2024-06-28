import { Stack } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import EmpresaStepper from "dev-components/EmpresaStepper"
import { INITIAL_ROWS_EMPRESAS } from "dev-constants"
import { useState } from "react"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"

const columns = [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 1
  }
]

const CrearEmpresa = () => {

  const [rows, setRows] = useState(INITIAL_ROWS_EMPRESAS)


  return (
    <MainCard title="Crear Empresa" >
      <Stack spacing={2}>
        
      <SubCard title="Stepper">
        <EmpresaStepper />
      </SubCard>
      <SubCard title="Lista de Empresas">
        <DataGrid
          rows={rows}
          columns={columns}
          />
      </SubCard>
    </Stack>
    </MainCard>
  )
}
export default CrearEmpresa
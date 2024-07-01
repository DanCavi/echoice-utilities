import { Stack } from "@mui/material"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { IconEdit, IconEye, IconPlugConnected, IconTrash } from "@tabler/icons-react"
import EmpresaStepper from "dev-components/EmpresaStepper"
import { INITIAL_ROWS_EMPRESAS } from "dev-constants"
import { useState } from "react"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"

const columns = [
  {
    field: 'name',
    headerName: 'Nombre Empresa',
    flex: 1
  },
  {
    field: 'identification',
    headerName: 'Identificación Legal',
    flex: 1
  },
  {
    field: 'country',
    headerName: 'País',
    flex: 1
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    flex: .6,
    type: 'actions',
    getActions: (params) => [
      <GridActionsCellItem 
        icon={<IconEye />} 
        label="Ver" 
        onClick={() => console.log(params)} 
      />,
      <GridActionsCellItem 
        icon={<IconPlugConnected />} 
        label="Conectar"
        onClick={() => console.log(params)} 
      />,
      <GridActionsCellItem
        icon={<IconEdit />}
        label="Editar"
        onClick={() => console.log(params)}
      />,
      <GridActionsCellItem
        icon={<IconTrash />} 
        label="Eliminar" 
        onClick={() => console.log(params)} 
      />,
    ]
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
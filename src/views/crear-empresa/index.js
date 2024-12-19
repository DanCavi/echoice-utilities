import { Alert, Box, Button, Grid, Snackbar, Stack } from "@mui/material"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { IconCheck, IconEdit, IconEye, IconMoodHappy, IconMoodSad, IconPlugConnected, IconPlugConnectedX, IconTrash } from "@tabler/icons-react"
import axios from "axios"
import EmpresaStepper from "dev-components/EmpresaStepper"
import SnackbarAlert from "dev-components/SnackbarAlert"
import { INITIAL_ROWS_EMPRESAS } from "dev-constants"
import { toCamelCase } from "dev-utils/functions"
import { useEffect, useRef, useState } from "react"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"


const CrearEmpresa = () => {

  const ref = useRef(null)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })

  const columns = [
    {
      field: 'name',
      headerName: 'Nombre Fuente',
      flex: .5
    },
    {
      field: 'legalIdentification',
      headerName: 'Descripcion',
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
      flex: .7,
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
          onClick={() => {
            setRows(prev => {
              return prev.map(row => {
                if (row.id === params.id) {
                  return {
                    ...row,
                    state: !row.state
                  }
                }
                return row
              })
            })
          }}
        />,
        <GridActionsCellItem
          icon={<IconEdit />}
          label="Editar"
          onClick={() => {
            const form = formRef.current
            Object.keys(params.row).forEach(key => {
              if (form[key]) {
                form[key].value = params.row[key]
              }
            })
            form.scrollIntoView({ behavior: 'smooth', block: 'center' })
            
          }}


        />,
        <GridActionsCellItem
          icon={<IconTrash />}
          label="Eliminar"
          onClick={() => {
            setRows(rows.filter(row => row.id !== params.id))
            setSnackbar({
              open: true,
              message: 'Deleted successfully',
              severity: 'success'
            })
          }}
        />,
      ]
    }
  ]


  const [rows, setRows] = useState(INITIAL_ROWS_EMPRESAS)

  return (
    <MainCard title="Administracion Expertdata" >
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10, 20]}
        slotProps={{
          toolbar: {
            showQuickFilter: true
          }
        }}
      />
    </MainCard>
  )
}
export default CrearEmpresa
import { Alert, Snackbar, Stack } from "@mui/material"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { IconEdit, IconEye, IconPlugConnected, IconTrash } from "@tabler/icons-react"
import axios from "axios"
import EmpresaStepper from "dev-components/EmpresaStepper"
import SnackbarAlert from "dev-components/SnackbarAlert"
import { INITIAL_ROWS_EMPRESAS } from "dev-constants"
import { useEffect, useRef, useState } from "react"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"


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
      headerName: 'Nombre Empresa',
      flex: 1
    },
    {
      field: 'legalIdentification',
      headerName: 'Identificación Legal',
      flex: 1
    },
    {
      field: 'country',
      headerName: 'País',
      flex: 1
    },
    {
      field: 'state',
      headerName: 'Activo',
      type: 'boolean',
      flex: .3
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
  const formRef = useRef(null)


  return (
    <MainCard title="Crear Empresa" >
      <Stack spacing={2}>

        <SubCard title="Stepper">
          <EmpresaStepper
            setRows={setRows}
            scrollInto={ref.current}
            setSnackbar={setSnackbar}
            formRef={formRef}
          />
        </SubCard>
        <SubCard title="Lista de Empresas"
        >
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
          />
          <div ref={ref}></div>
        </SubCard>
      </Stack>
      <SnackbarAlert 
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({...snackbar, open: false})}
      />
    </MainCard>
  )
}
export default CrearEmpresa
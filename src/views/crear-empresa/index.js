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
          onClick={() => {
            axios.delete(`http://10.8.0.3:3001/empresas/${params.id}`).then((res) => {
              if (res.status === 200) {
                setRows(rows.filter(row => row.id !== params.id))
                setSnackbar({
                  open: true,
                  message: 'Deleted successfully',
                  severity: 'success'
                })
              }
            })
          }}
        />,
      ]
    }
  ]


  useEffect(() => {
    axios.get("http://10.8.0.3:3001/empresas").then((res) => {
      setRows(res.data)
    })
  }, [])


  const [rows, setRows] = useState(INITIAL_ROWS_EMPRESAS)


  return (
    <MainCard title="Crear Empresa" >
      <Stack spacing={2}>

        <SubCard title="Stepper">
          <EmpresaStepper
            setRows={setRows}
            scrollInto={ref.current}
            setSnackbar={setSnackbar}
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
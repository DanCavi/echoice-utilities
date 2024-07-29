import { Button, Checkbox, Grid, Stack } from "@mui/material"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid"
import { IconDeviceFloppy, IconEdit, IconEye, IconPlugConnected, IconTrash } from "@tabler/icons-react"
import { toCamelCase } from "dev-utils/functions"
import { useState } from "react"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const Perfiles = () => {

  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'Root',
      state: true
    }
  ])

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })


  const fields = ['Nombre', 'Abreviatura']
  const modules = ['Dashboard', 'Crear Empresa', 'Data Source Integration', 'Salida Web Service', 'Web Service Users', 'Perfiles', 'Consumo', 'Web Service Generation', 'Variable Workshop', 'Test']

  const columns = [
    {
      field: 'name',
      headerName: 'Nombre',
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

  return (
    <MainCard title="Perfiles">
      <Stack spacing={2}>
        <SubCard title="Crear Perfil">
          <Stack spacing={2}>

          <SubCard title="Información">
            <Stack spacing={2}>

            {fields.map((name) => (
              <div>
              <TituloStandar key={name} titulo={name} />
              <CustomInput name={toCamelCase(name)} />
              </div>
            ))}
            </Stack>

          </SubCard>

          <SubCard title="Recursos">
            <Grid container spacing={2}>

            <Grid item xs={4}>
              <TituloStandar  titulo="Modulo" />

            </Grid>
            <Grid item xs={2}>
              <TituloStandar titulo="Crear" />
            </Grid>
            <Grid item xs={2}>
              <TituloStandar titulo="Leer" />
            </Grid>
            <Grid item xs={2}>
              <TituloStandar titulo="Actualizar" />
            </Grid>
            <Grid item xs={2}>
              <TituloStandar titulo="Borrar" />
            </Grid>

            {modules.map((name) => (
              <>
              <Grid item xs={4}>
                <TituloStandar key={name} titulo={name} />
              </Grid>
              {Array.from({ length: 4}).map(() => (
                <Grid item xs={2}>
                  <Checkbox />
                </Grid>
              ))}
              </>
            ))}

            </Grid>
          </SubCard>
          
          <Button variant="contained" startIcon={<IconDeviceFloppy />}>Crear Perfil</Button>
          </Stack>
        </SubCard>
        <SubCard title="Lista Perfiles">


          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
          />

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default Perfiles
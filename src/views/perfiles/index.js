import { Button, Grid, Stack } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { IconDeviceFloppy } from "@tabler/icons-react"
import { toCamelCase } from "dev-utils/functions"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import TituloStandar from "ui-component/Titulo/TituloStandar"

const Perfiles = () => {


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


            {modules.map((name) => (
              <Grid item xs={12}>
                <TituloStandar key={name} titulo={name} />
              </Grid>
            ))}

            </Grid>
          </SubCard>
          
          <Button variant="contained" startIcon={<IconDeviceFloppy />}>Crear Perfil</Button>
          </Stack>
        </SubCard>
        <SubCard title="Lista Perfiles">


          <DataGrid
            rows={[]}
            columns={columns}
            autoHeight
          />

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default Perfiles
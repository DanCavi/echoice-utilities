import { Button, Grid, IconButton, Stack } from "@mui/material"
import { toCamelCase } from "dev-utils/functions"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"
import CustomInput from "ui-component/Input/CustomInput"
import SelectStandar from "ui-component/Select/Select"
import TituloStandar from "ui-component/Titulo/TituloStandar"
import { IconPlus, IconMinus, IconCircleX, IconSlash, IconParentheses, IconParenthesesOff } from "@tabler/icons-react"
import { DataGrid } from "@mui/x-data-grid"

const VariableWorkshop = () => {

  const icons = {
    '+': <IconPlus />,
    '-': <IconMinus />,
    'x': <IconCircleX />,
    '/': <IconSlash />,
    '(': <IconParentheses />,
    ')': <IconParenthesesOff />
  }

  const fields = ['Tipo Persona', 'País', 'Origen Variable', 'Variable']

  return (
    <MainCard title="Variable Workshop">
      <Stack spacing={2}>
        <SubCard title="Taller de Variables">
          <Stack direction={'row'} spacing={2}>

            <SubCard sx={{ flex: 1 }}>
              <Grid container spacing={2}>

                {fields.map((field) => (
                  <Grid item xs={12}>
                    <TituloStandar titulo={field} />
                    <CustomInput name={toCamelCase(field)} />
                  </Grid>
                ))}
                <Grid item xs={6}>
                  <TituloStandar titulo="Operador Aritmético" />
                  <Stack direction={'row'} flexWrap={'wrap'}>
                    {Object.keys(icons).map((key) => (
                      <IconButton key={key} onClick={() => console.log(icons[key])} size="large">
                        {icons[key]}
                      </IconButton>
                    ))}
                  </Stack>
                </Grid>


                <Grid item xs={6}>
                  <TituloStandar titulo="Constante K" />
                  <CustomInput name="kConstant" />
                </Grid>


                <Grid item xs={12}>
                  <Button variant="contained" fullWidth> Añadir Variable </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth> Añadir Constante </Button>
                </Grid>


              </Grid>
            </SubCard>
            <SubCard  sx={{ flex: 1 }}>

                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TituloStandar titulo="Nombre Variable" />
                        <CustomInput />
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth> Nueva Variable </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button variant="contained" fullWidth> Validar Sintaxis </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button variant="contained" fullWidth> Guardar </Button>
                      </Grid>
                    </Grid>

            </SubCard>



          </Stack>
        </SubCard>
        <SubCard title="Repositorio de variables">

          <DataGrid
            autoHeight
            columns={[
              {
                field: 'nombre',
                headerName: 'Nombre',
                flex: 1
              },
              {
                field: 'tipo',
                headerName: 'Tipo',
                flex: 1
              },
              {
                field: 'creada',
                headerName: 'Creada',
                flex: 1
              },
              {
                field: 'probada',
                headerName: 'Probada',
                flex: 1
              },
              {
                field: 'state',
                headerName: 'State',
                flex: 1,
                type: 'boolean'
              },
              {
                field: 'actions',
                headerName: 'Acciones',
                flex: .3,
                type: 'actions',
              }
            ]}
            rows={[]}
          />

        </SubCard>
      </Stack>
    </MainCard>
  )
}
export default VariableWorkshop
import { Button, Divider, Grid, Paper, Stack, Tab, Tabs } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconPlus, IconTrash } from '@tabler/icons-react';
import JsonField from 'dev-components/JsonField';
import VariableField from 'dev-components/VariableField';
import { useState } from 'react';
import CustomInput from 'ui-component/Input/CustomInput';
import SelectStandar from 'ui-component/Select/Select';
import TituloStandar from 'ui-component/Titulo/TituloStandar';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const EXAMPLE_SOAP = `<?xml version="1.0"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/" soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">
  <soap:Header>
    ...
  </soap:Header>
  <soap:Body>
    ...
    <soap:Fault>
      ...
    </soap:Fault>
  </soap:Body>
</soap:Envelope>`;

const EXAMPLE_REST_POST = `{
  "name": "John",
  "age": 30
}`;

const DataSourceIntegration = () => {

  const [tipoServicio, setTipoServicio] = useState('');
  const [numVars, setNumVars] = useState(1);
  const [numResponseVars, setNumResponseVars] = useState(1);
  const [value, setValue] = useState(0);

  return (
    <MainCard title="Data Soure Integration">
      {/* <Grid container spacing={3}>
        <Grid item xs={4}>

          <TituloStandar titulo="Nombre de Origen" />
          <SelectStandar datos={['CCS']} />
        </Grid>
        <Grid item xs={4}>

          <TituloStandar titulo="Nombre del Servicio" />
          <CustomInput />
        </Grid>
        <Grid item xs={4}>

          <TituloStandar titulo="Tipo Persona" />
          <SelectStandar datos={['Natural', 'Jurídica', 'Ambas']} />
        </Grid>
      </Grid> */}

      <SubCard title="Crear Servicio">

        <SubCard title="Información">
          <Grid container spacing={3}>
            <Grid item xs={4}>

              <TituloStandar titulo="Nombre de Origen" />
              <SelectStandar datos={['CCS']} />

            </Grid>
            <Grid item xs={4}>

              <TituloStandar titulo="Nombre del Servicio" />
              <CustomInput />

            </Grid>
            <Grid item xs={4}>

              <TituloStandar titulo="Versión" />
              <CustomInput />

            </Grid>

            <Grid item xs={12}>

              <TituloStandar titulo="URL" />
              <CustomInput />

            </Grid>

          </Grid>
        </SubCard>


        <SubCard title="Parametros de entrada" sx={{ mt: 2 }} >
          <Stack direction="column" spacing={2} p={2}>
            <div>
              <TituloStandar titulo="Tipo de Servicio" />
              <SelectStandar datos={['Soap', 'REST-GET', 'REST-POST']} value={tipoServicio} onChange={setTipoServicio} />
            </div>

            {tipoServicio === 'Soap' && (
              <CustomInput multiline placeholder={EXAMPLE_SOAP} minRows={15} />
            )}

            {tipoServicio === 'REST-GET' && (
              <>
              <DataGrid
                rows={[
                  {
                    id: 1,
                    key: 'Content-Type',
                    value: 'application/json'
                  },
                  {
                    id: 2,
                    key: 'Authorization',
                    value: 'Bearer token'
                  }
                ]}
                columns={[
                  {
                    field: 'key',
                    headerName: 'Key',
                    flex: 1
                  },
                  {
                    field: 'value',
                    headerName: 'Value',
                    flex: 1
                  }
                ]}
                checkboxSelection
                disableSelectionOnClick
              />
              {Array.from({ length: numVars }, (_, i) => (
                <VariableField key={i} numVars={i + 1} />
              ))}
              <Stack direction="row" spacing={2} px={4} >
                <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
                {numVars > 1 && <Button variant="outlined" startIcon={<IconTrash />} color="error" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>}
              </Stack>
            </>
            )

            }

            {tipoServicio === 'REST-POST' && (
              <Paper elevation={3} sx={{ width: '100%', p: 2 }}>
                <Stack spacing={2}>
                  <Tabs value={value} onChange={(_, value) => setValue(value)}>
                    <Tab label="Headers" />
                    <Tab label="Body" />
                  </Tabs>

                  {/* Headers */}

                  {value === 0 && (
                    <>
                      <DataGrid
                        rows={[
                          {
                            id: 1,
                            key: 'Content-Type',
                            value: 'application/json'
                          }
                        ]}
                        columns={[
                          {
                            field: 'key',
                            headerName: 'Key',
                            flex: 1
                          },
                          {
                            field: 'value',
                            headerName: 'Value',
                            flex: 1
                          }
                        ]}
                        checkboxSelection
                        disableSelectionOnClick
                      />
                      {Array.from({ length: numVars }, (_, i) => (
                        <VariableField key={i} numVars={i + 1} />
                      ))}
                      <Stack direction="row" spacing={2} px={4} >
                        <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
                        {numVars > 1 && <Button variant="outlined" startIcon={<IconTrash />} color="error" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>}
                      </Stack>
                    </>
                  )}


                  {/* Body */}

                  {value === 1 && (
                    <>
                      <CustomInput multiline placeholder={EXAMPLE_REST_POST} minRows={5} />
                      {Array.from({ length: numVars }, (_, i) => (
                        <VariableField key={i} numVars={i + 1} />
                      ))}
                      <Stack direction="row" spacing={2} px={4} >
                        <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
                        {numVars > 1 && <Button variant="outlined" startIcon={<IconTrash />} color="error" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>}
                      </Stack>
                    </>
                  )}

                </Stack>
              </Paper>
              // <CustomInput multiline placeholder={EXAMPLE_REST_POST} minRows={5} />
              // <JsonField />
            )}




          </Stack>



        </SubCard>

      </SubCard>


      <Stack direction="row" spacing={2} justifyContent={'center'} sx={{ my: 2, mx: 40 }}>
        <div
          style={{ width: '60%' }}

        >
          <Button fullWidth variant="contained">Ok</Button>

        </div>
        <div
          style={{ width: '60%' }}
        >

          <Button fullWidth variant="contained" >Reset</Button>
        </div>
      </Stack>

      <SubCard title="Servicios" sx={{ mt: 2, p: 2 }}>


        <DataGrid
          columns={[{
            field: 'name',
            headerName: 'Nombre Servicio',
            flex: 1
          },
          {
            field: 'type',
            headerName: 'Tipo Persona',
            flex: 1
          },
          {
            field: 'bureau',
            headerName: 'Bureau',
            flex: 1
          },
          {
            field: 'state',
            headerName: 'Estado',
            flex: 1
          },
          {
            field: 'actions',
            headerName: 'Acciones',
            type: 'actions',
          }]}
          rows={[]}
          autoHeight
        />

      </SubCard>
    </MainCard>
  );
};

export default DataSourceIntegration;

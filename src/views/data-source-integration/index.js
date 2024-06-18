import { Button, Grid, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { IconPlus, IconTrash } from '@tabler/icons-react';
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

  return (
    <MainCard title="Data Soure Integration">
      <Grid container spacing={3}>
        <Grid item xs={4}>

          <TituloStandar titulo="Nombre de Origen" />
          <SelectStandar datos={['Sinacofi', 'Fuente Tercero', 'Equifax', 'TransUnion', 'Siisa']} />
        </Grid>
        <Grid item xs={4}>

          <TituloStandar titulo="Nombre del Servicio" />
          <CustomInput />
        </Grid>
        <Grid item xs={4}>

          <TituloStandar titulo="Tipo Persona" />
          <SelectStandar datos={['Natural', 'Jurídica', 'Ambas']} />
        </Grid>
        <Grid item xs={4}>

          <TituloStandar titulo="Tipo de Vigencia" />
          <SelectStandar datos={['Cantidad de Dias', 'Dias de la semana']} />

        </Grid>
        <Grid item xs={4}>
          <TituloStandar titulo="Cantidad de Dias" />
          <CustomInput />
        </Grid>
        <Grid item xs={4}>
          <TituloStandar titulo="URL" />
          <CustomInput />
        </Grid>
      </Grid>
      <SubCard title="Parametros de entrada" sx={{ mt: 2 }} >
        <Stack direction="column" spacing={2} p={2}>
          <div>
            <TituloStandar titulo="Tipo de Servicio" />
            <SelectStandar datos={['Soap', 'REST-GET', 'REST-POST']} value={tipoServicio} onChange={(e) => setTipoServicio(e.target.value)} />
          </div>

          {tipoServicio === 'Soap' && (
            <CustomInput multiline placeholder={EXAMPLE_SOAP} minRows={15} />
          )}

          {tipoServicio === 'REST-POST' && (
            <CustomInput multiline placeholder={EXAMPLE_REST_POST} minRows={5} />
          )}


          {Array.from({ length: numVars }, (_, i) => (
            <VariableField key={i} numVars={i + 1} />
          ))}

        </Stack>

        <Stack direction="row" spacing={2} px={4} >
          <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
          {numVars > 1 && <Button variant="outlined" startIcon={<IconTrash />} color="error" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>}
        </Stack>

      </SubCard>

      <SubCard title="Parametros de Salida" sx={{ mt: 2 }}>
        <Stack direction="column" spacing={2} p={2}>
          <div>
            <TituloStandar titulo="Response" />
            <SelectStandar datos={['JSON', 'XML']} />
          </div>
          {Array.from({ length: numResponseVars }, (_, i) => (
            <VariableField key={i} numVars={i + 1} />
          ))}
        </Stack>


        <Stack direction="row" spacing={2} px={4} >
          <Button variant="outlined" startIcon={<IconPlus />} onClick={() => setNumResponseVars(numResponseVars + 1)}>Añadir Variable</Button>
          {numResponseVars > 1 && <Button variant="outlined" startIcon={<IconTrash />} color="error" onClick={() => setNumResponseVars(numResponseVars - 1)}>Eliminar Variable</Button>}
        </Stack>

      </SubCard>


      <Stack direction="row" spacing={2} justifyContent={'center'} sx={{ my: 2, mx: 40 }}>
        <div
          style={{ width: '60%'}}
          
        >
        <Button fullWidth variant="contained">Ok</Button>

        </div>
        <div
          style={{ width: '60%'}}
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

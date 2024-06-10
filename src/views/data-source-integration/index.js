import { Button, Grid, Stack } from '@mui/material';
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

        <Stack direction="row" spacing={2} >
          <Button variant="contained" onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
          {numVars > 1 && <Button variant="contained" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>}
        </Stack>

      </SubCard>

      <SubCard title="Parametros de Salida" sx={{ mt: 2 }}>
          <Stack direction="column" spacing={2} p={2}>
            <div>
              <TituloStandar titulo="Response" />
              <SelectStandar datos={['JSON', 'XML']} />
            </div>
          </Stack>

          {Array.from({ length: numResponseVars }, (_, i) => (
            <VariableField key={i} numVars={i + 1} />
          ))}

          <Stack direction="row" spacing={2} >
            <Button variant="contained" onClick={() => setNumResponseVars(numResponseVars + 1)}>Añadir Variable</Button>
            {numResponseVars > 1 && <Button variant="contained" onClick={() => setNumResponseVars(numResponseVars - 1)}>Eliminar Variable</Button>}
          </Stack>


      </SubCard>

    </MainCard>
  );
};

export default DataSourceIntegration;

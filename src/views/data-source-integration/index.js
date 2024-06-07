import { Button, Grid, Stack } from '@mui/material';
import VariableField from 'dev-components/charts/VariableField';
import { useState } from 'react';
import CustomInput from 'ui-component/Input/CustomInput';
import SelectStandar from 'ui-component/Select/Select';
import TituloStandar from 'ui-component/Titulo/TituloStandar';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const DataSourceIntegration = () => {

  const [numVars, setNumVars] = useState(0);
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
        <TituloStandar titulo="Tipo de Servicio" />
        <SelectStandar datos={['Soap', 'REST-GET', 'REST-POST']}/>

        {Array.from({ length: numVars }, (_, i) => (
          <VariableField key={i} />
        ))}
        
        <Stack direction="row" spacing={2} >
        <Button variant="outlined" onClick={() => setNumVars(numVars + 1)}>Añadir Variable</Button>
        <Button variant="outlined" onClick={() => setNumVars(numVars - 1)}>Eliminar Variable</Button>
        </Stack>

      </SubCard>
      
    </MainCard>
  );
};

export default DataSourceIntegration;

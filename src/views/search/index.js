import { Button, Divider, Paper, Stack, Tab, Tabs } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import CustomInput from 'ui-component/Input/CustomInput';
import TituloStandar from 'ui-component/Titulo/TituloStandar';
import MainCard from 'ui-component/cards/MainCard';

const SearchRut = () => {

  const [value, setValue] = useState(0);

  return (
    <MainCard title="Search Rut">

      <Paper elevation={3} sx={{ width: '100%', p: 2 }}>
        <Stack spacing={2}>

          <Stack direction={'row'} spacing={2}>
            <div>
              <TituloStandar titulo="Metodo" />
              <CustomInput />
            </div>
            <div style={{ flex: 1 }}>
              <TituloStandar titulo="URL" />
              <CustomInput />
            </div>
            <div>
              <TituloStandar titulo="-" />
              <Button variant="contained">Enviar</Button>
            </div>
          </Stack>
          <Divider />
          <Tabs value={value} onChange={(_, value) => setValue(value)}>
            <Tab label="Headers" />
            <Tab label="DNI Pruebas" />
            <Tab label="Body" />
            <Tab label="Response" />
          </Tabs>

          {/* Headers */}

          {value === 0 && <DataGrid
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
          />}


          {/* DNI Pruebas */}

            {value === 1 && <DataGrid
              rows={[]}
              columns={[
                {
                  
                }
              ]}
              autoHeight
            />}




          {/* Body */}

            {value === 2 && <CustomInput multiline minRows={6}/>}

          {/* Response */}

            {value === 3 && <CustomInput multiline minRows={6}/>}

        </Stack>
      </Paper>

    </MainCard>
  );
};

export default SearchRut;

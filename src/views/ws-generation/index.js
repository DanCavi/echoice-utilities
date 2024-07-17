import { Button, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TreeView from 'dev-components/TreeView';
import WSStepper from 'dev-components/WSStepper';
import { useState } from 'react';
import CustomInput from 'ui-component/Input/CustomInput';
import SelectStandar from 'ui-component/Select/Select';
import TituloStandar from 'ui-component/Titulo/TituloStandar';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
const WSGeneration = () => {

  const [numUsers, setNumUsers] = useState(1);


  return (
    <MainCard title="Web Service Generation">
      <Stack spacing={2}>

        <SubCard title="Generar Web Service">

          <WSStepper />

        </SubCard>

        <SubCard title="Web Services List">
          <DataGrid
            columns={[
              {
                field: 'name',
                headerName: 'Name',
                flex: .4
              },
              {
                field: 'ruta',
                headerName: 'Ruta',
                flex: 1
              },
              {
                field: 'users',
                headerName: 'Users',
                type: 'actions',
                flex: .4,
              }
            ]}
            rows={[

            ]}
            autoHeight
          />
        </SubCard>
      </Stack>
    </MainCard>
  );
};

export default WSGeneration;

import { Button, Stack } from '@mui/material';
import { RichTreeView } from '@mui/x-tree-view';
import TreeView from 'dev-components/TreeView';
import { useState } from 'react';
import CustomInput from 'ui-component/Input/CustomInput';
import SelectStandar from 'ui-component/Select/Select';
import TituloStandar from 'ui-component/Titulo/TituloStandar';
import MainCard from 'ui-component/cards/MainCard';

const USERS = ['John Doe', 'Alex John', 'Ajay Dev', 'Mary Alex', 'John Doe', 'Alex John', 'Ajay Dev', 'Mary Alex'];

const WSGeneration = () => {

  const [numUsers, setNumUsers] = useState(1);


  return (
    <MainCard title="Web Service Generation">

      <Stack spacing={2}>


      {
        Array.from({ length: numUsers }, (_, i) => (
          <div>
            <TituloStandar key={`${i}-title`} titulo={`Usuario ${i + 1}`} />
            <SelectStandar key={`${i}-select`} datos={USERS} />
          </div>
        )
      )
    }
    </Stack>

    <Stack direction={'row'} spacing={2} my={1}>

      {numUsers < USERS.length && <Button variant='outlined' onClick={() => setNumUsers(numUsers + 1)}>Add User</Button>}
      {numUsers > 1 && <Button variant='outlined' onClick={() => setNumUsers(numUsers - 1)}>Remove User</Button>}

    </Stack>

    <TituloStandar titulo="Nombre" />
    <CustomInput />

    <TreeView />
      
    </MainCard>
  );
};

export default WSGeneration;

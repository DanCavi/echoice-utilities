import { Button } from '@mui/material';
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
      {
        Array.from({ length: numUsers }, (_, i) => (
          <>
            <TituloStandar key={`${i}-title`} titulo={`Usuario ${i + 1}`} />
            <SelectStandar key={`${i}-select`} datos={USERS} />
          </>
        )
      )
      }
      <Button variant='outlined' onClick={() => setNumUsers(numUsers + 1)}>Add User</Button>
      {numUsers > 1 && <Button variant='outlined' onClick={() => setNumUsers(numUsers - 1)}>Remove User</Button>}
      
    </MainCard>
  );
};

export default WSGeneration;

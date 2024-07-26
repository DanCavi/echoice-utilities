import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { IconBan, IconEdit } from '@tabler/icons-react';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { INITIAL_ROWS_USERS } from 'dev-constants';


import DialogForm from 'dev-components/DialogForm';
import SubCard from 'ui-component/cards/SubCard';
import { Stack } from '@mui/material';
import UsuarioStepper from 'dev-components/UsuarioStepper';

const COLUMNS = [
  {
    field: 'name',
    headerName: 'Nombre Usuario',
    flex: 1
  },
  {
    field: 'user',
    headerName: 'Usuario',
    flex: 1
  },
  {
    field: 'state',
    headerName: 'Estado',
    flex: 1,
    type: 'boolean',
    valueGetter: (value) => (value === 'Active')
  },
  {
    field: 'actions',
    headerName: 'Acciones',
    flex: .3,
    type: 'actions',
    getActions: (params) => [
      <GridActionsCellItem
        icon={<IconBan />}
        label="Desactivar"
        onClick={() => console.log(params)}
      />,
      <GridActionsCellItem
        icon={<IconEdit />}
        label="Editar"
        onClick={() => console.log(params)}
      />
    ]
  }
];

const WSUsers = () => {

  const [rows, setRows] = useState(INITIAL_ROWS_USERS);
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <MainCard title="Web Service Users" sx={{ p: 2 }} >

      <Stack spacing={2}>

        <SubCard title="Crear Usuario">

          <UsuarioStepper />

        </SubCard>


        <SubCard title="Lista de Usuarios">

          <DataGrid
            rows={rows}
            columns={COLUMNS}
            autoHeight
          />
        </SubCard>

      </Stack>
      <DialogForm open={open} onClose={() => setOpen(false)} />

    </MainCard>
  );
};

export default WSUsers;

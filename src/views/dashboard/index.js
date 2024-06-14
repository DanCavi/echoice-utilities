import { Box, Grid, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import BarChart from 'dev-components/charts/BarChart';
import LineChart from 'dev-components/charts/LineChart';
import PieChart from 'dev-components/charts/PieChart';
import SelectStandar from 'ui-component/Select/Select';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const Dashboard = () => {
  
  const columns = [
    { field: 'origin-name', headerName: 'Nombre Origen', flex: 1 },
    { field: 'service', headerName: 'Servicio', flex: 1 },
    { field: 'user', headerName: 'Usuario', flex: 1 },
    { field: 'date', headerName: 'Fecha', flex: 1 },
    { field: 'type', headerName: 'Tipo', flex: .5 },
  ]

  return (
    <MainCard title="Dashboard">
      <Stack spacing={2}>
        <SubCard title="Consultas HBES">
          <Box p={2}>
            <Stack p={2} spacing={2} justifyContent={"space-around"} direction="row">
              <SelectStandar flex datos={['Todos', 'Sinacofi', 'Equifax', 'TransUnion', 'Siisa']} />
              <SelectStandar flex datos={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']} />
              <SelectStandar flex datos={['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']} />
            </Stack>
            <DataGrid
              columns={columns}
              rows={[]}
              autoHeight
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 }}
              }}
              pageSizeOptions={[5, 10, 20]}
              slotProps={{
                toolbar: {
                  showQuickFilter: true
                }
              }}
              slots={{ toolbar: GridToolbar }}
              />   
          </Box>
        </SubCard>
        <SubCard title="Consultas Bureau">
          <LineChart />
        </SubCard>
        <SubCard title="Bureau vs Cache">
          <BarChart />
        </SubCard>
        <SubCard title="Porcentaje de Almacenamiento">
          <PieChart />
        </SubCard>
      </Stack>
    </MainCard>
  );
};

export default Dashboard;

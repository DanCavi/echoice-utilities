import { Box, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import BarChart from 'dev-components/charts/BarChart';
import LineChart from 'dev-components/charts/LineChart';
import PieChart from 'dev-components/charts/PieChart';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

const Dashboard = () => {

  return (
    <MainCard title="Dashboard">
      <Stack spacing={2}>
        <SubCard title="Consultas HBES">
          <Box p={2}>
            <DataGrid rows={[{ id: 1 }]} columns={[{ field: 'id'}]} autoHeight />   
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

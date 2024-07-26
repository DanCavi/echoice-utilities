import { Box, Grid, Stack } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import BarChart from 'dev-components/charts/BarChart';
import LineChart from 'dev-components/charts/LineChart';
import PieChart from 'dev-components/charts/PieChart';
import SelectStandar from 'ui-component/Select/Select';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import TogglePeriod from 'dev-components/toggleButtons/togglePeriod';


const Dashboard = () => {
  
 

  return (
    <MainCard title="Dashboard">

      <TogglePeriod />

      <Stack spacing={2}>

        <SubCard title="Consultas Bureau" sx={{ flex: 1 }}>
          <LineChart />
        </SubCard>
        <SubCard title="Bureau vs Cache">
          <BarChart />
        </SubCard>
        
      </Stack>
    </MainCard>
  );
};

export default Dashboard;

import { Stack } from '@mui/material';
import BarChart from 'dev-components/charts/BarChart';
import LineChart from 'dev-components/charts/LineChart';
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
        <Stack direction={'row'} spacing={2}> 

          <SubCard title='Grafico 1' sx={{ flex: 1 }}>

          </SubCard>
          <SubCard title='Grafico 2' sx={{ flex: 1 }}>

          </SubCard>
          <SubCard title='Grafico 3' sx={{ flex: 1 }}>

          </SubCard>
          <SubCard title='Grafico 4' sx={{ flex: 1 }}>

          </SubCard>

        </Stack>

      </Stack>
    </MainCard>
  );
};

export default Dashboard;

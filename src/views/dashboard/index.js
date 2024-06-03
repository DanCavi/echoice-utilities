import { Stack } from '@mui/material';
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

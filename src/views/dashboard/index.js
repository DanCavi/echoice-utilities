import { Stack } from "@mui/material";
import BarChart from "dev-components/charts/BarChart";
import LineChart from "dev-components/charts/LineChart";
import MainCard from "ui-component/cards/MainCard";
import SubCard from "ui-component/cards/SubCard";
import TogglePeriod from "dev-components/toggleButtons/togglePeriod";
import RpaCard from "./RpaCard";

const ACTIVES_RPAS_EXAMPLE = [
  {
    title: "SRI bot",
    description: "Controlador de operaciones relacionadas al Sri de Ecuador",
    uprate: 30,
    avgTime: 3.2,
  },
  {
    title: "SII bot",
    description: "Servicio de Impuestos Internos",
    uprate: 89,
    avgTime: 5,
  },
  {
    title: "Mercado Publico bot",
    description: "Controlador de consultas relacionadas al sitio de Mecado Público de Chile",
    uprate: 40,
    avgTime: 2.5,
  }
]

const Dashboard = () => {
  return (
    <MainCard title="Fuentes Disponibles">
      {/* <TogglePeriod /> */}

      <Stack spacing={2}>
        <SubCard title="RPAs Activos">
          <Stack direction={"row"} spacing={2}>
            {ACTIVES_RPAS_EXAMPLE.map((rpa) => (
              <RpaCard {...rpa} />
            ))}
            {/* <RpaCard
              title="SRI bot"
              description="Controlador de operaciones relacionadas al Sri de Ecuador"
              uprate={30}
              avgTime={3.2}
            />
            <RpaCard
              title="SII bot"
              description="Servicio de Impuestos Internos"
              uprate={89}
              avgTime={5}
            /> */}
          </Stack>
        </SubCard>
        <SubCard title="Uprate RPAs" sx={{ flex: 1 }}>
          <LineChart />
        </SubCard>
        <SubCard title="Errores vs Exitos">
          <BarChart />
        </SubCard>
      </Stack>
    </MainCard>
  );
};

export default Dashboard;

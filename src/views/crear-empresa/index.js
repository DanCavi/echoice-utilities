import { DataGrid } from "@mui/x-data-grid"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"

const columns = [
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 1
  }
]

const CrearEmpresa = () => {


  return (
    <MainCard title="Crear Empresa">
      <SubCard title="Lista de Empresas">
        <DataGrid
          rows={[]}
          columns={columns}
        />
      </SubCard>
    </MainCard>
  )
}
export default CrearEmpresa
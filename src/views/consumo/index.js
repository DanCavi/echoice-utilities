import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import MainCard from "ui-component/cards/MainCard"
import SubCard from "ui-component/cards/SubCard"

const Consumo = () => {

  const columns = [
    { field: 'origin-name', headerName: 'Nombre Origen', flex: 1 },
    { field: 'service', headerName: 'Servicio', flex: 1 },
    { field: 'user', headerName: 'Usuario', flex: 1 },
    { field: 'date', headerName: 'Fecha', flex: 1 },
    { field: 'type', headerName: 'Tipo', flex: .5 },
  ]


  return (
    <MainCard title="Consumo">
      <SubCard title="Consultas HBES">
          <Box p={2}>
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
    </MainCard>
  )
}
export default Consumo
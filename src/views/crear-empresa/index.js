import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  Paper,
  Snackbar,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  IconCheck,
  IconEdit,
  IconEye,
  IconMoodHappy,
  IconMoodSad,
  IconPlugConnected,
  IconPlugConnectedX,
  IconTrash,
} from "@tabler/icons-react";
import axios from "axios";
import EmpresaStepper from "dev-components/EmpresaStepper";
import SnackbarAlert from "dev-components/SnackbarAlert";
import { INITIAL_ROWS_EMPRESAS } from "dev-constants";
import { toCamelCase } from "dev-utils/functions";
import { useEffect, useRef, useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import SubCard from "ui-component/cards/SubCard";
import CustomInput from "ui-component/Input/CustomInput";
import SelectStandar from "ui-component/Select/Select";
import TituloStandar from "ui-component/Titulo/TituloStandar";

const CrearEmpresa = () => {
  const [openPostman, setOpenPostman] = useState(false);
  const [value, setValue] = useState(0);

  const handlePostman = () => {
    setOpenPostman(true);
  };

  const ref = useRef(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const columns = [
    {
      field: "name",
      headerName: "Nombre Fuente",
      flex: 0.5,
    },
    {
      field: "legalIdentification",
      headerName: "Descripcion",
      flex: 1,
    },
    {
      field: "country",
      headerName: "País",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 0.7,
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<IconEye />}
          label="Ver"
          onClick={handlePostman}
        />,
        <GridActionsCellItem
          icon={<IconPlugConnected />}
          label="Conectar"
          onClick={() => {
            setRows((prev) => {
              return prev.map((row) => {
                if (row.id === params.id) {
                  return {
                    ...row,
                    state: !row.state,
                  };
                }
                return row;
              });
            });
          }}
        />,
        // <GridActionsCellItem
        //   icon={<IconEdit />}
        //   label="Editar"
        //   onClick={() => {
        //     const form = formRef.current;
        //     Object.keys(params.row).forEach((key) => {
        //       if (form[key]) {
        //         form[key].value = params.row[key];
        //       }
        //     });
        //     form.scrollIntoView({ behavior: "smooth", block: "center" });
        //   }}
        // />,
        <GridActionsCellItem
          icon={<IconTrash />}
          label="Eliminar"
          onClick={() => {
            setRows(rows.filter((row) => row.id !== params.id));
            setSnackbar({
              open: true,
              message: "Deleted successfully",
              severity: "success",
            });
          }}
        />,
      ],
    },
  ];

  const [rows, setRows] = useState(INITIAL_ROWS_EMPRESAS);

  return (
    <MainCard title="Administracion Expertdata">
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
      <Dialog
        open={openPostman}
        onClose={() => setOpenPostman(false)}
        fullWidth
        maxWidth="lg"
      >
        <DialogContent sx={{ width: "100%", height: "700px" }}>
          <Paper elevation={3} sx={{ width: "100%", p: 2, height: "100%" }}>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                <div>
                  <TituloStandar titulo="API" />
                  <SelectStandar datos={["Documento tributario", "Inicio Actividades", "Actividades Economicas"]} />
                </div>
                <div style={{ flex: 1 }}>
                  <TituloStandar titulo="URL" />
                  <CustomInput />
                </div>
                <div>
                  <TituloStandar titulo="-" />
                  <Button variant="contained">Enviar</Button>
                </div>
              </Stack>
              <Divider />
              <Tabs value={value} onChange={(_, value) => setValue(value)}>
                <Tab label="Headers" />
                {/* <Tab label="DNI Pruebas" /> */}
                <Tab label="Body" />
                <Tab label="Response" />
              </Tabs>

              {/* Headers */}

              {value === 0 && (
                <DataGrid
                  rows={[
                    {
                      id: 1,
                      key: "Content-Type",
                      value: "application/json",
                    },
                    {
                      id: 2,
                      key: "Authorization",
                      value: "Bearer token",
                    }
                  ]}
                  columns={[
                    {
                      field: "key",
                      headerName: "Key",
                      flex: 1,
                    },
                    {
                      field: "value",
                      headerName: "Value",
                      flex: 1,
                    },
                  ]}
                />
              )}

              {/* DNI Pruebas */}

              {/* {value === 1 && <DataGrid rows={[]} columns={[{}]} autoHeight />} */}

              {/* Body */}

              {value === 1 && <CustomInput multiline minRows={6} />}

              {/* Response */}

              {value === 2 && <CustomInput multiline minRows={6} />}
            </Stack>
          </Paper>
        </DialogContent>
      </Dialog>
    </MainCard>
  );
};
export default CrearEmpresa;

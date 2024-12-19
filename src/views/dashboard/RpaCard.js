import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomInput from "ui-component/Input/CustomInput";
import TituloStandar from "ui-component/Titulo/TituloStandar";

const RpaCard = ({
  title = "",
  description = "",
  uprate = 100,
  avgTime = 2.5,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        sx={{
          border: "1px solid",
          borderColor: "primary.light",
          width: "300px",
        }}
      >
        <CardActionArea
          sx={{ height: "100%" }}
          onClick={() => setOpenModal(true)}
        >
          <CardContent>
            <TituloStandar titulo={title} />
            <Typography variant="body2">{description}</Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                fontWeight: "bold",
                color: "primary.main",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Uprate {uprate}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={uprate}
              sx={{ mt: 1 }}
            />

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Typography variant="body2">Tiempo Promedio:</Typography>
              <Typography variant="body2" color="text.primary">
                {avgTime}s
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{
          "& .MuiDialog-paper": {
            width: "70%", // Ancho fijo
            height: "auto", // Altura fija
            maxWidth: "none", // Evitar el máximo ancho por defecto
            overflow: "hidden", // Prevenir el desbordamiento del contenido
          },
        }}
      >
        <DialogTitle>
          <TituloStandar titulo={title} fontSize="36px" />
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={2} direction={"row"}>
                <TituloStandar titulo="Rut de prueba:" />
                <CustomInput value={"12345678-9"} />
                <Button variant="contained" fullWidth>Ejecutar RPA</Button>
              </Stack>
            </Grid>
            <Grid item xs={12}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Variable</strong></TableCell>
                      <TableCell><strong>Valor</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Fecha de inicio de actividades</TableCell>
                      <TableCell>12/12/2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dirección</TableCell>
                      <TableCell>Los Angeles</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Actividad principal</TableCell>
                      <TableCell>Extraccion minería</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Representante legal</TableCell>
                      <TableCell>Miguel</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default RpaCard;

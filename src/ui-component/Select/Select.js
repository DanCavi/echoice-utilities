import React from 'react';
import PropTypes from 'prop-types';

// importacion de Grid y elementos

import { MenuItem, Select, FormControl, ThemeProvider, createTheme } from '@mui/material';
// import { FormattedMessage } from 'react-intl';
const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
          fontSize: '10px'
        }
      }
    }
  }
});

function SelectStandar({ datos = [], value = '', onChange = () => { }, width = '100%', textAlign = 'left', maxHeight = 200, justifyContent = 'flex-start' }) {
  const valor = datos.includes(value) ? value : '';
  return (
    <div style={{ textAlign }}>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, width, backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select
            MenuProps={{ PaperProps: { style: { maxHeight } } }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            value={valor}
            onChange={onChange}
            size="small"
            sx={{ textAlign }}
          >
            <MenuItem value="" sx={{ justifyContent }}>
              <em style={{ color: '#9E9E9E' }}>
                Select
                {/* <FormattedMessage id="app.originalBalanceSheetEmptying.Select" defaultMessage="Select" /> */}
              </em>
            </MenuItem>
            {datos.map((data, index) => (
              <MenuItem sx={{ justifyContent }} key={index} value={data}>
                {data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </div>
  );
}
SelectStandar.propTypes = {
  datos: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func
};

export default SelectStandar;

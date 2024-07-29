import React, { useState } from 'react';
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

/**
 * Renders a standard select component with customizable options.
 *
 * @param {Object} props - The properties for the select component.
 * @param {boolean} [props.flex=false] - Whether the select component should take up the full width.
 * @param {Array} [props.datos=[]] - The options for the select component.
 * @param {string} [props.value=''] - The selected value of the select component.
 * @param {function} [props.onChange] - The callback function for when the selected value changes.
 * @param {string} [props.width='100%'] - The width of the select component.
 * @param {string} [props.textAlign='left'] - The text alignment of the select component.
 * @param {number} [props.maxHeight=200] - The maximum height of the select component's dropdown menu.
 * @param {string} [props.justifyContent='flex-start'] - The justify content of the select component.
 * @return {JSX.Element} The rendered select component.
 */
const SelectStandar = ({
  flex = false,
  datos = [],
  value = '',
  onChange,
  width = '100%',
  textAlign = 'left',
  maxHeight = 200,
  justifyContent = 'flex-start'
}) => {
  const [selectedValue, setSelectedValue] = useState(datos.includes(value) ? value : '');


  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(e.target.value)
    if (onChange) onChange(newValue)
  }

  return (
    <div style={{ textAlign, flex: flex ? 1 : null }}>
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 0, width, backgroundColor: '#FAFAFA' }} size="small">
          {/* <InputLabel id="demo-select-small-label">Cliente</InputLabel> */}
          <Select
            MenuProps={{ PaperProps: { style: { maxHeight } } }}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            value={selectedValue}
            onChange={handleChange}
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

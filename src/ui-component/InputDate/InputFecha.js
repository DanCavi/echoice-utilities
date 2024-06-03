import React from 'react';

// material-ui
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';

const newTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid',
          backgroundColor: '#FAFAFA',
          borderRadius: 2
        }
      }
    }
  }
});

export default function InputFecha({ disabled, onChange, maxDate, format="DD/MM/YYYY", views=['year', 'month', 'day'], value=null }) {
  return (
    <>
      <ThemeProvider theme={newTheme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disabled={disabled}
              sx={{ width: '100%' }}
              slotProps={{ textField: { size: 'small' } }}
              formatDensity="spacious"
              maxDate={maxDate}
              onChange={onChange}
              format={format}
              views={views}
              value={value}
            />
          </LocalizationProvider>
        </FormControl>
      </ThemeProvider>
    </>
  );
}
InputFecha.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

/**
 * 
 * 
 * import React from 'react';

// material-ui
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, ThemeProvider, createTheme } from '@mui/material';

const newTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid',
          backgroundColor: '#FAFAFA',
          borderRadius: 2
        }
      }
    }
  }
});

export default function InputFecha({ disabled, onChange, maxDate }) {
  return (
    <>
      <ThemeProvider theme={newTheme}>
        <FormControl sx={{ m: 0, minWidth: '100%', backgroundColor: '#FAFAFA' }} size="small">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disabled={disabled}
              sx={{ width: '100%' }}
              slotProps={{ textField: { size: 'small' } }}
              formatDensity="spacious"
              maxDate={maxDate}
              onChange={onChange}
              format="DD/MM/YYYY"
            />
          </LocalizationProvider>
        </FormControl>
      </ThemeProvider>
    </>
  );
}
InputFecha.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
};

 */

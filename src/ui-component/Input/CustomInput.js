import React, { useState } from 'react';
// importacion de Grid y elementos
import { styled } from '@mui/material/styles';
// import { IconButton, InputAdornment } from '@mui/material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    borderRadius: 4
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 3,
    padding: '4px !important', // override inline-style,
    borderRadius: 4
  },
  '& input:disabled + fieldset': {
    borderRadius: 4
  }
});
function CustomInput({ minRows, placeholder, multiline, name, error, label, value, onChange, variant, desactivar, type, id, formatNumber, required, ...otherStyles }) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ValidationTextField
        placeholder={placeholder}
        minRows={minRows}
        multiline={multiline}
        type={type === 'password' && showPassword ? 'text' : type}
        error={error}
        disabled={desactivar}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant={variant}
        id={id}
        required={required}
        inputProps={{}}
        InputProps={{
          inputComponent: formatNumber,
          endAdornment: type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
              >
                { showPassword ? <IconEye /> : <IconEyeOff /> }
              </IconButton>
            </InputAdornment>
          ) : null
        }}
        size="small"
        sx={{ width: '100%', ...otherStyles }}
      />
    </>
  );
}
CustomInput.defaultPros = {
  label: '',
  variant: 'outlined',
  positionIcon: 'start',
  required: false,
  error: false,
  multiline: false,
  placeholder: '',
  minRows: 1
};
CustomInput.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  positionIcon: PropTypes.string,
  formatNumber: PropTypes.elementType,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string
};

export default CustomInput;

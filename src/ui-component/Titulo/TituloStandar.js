import React from 'react';
//Import Componentes
import { PropTypes } from 'prop-types';
import { Typography } from '@mui/material';

function TituloStandar({ titulo, marginLeft, fontSize = '13px', fontWeight = 700 }) {
  return (
    <div>
      <Typography
        sx={{
          width: '100%',
          color: '#6a6c6f',
          fontFamily: `'Open Sans','Helvetica Neue',Helvetica,Arial, sans-serif`,
          fontSize: `${fontSize}`,
          fontWeight,
          marginBottom: 1,
          marginLeft: { marginLeft }
        }}
      >
        {titulo}
      </Typography>
    </div>
  );
}
TituloStandar.propType = {
  titulo: PropTypes.string,
  fontSize: PropTypes.string,
  marginLeft: PropTypes.number
};

export default TituloStandar;

import { Box } from '@mui/material';
import { useState } from 'react';
import logoSrc from '../../images/logo/logo.png';
import howeredLogoSrc from '../../images/logo/logo_hovered.png';

export const Logo = () => {
  const [isHowered, setisHowered] = useState(true);

  return (
    <Box sx={{ mr: 1, pt: '10px', height: '60px' }}>
      {isHowered ? (
        <Box
          onMouseEnter={() => setisHowered(false)}
          onMouseLeave={() => setisHowered(true)}
          component="img"
          alt="logo"
          src={howeredLogoSrc}
          height={'120px'}
        />
      ) : (
        <Box
          onMouseEnter={() => setisHowered(false)}
          onMouseLeave={() => setisHowered(true)}
          component="img"
          alt="logo_hovered"
          src={logoSrc}
          height={'120px'}
        />
      )}
    </Box>
  );
};

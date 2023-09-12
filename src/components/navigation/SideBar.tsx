import * as React from 'react';
import { Drawer, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  position: 'top' | 'left' | 'bottom' | 'right';
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  width: string;
};

export const SideBar = (props: Props) => {
  const { position, close, isOpen } = props;

  return (
    <Drawer variant="persistent" hideBackdrop={false} anchor={position} open={isOpen} onClose={close}>
      <IconButton onClick={close} sx={{ width: '20px', alignSelf: 'flex-end', mr: 2}}>
        <CloseIcon />
      </IconButton>
      {props.children}
    </Drawer>
  );
};

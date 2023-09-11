import * as React from 'react';
import Drawer from '@mui/material/Drawer';

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
      {props.children}
    </Drawer>
  );
};

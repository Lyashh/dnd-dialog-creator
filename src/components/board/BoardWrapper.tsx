import * as React from 'react';
import { SideBar } from '../navigation/SideBar';
import { observer } from 'mobx-react-lite';
import { NodePalette } from './NodePalette';
import { useAppDispatch, useAppSelector } from '../../stores/store';
import { setNodePalleteSideBarStatus } from '../../stores/navigationSlice';

type Props = {
  children: React.ReactNode;
};

export const BoardWrapper = observer((props: Props) => {
  const isNodePalleteSideBarActive = useAppSelector((state) => state.navigationSlice.isNodePalleteSideBarActive);
  const dispatch = useAppDispatch();

  return (
    <>
      {props.children}
      <SideBar
        width="300px"
        position="right"
        isOpen={isNodePalleteSideBarActive}
        close={() => {
          dispatch(setNodePalleteSideBarStatus(false));
        }}
      >
        <NodePalette />
      </SideBar>
    </>
  );
});

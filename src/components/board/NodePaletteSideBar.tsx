import { useMst } from '../../stores/Root';
import { SideBar } from '../navigation/SideBar';
import { NodePalette } from './NodePalette';
import { observer } from 'mobx-react-lite';


export const NodePaletteSideBar = observer(() => {
  const store = useMst();
  const boardStore = store.boardStore;

  return (
    <SideBar
      width="300px"
      position="left"
      isOpen={boardStore.isNodePaletteSidebarAcite}
      close={() => {
        boardStore.setNodePaletteSidebar(false);
      }}
    >
      <NodePalette />
    </SideBar>
  );
});

import { types, Instance } from 'mobx-state-tree';

export const BoardStore = types
  .model('RoleStore', {
    currentName: types.string,
    isNodePaletteSidebarAcite: types.boolean,
  })
  .actions((self) => {
    const toggleNodePaletteSidebar = () => {
      self.isNodePaletteSidebarAcite = !self.isNodePaletteSidebarAcite;
    };

    const setNodePaletteSidebar = (value: boolean) => {
      self.isNodePaletteSidebarAcite = value;
    };

    return {
      toggleNodePaletteSidebar,
      setNodePaletteSidebar,
    };
  });

export type TBoardStoreModel = Instance<typeof BoardStore>;

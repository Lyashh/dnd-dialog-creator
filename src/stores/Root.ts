import { Instance, types } from 'mobx-state-tree';
import { createContext, useContext } from 'react';
import { BoardStore } from './BoardStore';

export const RootStore = types.model({
  boardStore: BoardStore,
});

const initialState = RootStore.create({
  boardStore: {
    currentName: 'діалог з чігірьом',
    isNodePaletteSidebarAcite: false,
  },
});

export const rootStore = initialState;

export type RootStoreInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootStoreInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return store;
}

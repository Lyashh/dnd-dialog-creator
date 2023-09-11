import { types as t, Instance } from 'mobx-state-tree';

export const RootStore = t.model('RootStore', {});

export interface IStore extends Instance<typeof RootStore> {}

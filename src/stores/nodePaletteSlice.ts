import { createSlice } from '@reduxjs/toolkit';
import { DialogueEntryNode, TDialogueEntryNode } from '../nodes/DialogueEntry';

type TNodePaletteTypes = {
  data: {
    dialogue_entry: TDialogueEntryNode;
  };
};

const NODE_TYPES: TNodePaletteTypes = {
  data: {
    dialogue_entry: DialogueEntryNode,
  },
};

export const nodePaletteSlice = createSlice({
  name: 'navigationSlice',
  initialState: NODE_TYPES,
  reducers: {},
});

export default nodePaletteSlice.reducer;

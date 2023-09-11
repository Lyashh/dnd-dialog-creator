import { DialogueEntryNode, TDialogueEntryNode } from '../nodes/DialogueEntry';

export type TNodeType = TDialogueEntryNode;

export type TNodePaletteTypes = {
  dialogue_entry: TDialogueEntryNode;
};

export const NODE_TYPES: TNodePaletteTypes = {
  dialogue_entry: DialogueEntryNode,
};

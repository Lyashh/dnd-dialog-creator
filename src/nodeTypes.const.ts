import { NPC_Replic, TNPC_Replic } from './nodes/NPC_Replic';
import { PlayerReply, TPlayerReply } from './nodes/PlayerReply';

export type TNodeType = TNPC_Replic | TPlayerReply;

export type TNodePaletteTypes = {
  npc_replic: TNPC_Replic;
  player_reply: TPlayerReply;
};

export const NODE_TYPES: TNodePaletteTypes = {
  npc_replic: NPC_Replic,
  player_reply: PlayerReply,
};

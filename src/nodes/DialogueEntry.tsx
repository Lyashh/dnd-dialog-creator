import { Handle, Position } from 'reactflow';
import * as React from 'react';
import { Card, TextField } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { NodeHeader } from './utils/NodeHeader';

type TProps = {
  id: number;
  npc_name: string;
};

export const DialogueEntryNode = (props: unknown) => {
  const data = props as TProps;
  // state for npc name
  const [npcName, setNpcName] = React.useState(data.npc_name || '');

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // value
    setNpcName(evt.target.value);
    // data
    data.npc_name = evt.target.value;
  };

  return (
    <>
      <Card sx={{ p: 1 }}>
        <NodeHeader id={data.id} nodeName="Dialogue Entry" nodeDecorators={<AcUnitIcon />} />
        <TextField required sx={{ mb: 1 }} name="npc_name" label="NPC Name..." defaultValue="" onChange={onChange} value={npcName} />
      </Card>
      <Handle type="source" position={Position.Bottom} id={`flow_${data.id}`} />
    </>
  );
};

export type TDialogueEntryNode = typeof DialogueEntryNode;

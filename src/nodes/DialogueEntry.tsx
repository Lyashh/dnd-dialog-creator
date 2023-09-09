import { Handle, Position } from 'reactflow';
import * as React from 'react';
import Card from '@mui/material/Card';
import Input from '@mui/material/Input';
// label
import FormLabel from '@mui/material/FormLabel';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { NodeHeader } from './utils/NodeHeader';

export const DialogueEntryNode = ({ data }) => {
  // state for npc name
  const [npcName, setNpcName] = React.useState(data.npc_name || '');

  const onChange = (evt) => {
    // value
    setNpcName(evt.target.value);
    // data
    data.npc_name = evt.target.value;
  };

  return (
    <>
      <Card>
        <NodeHeader
          id={data.id}
          nodeName="Dialogue Entry"
          nodeDecorators={
            <>
              <AddHomeIcon sx={{ color: '#00ff00' }} />
            </>
          }
        />
        <FormLabel htmlFor="npc_name">NPC Name:</FormLabel>
        <Input id="npc_name" name="npc_name" placeholder="NPC Name..." onChange={onChange} value={npcName} />
      </Card>
      <Handle type="source" position={Position.Bottom} id="flow" />
    </>
  );
};

export type TDialogueEntryNode = typeof DialogueEntryNode;

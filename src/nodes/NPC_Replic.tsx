import { Handle, Position } from 'reactflow';
import * as React from 'react';
import { Card, IconButton, Dialog, DialogTitle, DialogContent, Box, DialogActions, Button, DialogContentText } from '@mui/material';
import { NodeHeader } from './utils/NodeHeader';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';

type TProps = {
  id: number;
  npc_name: string;
};

export const NPC_Replic = (props: unknown) => {
  const data = props as TProps;
  // state for npc name
  const [npcName, setNpcName] = React.useState(data.npc_name || '');
  const [isOpenTextEdit, setOpenTextEdit] = React.useState(false);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // value
    setNpcName(evt.target.value);
  };

  const handleClickOpen = () => {
    setOpenTextEdit(true);
  };

  const handleClose = () => {
    setOpenTextEdit(false);
  };

  const copyNodeId = () => {
    navigator.clipboard.writeText(data.id.toString());
  };

  const modal = (
    <Dialog fullWidth={true} maxWidth={'lg'} open={isOpenTextEdit} onClose={handleClose}>
      <DialogTitle>Optional sizes</DialogTitle>
      <DialogContent>
        <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: 'fit-content',
          }}
        ></Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      {modal}
      <Card sx={{ p: 1, minWidth: '140px' }}>
        <NodeHeader id={data.id} nodeType="NPC Replic"  />
        <IconButton onClick={handleClickOpen}>
          <TextFieldsIcon />
        </IconButton>
        <IconButton onClick={copyNodeId}>
          <ContentCopyIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Card>
      <Handle type="target" position={Position.Top} id={`flow_in_${data.id}`} />
      <Handle type="source" position={Position.Bottom} id={`flow_out_${data.id}`} />
    </>
  );
};

export type TNPC_Replic = typeof NPC_Replic;

import { Handle, Position } from 'reactflow';
import * as React from 'react';
import { Card, IconButton, Dialog, DialogTitle, DialogContent, Box, DialogActions, Button, DialogContentText } from '@mui/material';
import { NodeHeader } from './utils/NodeHeader';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import NotesIcon from '@mui/icons-material/Notes';

type TProps = {
  id: number;
  npc_name: string;
};

export const PlayerReply = (props: unknown) => {
  const data = props as TProps;
  // state for npc name
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
        <NodeHeader id={data.id} nodeName="Player Reply" nodeDecorators={<AcUnitIcon />} />
        <IconButton onClick={handleClickOpen}>
          <NotesIcon />
        </IconButton>
        <IconButton onClick={copyNodeId}>
          <ContentCopyIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Card>
      <Handle type="source" position={Position.Bottom} id={`flow_${data.id}`} />
    </>
  );
};

export type TPlayerReply = typeof PlayerReply;

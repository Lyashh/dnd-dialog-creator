import { Handle, Position } from 'reactflow';
import * as React from 'react';
import { Grid, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, Box, DialogActions, Button, TextField } from '@mui/material';
import { useUpdateNodeInternals } from 'reactflow';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { NodeWrapper } from './utils/NodeWrapper';

type TProps = {
  id: number;
  npc_name: string;
  responses?: string[];
};

type TPlayerResponse = {
  text: string;
  id: number;
};

const defaultResponses: TPlayerResponse[] = [
  { text: 'Response 1', id: 0 },
  { text: 'Response 2', id: 1 },
];

export const PlayerReply = (props: unknown) => {
  const data = props as TProps;
  // state for npc name
  const [isOpenResponsesEdit, setOpenResponsesEdit] = React.useState(false);
  const [responses, setResponses] = React.useState<TPlayerResponse[]>(defaultResponses);
  const [isIdWasCopied, setIsIdWasCopied] = React.useState(false);
  const updateNodeInternals = useUpdateNodeInternals();

  const copyNodeId = () => {
    navigator.clipboard.writeText(data.id.toString());
    setIsIdWasCopied(true);
  };

  const onResponseChange = (newValue: string, id: number) => {
    const newResponses = responses.map((response) => {
      if (response.id === id) {
        return { ...response, text: newValue };
      }

      return response;
    });

    setResponses(newResponses);
  };

  const addNewResponse = () => {
    setResponses([...responses, { text: '', id: responses.length }]);
    updateNodeInternals(data.id.toString());
  };

  const deleteResponse = (responseId: number) => {
    if (responses.length === 1) {
      return;
    }

    const newResponses = responses.filter((response) => response.id !== responseId);
    setResponses(newResponses);
    updateNodeInternals(data.id.toString());
  };

  const responseEditModal = (
    <Dialog fullWidth={true} maxWidth={'lg'} open={isOpenResponsesEdit} onClose={() => setOpenResponsesEdit(false)}>
      <DialogTitle color="primary.main">Responses:</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} mt={0}>
          {responses.map((response, index) => {
            return (
              <Grid item xs={12} key={`${index}_${response.id}`}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
                  <TextField
                    multiline
                    label={`${index + 1}.`}
                    variant="outlined"
                    fullWidth={true}
                    value={response.text}
                    onChange={(e) => {
                      onResponseChange(e.target.value, response.id);
                    }}
                  />
                  <IconButton
                    className="icon-button"
                    onClick={() => {
                      deleteResponse(response.id);
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                </Box>
              </Grid>
            );
          })}
          <Grid item xs={12} mt={2}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <Button variant="outlined" onClick={addNewResponse} startIcon={<AddIcon />}>
                Add
              </Button>

              <DialogActions sx={{ marginLeft: 'auto' }}>
                <Button onClick={() => setOpenResponsesEdit(false)}>Close</Button>
              </DialogActions>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );

  const padding = 1;
  const nodeType = 'Player Reply';

  return (
    <NodeWrapper minWidth="255px" p={padding} id={data.id} nodeType={nodeType}>
      {responseEditModal}

      <Box p={padding}>
        <Tooltip title={'Manage responses'}>
          <IconButton className="icon-button" onClick={() => setOpenResponsesEdit(true)}>
            <NotesIcon />
          </IconButton>
        </Tooltip>

        <Tooltip
          title={isIdWasCopied ? 'Copied' : 'Click to copy id of block'}
          onMouseLeave={() => {
            setTimeout(() => {
              setIsIdWasCopied(false);
            }, 500);
          }}
        >
          <IconButton className="icon-button" onClick={copyNodeId}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>

        <IconButton className="icon-button">
          <PersonIcon />
        </IconButton>
      </Box>

      <Grid container sx={{ position: 'absolute', bottom: '-1px', width: '100%' }}>
        {responses.map((response, index) => (
          <Grid item xs key={`response_item_${index}_${data.id}`}>
            <Tooltip title={response.text}>
              <Handle
                style={{ position: 'relative', marginTop: '0.5rem' }}
                type="source"
                className="response-handle"
                position={Position.Bottom}
                id={`response_${index}_${data.id}`}
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>

      <Handle type="target" position={Position.Top} id={`flow_in_${data.id}`} />
    </NodeWrapper>
  );
};

export type TPlayerReply = typeof PlayerReply;

import { Handle, Position } from 'reactflow';
import * as React from 'react';
import {
  Card,
  Grid,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  DialogActions,
  Button,
  DialogContentText,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useUpdateNodeInternals } from 'reactflow';
import { NodeHeader } from './utils/NodeHeader';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import ColorizeIcon from '@mui/icons-material/Colorize';
import { SketchPicker, ColorResult } from 'react-color';

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
  const [isOpenNodeColorEdit, setOpenNodeColorEdit] = React.useState(false);
  const [responses, setResponses] = React.useState<TPlayerResponse[]>(defaultResponses);
  const [nodeColor, setNodeColor] = React.useState('#9bbfb5'); //9bbfb5 F9AB68
  const updateNodeInternals = useUpdateNodeInternals();

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // value`
    setNpcName(evt.target.value);
  };

  const handleNodeColorChangeComplete = (color: ColorResult) => {
    setNodeColor(color.hex);
  };

  const copyNodeId = () => {
    navigator.clipboard.writeText(data.id.toString());
  };

  const onResponseChange = (newValue: string, id: number) => {
    /* const newResponses = responses.map((response) => {
      if (response.id === id) {
        return { ...response, text: newValue };
      } else {
        return response;
      }
    });
    setResponses(newResponses);
    updateNodeInternals(data.id.toString()); */
  };

  const addNewResponse = () => {
    setResponses([...responses, { text: '', id: responses.length }]);
    updateNodeInternals(data.id.toString());
  };

  const responseEditModal = (
    <Dialog fullWidth={true} maxWidth={'lg'} open={isOpenResponsesEdit} onClose={() => setOpenResponsesEdit(false)}>
      <DialogTitle color="primary.main">Responses:</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} mt={1}>
          {responses.map((response, index) => {
            return (
              <Grid item xs={12} key={index}>
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
                </Box>
              </Grid>
            );
          })}
          <Grid item xs={12} mt={2}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              <Button variant="outlined" onClick={addNewResponse} startIcon={<AddIcon />}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenResponsesEdit(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );

  const nodeColorEditModal = (
    <Dialog
      fullWidth={true}
      open={isOpenNodeColorEdit}
      maxWidth={'xs'}
      onClose={() => {
        setOpenNodeColorEdit(false);
      }}
    >
      <DialogTitle>Node color edit:</DialogTitle>
      <DialogContent>
        <SketchPicker className="modal-color-picker" color={nodeColor} onChange={handleNodeColorChangeComplete} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenNodeColorEdit(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      {responseEditModal}
      {nodeColorEditModal}

      <Card sx={{ minWidth: '255px' }}>
        <Container sx={{ borderLeft: `15px solid ${nodeColor}` }} disableGutters>
          <Box p={2}>
            <NodeHeader id={data.id} nodeName="Player Reply" />
            <IconButton className="icon-button" onClick={() => setOpenResponsesEdit(true)}>
              <NotesIcon />
            </IconButton>
            <IconButton className="icon-button" onClick={copyNodeId}>
              <ContentCopyIcon />
            </IconButton>
            <IconButton className="icon-button">
              <PersonIcon />
            </IconButton>
            <IconButton className="icon-button" onClick={() => setOpenNodeColorEdit(true)}>
              <ColorizeIcon />
            </IconButton>
          </Box>
        </Container>

        {responses.length > 0 ? (
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
        ) : (
          <Handle type="source" position={Position.Bottom} id="response_1" />
        )}
      </Card>

      <Handle type="target" position={Position.Top} id={`flow_in_${data.id}`} />
    </>
  );
};

export type TPlayerReply = typeof PlayerReply;

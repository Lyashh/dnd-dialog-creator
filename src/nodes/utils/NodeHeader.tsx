import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CopyNodeIdButton } from './CopyNodeIdButton';

export const NodeHeader = (props) => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
      <Grid item>
        <Typography variant="h2" fontSize="md" className="margin-bottom-half">
          {props.nodeName}
        </Typography>
        <CopyNodeIdButton id={props.id} />
      </Grid>
      <Grid item className="node-decorator-container">
        {props.nodeDecorators}
      </Grid>
    </Grid>
  );
};

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CopyNodeIdButton } from './CopyNodeIdButton';

export type TNodeHeaderProps = {
  nodeName: string;
  id: number;
  nodeDecorators: React.ReactNode;
};

export const NodeHeader = (props: TNodeHeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
      <Grid item>
        <Typography variant="body2" fontSize="md">
          {props.nodeName}
        </Typography>
        <CopyNodeIdButton id={props.id} />
      </Grid>
      <Grid item >
        {props.nodeDecorators}
      </Grid>
    </Grid>
  );
};

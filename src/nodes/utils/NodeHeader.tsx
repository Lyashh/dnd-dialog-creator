import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export type TNodeHeaderProps = {
  nodeName: string;
  id: number;
  nodeDecorators: React.ReactNode;
};

export const NodeHeader = (props: TNodeHeaderProps) => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
      <Grid item>
        <Typography variant="body1">{props.nodeName}</Typography>
        {/* <Typography variant="caption">id: {props.id}</Typography> */}
      </Grid>
      <Grid item>{props.nodeDecorators}</Grid>
    </Grid>
  );
};

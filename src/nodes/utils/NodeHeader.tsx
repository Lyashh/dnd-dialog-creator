import { Typography, Box, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import ColorizeIcon from '@mui/icons-material/Colorize';

export type TNodeHeaderProps = {
  nodeType: string;
  id: number;
  openColorEditModal: () => void;
};

export const NodeHeader = (props: TNodeHeaderProps) => {
  const { openColorEditModal } = props;

  return (
    <>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography fontSize={12}>{props.nodeType}</Typography>
            <IconButton className="icon-button" sx={{ position: 'absolute', top: 0, right: 0 }} onClick={openColorEditModal}>
              <ColorizeIcon sx={{ height: 15, width: 15 }} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

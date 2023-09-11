import { Grid } from '@mui/material';
// import container
import Container from '@mui/material/Container';
import { NodePalette } from '../board/NodePalette';

export const AppHeader = () => {
  return (
    <div className="header">
      <Container>
        <Grid container spacing={2} justifyContent="flex-start" flexWrap="wrap">
          <Grid xs={8} item container>
            <Grid xs item></Grid>
          </Grid>
          <Grid xs item>
            <NodePalette />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

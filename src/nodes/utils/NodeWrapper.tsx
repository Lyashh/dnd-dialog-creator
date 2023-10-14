import { Card, Container, Box } from '@mui/material';
import { useState } from 'react';
import { style } from '../../styles/styles.const';
import { ColorResult } from 'react-color';
import { NodeHeader } from './NodeHeader';
import { ColorEditModal } from './ColorEditModal';

type Props = {
  children: React.ReactNode;
  minWidth: string;
  p: number;
  nodeType: string;
  id: number;
};

export const NodeWrapper = (props: Props) => {
  const { children, minWidth, p, nodeType, id } = props;
  const [nodeColor, setNodeColor] = useState<string>(style.colors.lightGreen);
  const [isOpenNodeColorEdit, setOpenNodeColorEdit] = useState<boolean>(false);

  const handleNodeColorChange = (color: ColorResult) => {
    setNodeColor(color.hex);
  };

  return (
    <>
      <ColorEditModal
        colorValue={nodeColor}
        handleColorChange={handleNodeColorChange}
        title={'Edit node color'}
        isOpen={isOpenNodeColorEdit}
        closeModal={() => setOpenNodeColorEdit(false)}
      />
      <Card sx={{ minWidth: minWidth, borderLeft: `15px solid ${nodeColor}` }}>
        <Container disableGutters>
          <Box sx={{ pt: 1, pl: p, pr: p }}>
            <NodeHeader nodeType={nodeType} id={id} openColorEditModal={() => setOpenNodeColorEdit(true)} />
          </Box>

          {children}
        </Container>
      </Card>
    </>
  );
};

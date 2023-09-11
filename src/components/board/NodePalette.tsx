import * as React from 'react';
import { Card, Typography, List, ListItem } from '@mui/material';

import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useAppSelector } from '../../stores/store';

export const NodePalette = () => {
  const nodeTypes = useAppSelector((state) => state.nodePaletteSlice.data);

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const formatNodeType = (nodeType: string) => {
    // capitalize each word and remove underscores
    return nodeType.replace(/_/g, ' ').replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  };

  return (
    <Card sx={{ width: '300px' }}>
      <Typography variant="h6" fontSize="md" sx={{ mb: 0.5 }}>
        Node Palette
      </Typography>
      <List>
        {Object.keys(nodeTypes).map((nodeType) => {
          console.log({ nodeType });

          return (
            <ListItem key={nodeType} onDragStart={(event) => onDragStart(event, nodeType)} draggable>
              {/* <ListItemDecorator> */}
              <DragIndicatorIcon />
              {/* </ListItemDecorator> */}
              {formatNodeType(nodeType)}
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

import * as React from 'react';
import { Card, Typography, List, ListItem } from '@mui/material';

import { NODE_TYPES } from '../../nodeTypes.const';

// Icons
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export const NodePalette = () => {
  const nodeTypes = NODE_TYPES;

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const formatNodeType = (nodeType: string) => {
    // capitalize each word and remove underscores
    return nodeType.replace(/_/g, ' ').replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  };

  return (
    <Card sx={{ width: '300px', p: 2 }}>
      <Typography variant="h6" fontSize="md" sx={{ mb: 1 }}>
        Node Palette
      </Typography>
      <List>
        {Object.keys(nodeTypes).map((nodeType) => {
          console.log({ nodeType });

          return (
            <ListItem sx={{ pt: 1, pb: 1, pl: 0 }} key={nodeType} onDragStart={(event) => onDragStart(event, nodeType)} draggable>
              {/* <ListItemDecorator> */}
              <DragIndicatorIcon sx={{ mr: 2 }} />
              {/* </ListItemDecorator> */}
              {formatNodeType(nodeType)}
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

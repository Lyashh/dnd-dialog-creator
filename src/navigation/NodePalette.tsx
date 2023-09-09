import * as React from 'react';
import { Card, Typography, List, ListItem } from '@mui/material';
import NodePaletteContext from '../Providers';

// drag and drop icon
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

export default function NodePalette(props) {
  const nodeTypes = React.useContext(NodePaletteContext);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const formatNodeType = (nodeType) => {
    // capitalize each word and remove underscores
    return nodeType.replace(/_/g, ' ').replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  };

  return (
    <Card sx={{ float: 'right', width: '100%', m: 1 }}>
      <Typography variant="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Node Palette
      </Typography>
      <List>
        {Object.keys(nodeTypes.node_types).map((nodeType) => {
          return (
            <ListItem className="node_palette_item" key={nodeType} onDragStart={(event) => onDragStart(event, nodeType)} draggable>
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
}

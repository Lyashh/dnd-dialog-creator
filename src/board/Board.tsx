import React, { useCallback, useMemo, useState, useRef } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  DefaultEdgeOptions,
  FitViewOptions,
  Background,
  ReactFlowInstance,
  BackgroundVariant,
  Controls,
} from 'reactflow';

// providers
import { NodePaletteProvider } from '../Providers';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export const NodePaletteContext = React.createContext({ node_types: {} });
import { DialogueEntryNode } from '../nodes/DialogueEntry';
import { NodePaletteTypes } from '../board/types';

import 'reactflow/dist/style.css';
import { AppHeader } from '../navigation/Header';
import { BoardWrapper } from './BoardWrapper';
import { config } from '../config';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'TTqwqw1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'qwqw1' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const toolbarHeight = config.theme.toolbarHeight;

export const Board = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [maxId, setMaxId] = useState(0);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const getId = (node_count) => {
    // increment id
    console.log('incrementing id: ' + node_count);
    return `node_${node_count}`;
  };

  // define node types
  const nodeTypes = useMemo<NodePaletteTypes>(
    () => ({
      dialogue_entry: DialogueEntryNode,
    }),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper!.current!.getBoundingClientRect() as any;
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance!.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const id = getId(maxId);
      const newNode = {
        id: id,
        type,
        position,
        data: { id: id },
      };

      setNodes((nds) => nds.concat(newNode));

      // increment id
      setMaxId(maxId + 1);
    },
    [reactFlowInstance, maxId],
  );

  const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
  };

  const fitViewOptions: FitViewOptions = {
    padding: 0.2,
  };

  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), [setEdges]);

  const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  //const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const content = (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ minWidth: '83vw', height: `calc(100vh - ${toolbarHeight} - 4.3vh)` }}>
          <NodePaletteProvider value={{ node_types: nodeTypes }}>
            <ReactFlow
              onInit={setReactFlowInstance}
              nodeTypes={nodeTypes}
              nodes={nodes}
              edges={edges}
              onDrop={onDrop}
              onDragOver={onDragOver}
              defaultEdgeOptions={defaultEdgeOptions}
              fitView
              fitViewOptions={fitViewOptions}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
            >
              <Controls />
              <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
            {/*  <AppHeader /> */}
          </NodePaletteProvider>
        </div>
      </Grid>
    </Grid>
  );

  return <BoardWrapper>{content}</BoardWrapper>;
};

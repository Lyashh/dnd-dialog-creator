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
import { Grid } from '@mui/material';

import { NODE_TYPES, TNodePaletteTypes } from '../../nodeTypes.const';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'TTqwqw1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'qwqw1' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

import 'reactflow/dist/style.css';

export const Board = () => {
  const reactFlowWrapper = useRef<HTMLIFrameElement>(null);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [maxId, setMaxId] = useState(0);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const getId = (node_count: number) => {
    // increment id
    console.log('incrementing id: ' + node_count);
    return `node_${node_count}`;
  };

  // define node types
  const nodeTypes = useMemo<TNodePaletteTypes>(() => NODE_TYPES, []);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper!.current!.getBoundingClientRect();
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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ width: '100vw', height: '100vh' }} ref={reactFlowWrapper}>
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
        </div>
      </Grid>
    </Grid>
  );
};

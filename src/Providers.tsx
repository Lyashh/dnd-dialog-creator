import React from 'react';
import { TNodePaletteTypes } from './board/nodeTypes.const';

const NodePaletteContext = React.createContext<{ node_types: Partial<TNodePaletteTypes> }>({ node_types: {} });
export const NodePaletteProvider = NodePaletteContext.Provider;
export default NodePaletteContext;

export const GlobalDataContext = React.createContext({});
export const GlobalDataProvider = GlobalDataContext.Provider;

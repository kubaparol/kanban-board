import React from 'react';

const MoveContext = React.createContext();
const DeleteContext = React.createContext();

MoveContext.displayName = 'MoveContext';
DeleteContext.displayName = 'DeleteContext';

export { MoveContext, DeleteContext };

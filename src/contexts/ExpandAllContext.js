import { createContext, useState } from 'react';

export const ExpandAllContext = createContext({});

export function ExpandeAllProvider(props) {
  const [expandAll, toggleExpandAll] = useState(true);

  return <ExpandAllContext.Provider value={{ expandAll, toggleExpandAll }}>{props.children}</ExpandAllContext.Provider>;
}

import React, { useState, useEffect, useContext } from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowRight, ArrowDropDown } from '@mui/icons-material';
import { ExpandAllContext } from '../contexts/ExpandAllContext';

function TreeNode(props) {
  const { name, leaf, children } = props;
  const [open, toggleOpen] = useState(true);
  const { expandAll } = useContext(ExpandAllContext);
  useEffect(() => toggleOpen(expandAll), [expandAll]);
  const handleToggleOpen = e => toggleOpen(!open);
  return (
    <>
      <ListItemButton onClick={handleToggleOpen} sx={{ padding: 0 }}>
        {!leaf && <ListItemIcon sx={{ minWidth: 3 }}>{open ? <ArrowDropDown /> : <ArrowRight />}</ListItemIcon>}
        <ListItemText primary={name} sx={{ paddingLeft: leaf ? 3 : 0 }} />
      </ListItemButton>
      {children && (
        <Collapse in={open}>
          <List component="div" disablePadding sx={{ paddingLeft: children.length === 0 ? 0 : 3 }}>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default TreeNode;

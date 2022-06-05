import React, { useContext } from 'react';
import { IconButton, List, ListSubheader, Paper, Stack, Tooltip } from '@mui/material';
import TreeNode from './TreeNode';
import { OpenInFull, CloseFullscreen } from '@mui/icons-material';
import { ExpandAllContext } from '../contexts/ExpandAllContext';

function Tree(props) {
  const { toggleExpandAll } = useContext(ExpandAllContext);
  const handleExpandAll = e => toggleExpandAll(true);
  const handleCollapseAll = e => toggleExpandAll(false);

  const nodes = props.data;
  const createTree = node => {
    return (
      node &&
      node.children && (
        <TreeNode key={node.name} name={node.name} leaf={node.children.length === 0}>
          {node.children.map(n => createTree(n))}
        </TreeNode>
      )
    );
  };
  return (
    <Paper elevation={3} square data-testid="tree-list">
      <List
        sx={{ width: '100%' }}
        component="nav"
        subheader={
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <ListSubheader component="div" id="recursive-tree-node">
              RECURSIVE TREE NODE
            </ListSubheader>
            <div>
              <Tooltip title="Expand all">
                <IconButton onClick={handleExpandAll}>
                  <OpenInFull />
                </IconButton>
              </Tooltip>
              <Tooltip title="Collapse all">
                <IconButton onClick={handleCollapseAll}>
                  <CloseFullscreen />
                </IconButton>
              </Tooltip>
            </div>
          </Stack>
        }
      >
        {nodes.map(n => createTree(n))}
      </List>
    </Paper>
  );
}
export default Tree;

import { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { ExpandeAllProvider } from './contexts/ExpandAllContext';
import Tree from './components/Tree';
import { parseInputData } from './Utils';
import './App.css';

function App() {
  const defaultValue = `[
  '/root/test',
  '/dev/null',
  '/root/something/somewhere'
]`;
  const [dataInput, setDataInput] = useState(parseInputData(defaultValue));
  const [errorData, setErrorData] = useState('');
  const handleTextInputChange = e => setDataInput(parseInputData(e.target.value));
  useEffect(() => {
    setErrorData(dataInput.length === 0 ? 'Incorrect input data.' : '');
  }, [dataInput]);

  return (
    <Grid p={5} container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Insert here your input data"
          multiline
          fullWidth
          minRows={15}
          maxRows={25}
          onChange={handleTextInputChange}
          helperText={errorData}
          error={errorData.length > 0}
          defaultValue={defaultValue}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ExpandeAllProvider>
          <Tree data={dataInput}/>
        </ExpandeAllProvider>
      </Grid>
    </Grid>
  );
}

export default App;

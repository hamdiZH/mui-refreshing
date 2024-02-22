import { Feed } from './layout/Feed';
import { Sidebar } from './layout/Sidebar';
import { Rightbar } from './layout/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { Navbar } from './layout/Navbar';
import { Add } from './components/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const switchMode = (value) => {
    setMode(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} changeMode={switchMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;

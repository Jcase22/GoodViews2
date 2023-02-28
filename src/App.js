import './App.css';
import { Toolbar, AppBar, IconButton, Typography, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Menu
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </div>
  );
}

export default App;

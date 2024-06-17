import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>CrowdGuard</h1>
        <p>application tagline</p>
      </div>
    </div>
  );
}

// import React from 'react';
// import { Container } from '@mui/material';
// import LandingPage from './components/LandingPage';

// const App = () => {
//   return (
//     <Container maxWidth={false} disableGutters>
//       <LandingPage />
//     </Container>
//   );
// };

// export default App;

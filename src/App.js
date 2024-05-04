import {Routes, Route} from 'react-router-dom';

import Users from './pages/Users';
import Albums from './pages/Albums';
import Photos from './pages/Photos';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/albums/:userId" element={<Albums />} />
        <Route path="/photos/:albumId" element={<Photos />} />
      </Routes>
    </>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Button from './pages/Button';
import Posts from './pages/Posts';
import Reflection from './pages/Reflection';
function App() {
  

  return (
   <Router>
      <Routes>
      <Route path="/" exact element = {<Button />} />
      <Route path="/Posts" element={<Posts/>} />
      <Route path="/Reflection" element={<Reflection/>} />
      </Routes>
</Router>
  );
}

export default App;

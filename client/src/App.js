
import { Box } from "@chakra-ui/react";
import Auth from "./Auth/Auth";


import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Button from './pages/Button';
import Posts from './pages/Posts';
import Reflection from './pages/Reflection';
function App() {
  return (

    <Router>
    <Route exact path="/" component={<Button />} />
    <Route path="/Posts" component={<Posts/>} />
    <Route path="/Reflection" component={<Reflection/>} />
</Router>)
}

export default App;

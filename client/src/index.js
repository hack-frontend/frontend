import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import UserProvider from "./store/UserProvider";
import { BrowserRouter as Router } from "react-router-dom";

import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <UserProvider>
          <App />
        </UserProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import { initializeApp } from "firebase/app";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBgWDb7VbzA1lCGNFhiHmularaUIMT1EKQ",
    authDomain: "react-firebase-auth-58a34.firebaseapp.com",
    projectId: "react-firebase-auth-58a34",
    storageBucket: "react-firebase-auth-58a34.appspot.com",
    messagingSenderId: "522063848203",
    appId: "1:522063848203:web:aff18357b728499d11380e",
    measurementId: "G-P0N25FV098"
  };
  const app = initializeApp(firebaseConfig);
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
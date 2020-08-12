import React from "react";
import "./App.css";
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is the app.</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

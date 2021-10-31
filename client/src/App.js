//Import statements
import React, { useState } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//Components import
import Navbar from './components/Navbar/Navbar';
import Advertisement from "./components/Advertisement/Advertisement";

function App() {

  const [ token , setToken ] = useState("");
  const [ authError , setAuthError] = useState("");

  return (
    <div>
        <BrowserRouter>
          <Switch>
              { token !== "" && !authError ? (
                <>
                   {/* You are logged in */}
                    <Route path = "/" exact>
                        <Navbar token = { token } />
                        <Advertisement />
                    </Route>  
                </>
              ):(
                <>
                    {/* You are logged out. */}
                    <Route path = "/" exact>
                        <Navbar token = { token }/>
                        <Advertisement />
                    </Route> 
                </>
              )}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

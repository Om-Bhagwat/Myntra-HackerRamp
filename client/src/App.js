//Import statements
import React, { useState } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

//Components import
import Navbar from './components/Navbar/Navbar';
import Advertisement from "./components/Advertisement/Advertisement";
import PhoneNumber from "./components/Login/PhoneNumber";
import Password from "./components/Login/Password";
import Register from "./components/Register/Register";
import Product from "./components/Product/Product";

function App() {

  //useState variables.
  const [ token , setToken ] = useState("");
  const [ authError , setAuthError] = useState("");
  const [ phone_number , setPhone_Number ] = useState();
  const [ password , setPassword ] = useState("");
  const [ name , setName ] = useState("");
  const [ email , setEmail] = useState("");
  const [ gender , setGender] = useState("");
  const [ alternatephone , setAlternatePhone ] = useState();
  const [ alternateName , setAlternateName ] = useState("");

  function onLogout(){
    localStorage.removeItem("token");
    setToken("");
  }

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
                        <Product />
                    </Route>  
                </>
              ):(
                <>
                    {/* You are logged out. */}
                    <Route path = "/" exact>
                        <Navbar token = { token }/>
                        <Advertisement />
                        <Product />
                    </Route> 
                    <Route path = "/phone_number" exact>
                        <PhoneNumber phone_number={phone_number} 
                                    setPhone_Number={setPhone_Number} 
                                    token = {token}
                                    setToken = {setToken}
                        />
                    </Route>
                    <Route path = "/password" exact>
                        <Password password = { password } 
                                  setPassword = {setPassword}
                                  phone_number = {phone_number}
                                  token = {token}
                                  setToken = {setToken}
                        />
                    </Route> 
                    <Route path="/newAccount" exact>
                        <Register phone_number = {phone_number}
                                  password = {password}
                                  setPassword = {setPassword}
                                  name = {name}
                                  setName = {setName}
                                  email = {email}
                                  setEmail = {setEmail}
                                  gender = {gender}
                                  setGender = {setGender}
                                  alternatephone = {alternatephone}
                                  setAlternatePhone = {setAlternatePhone}
                                  alternateName = {alternateName}
                                  setAlternateName = {setAlternateName}
                                  token = {token}
                                  setToken = {setToken}
                        />
                    </Route>
                </>
              )}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

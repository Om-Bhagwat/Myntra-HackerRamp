/* eslint-disable no-restricted-globals */
//Import statements
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";

//Components import
import Navbar from './components/Navbar/Navbar';
import Advertisement from "./components/Advertisement/Advertisement";
import PhoneNumber from "./components/Login/PhoneNumber";
import Password from "./components/Login/Password";
import Register from "./components/Register/Register";
import Product from "./components/Product/Product";
import UserProfile from "./components/UserProfile/UserProfile";
import Friends from "./components/Friends/Friends";
import Swipe from "./components/Swipe/Swipe";

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


  useEffect(()=>{
    const localToken = localStorage.getItem("token");
    const phoneToken = localStorage.getItem("phone_number");
    if(localToken){
      setToken(localToken);
      setPhone_Number(phoneToken);
    }

    async function Load_name(){
      try{
          const response = await axios.post(
              "http://localhost:3003/api/user/getuser",
              {
                  phone_no : phone_number
              }
          )
          console.log(response.data);
          setName(response.data.user1[0].name);
      }catch(error){
          console.log(error);
      }
  }

  Load_name();
  },[])

  function onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("phone_number");
    setPhone_Number();
    setToken("");
  }

  return (
    <div>
        <BrowserRouter>
          <Switch>
              { token !== ""  ? (
                <>
                   {/* You are logged in */}
                    <Route path = "/" exact>
                        <Navbar token = { token } onLogout = {onLogout} />
                        <Advertisement />
                        <Swipe phone_number={phone_number} name={name} />
                        <Product />
                    </Route>
                    <Route path="/profile" exact>
                        <Navbar token = { token } onLogout = {onLogout}/>
                        <UserProfile phone_number={phone_number} />
                    </Route>
                    <Route path = "/friends" exact>
                        <Navbar token = {token} onLogout = {onLogout}/>
                        <Friends phone_number={phone_number} name={name}/>  
                    </Route> 
                </>
              ):(
                <>
                    {/* You are logged out. */}
                    <Route path = "/" exact>
                        <Navbar token = { token } onLogout = {onLogout}/>
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

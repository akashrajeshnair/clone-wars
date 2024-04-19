import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  }from "react-router-dom";
import SignIn from "./pages/Signin/signin"
import Feed from "./pages/Feed/feed"

function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<SignIn/>}></Route>
                <Route exact path="/feed" element={<Feed/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;
import React from "react";
import {Route, Switch} from 'react-router-dom'
import Home from "./core/Home";

import login from "./loggin";
import signup from "./signup";
// import chat from "./users/chat/chat";
import chat from "./chat";
import trangchu1 from "./trangchu1";
const Mainrouter = () =>(
    <div>
        <Switch>
            <Route path='/trangchu' component={trangchu1}/>
            <Route path='/chat' component={chat}/>
            <Route path='/signin' component={login} />
            <Route path='/signup' component={signup}/>
            <Route path='/' component={Home}/>
            
        </Switch>
    </div>
);

export default Mainrouter;
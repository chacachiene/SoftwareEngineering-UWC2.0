import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Wrapper from './pages/layouts/Wrapper.js';
import Home from "./components/Home/Home.js"
import Users from './components/Users/Users.js';
import Auth from './components/Auth/Auth.js';
import MCPs from "./components/MCPs/MCPs.js";
import Trucks from "./components/Trucks/Trucks.js";
import Tasks from "./components/Tasks/Tasks.js"
import Chat from "./components/Chat/Chat.js"
import Map from "./components/Map/Map.js"
const App = () => {
    return (
        <BrowserRouter>
         
                <Wrapper
                    header={{
                        notifications: '1',
                        messages: '2',
                        username: 'Username',
                      }}
                    
                >

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/auth" element={<Auth />} />
                        <Route exact path="/users" element={<Users />} />
                        <Route exact path="/mcps" element={<MCPs />} />
                        <Route exact path="/trucks" element={<Trucks />} />
                        <Route exact path="/tasks" element={<Tasks />} />
                        <Route exact path="/map" element={<Map />} />
                        <Route exact path="/chat" element={<Chat />} />
                    </Routes>
                </Wrapper>

        
        </BrowserRouter>
    )
};

export default App;


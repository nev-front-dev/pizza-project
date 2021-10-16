import React from 'react';

import Header from "./components/header/Header";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cart" component={Cart}/>
        </div>
    );
}

export default App;

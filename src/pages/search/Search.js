import React, { Component, lazy } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import From from "./child/From"
import Tab from "./child/SerchTab"
import "./style.scss"
const User = lazy(() => import("./user"));
const Menu = lazy(() => import("./menu"));
const Cyclopedia = lazy(() => import("./cyclopedia"));

class Search extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="search">
                <From />
                <Tab />
                    <Route path="/search/menu" component={Menu} />
                    <Route path="/search/cyclopedia" component={Cyclopedia} />
                    <Route path="/search/user" component={User} />
            </div>
        );
    }
}

export default Search;
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
                <Switch>
                    <Route path="/search/1" component={Menu} />
                    <Route path="/search/2" component={Cyclopedia} />
                    <Route path="/search/3" component={User} />
                </Switch>



            </div>
        );
    }
}

export default Search;
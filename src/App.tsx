import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import Tab from './components/Section20_SystemUser/GroupUser';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <div className="App">
                    {/* Sub menu */}
                    <IndexMenu />

                    {/* main */}
                    <main>
                        {/* Top bar user */}
                        <TopBarUser />

                        {/* Route content */}
                        <div className="content">
                            <Tab/>
                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

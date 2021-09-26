import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import Tab from './components/Section19_Tab/Tab';
import TabEdit from './components/Section19_Tab/TabEdit';
import ListUser from './components/Section20_SystemUser/ListUser';
import GroupUser from './components/Section20_SystemUser/GroupUser';
import ClassroomSetting from './components/Section21_ClassroomSetting/ClassroomSetting';

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
                            <Route path="/tab" component={Tab}></Route>
                            <Route path="/tabedit" component={TabEdit}></Route>
                            <Route path="/groupuser" component={GroupUser}></Route>
                            <Route path="/listuser" component={ListUser}></Route>
                            <Route path="/classroomsetting" component={ClassroomSetting}></Route>
                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

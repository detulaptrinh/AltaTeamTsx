import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import Boxphancong from './components/Section14_BoxProfile/Test';
import ProfileTeacher from './components/Section14_BoxProfile/ProfileTeacher';
import ProfileTeacherEdit from './components/Section14_BoxProfile/ProfileTeacherEdit'


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
                            <Route exact path="/" component={Boxphancong}/>
                            <Route path="/profile-teacher" component={ProfileTeacher}/>
                            <Route path="/profile-teacher-edit" component={ProfileTeacherEdit}/>

                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

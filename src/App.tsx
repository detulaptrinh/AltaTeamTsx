import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import Dashboard from './components/Section2_Dashboard/Dashboard';
import Page2 from './components/Section2_Dashboard/Page2'
import Page3 from './components/Section2_Dashboard/Page3'
import Page4 from './components/Section2_Dashboard/Page4'
import Profile from './components/Section14_BoxProfile/Profile';
import ProfileTeacher from './components/Section14_BoxProfile/ProfileTeacher';
import ProfileTeacherEdit from './components/Section14_BoxProfile/ProfileTeacherEdit'
import WorkingProcess from './components/Section14_BoxProfile/WorkingProcess'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <div className="App">
                    <IndexMenu />
                    <main>
                        <TopBarUser />
                        <div className="content">
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />
                            <Route path="/page4" component={Page4} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/profile-teacher" component={ProfileTeacher}/>
                            <Route path="/profile-teacher-edit" component={ProfileTeacherEdit}/>
                            <Route path="/profile-process" component={WorkingProcess}/>
                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';

import SubjectList from './components/page5_boxdata_sbj/SubjectList';
import ClassList from './components/page6_boxdata_class/boxdata_class_list/ClassList';
import ClassDetail from './components/page6_boxdata_class/boxdata_class_detail/ClassDetail';

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
                                <Route path="/boxdatasbj" component={SubjectList} />
                                <Route path="/boxdataclass" component={ClassList} />
                                <Route path="/boxdatadetail" component={ClassDetail} />
                            </div>
                        </main>
                    </div>
                </Router>
            </div>
        )
    }
}

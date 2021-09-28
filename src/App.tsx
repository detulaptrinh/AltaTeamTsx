import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';
import StudentProfile from './components/Tri_Page_10_11_12_13/Section_10_Student_Profile/StudentProfile';
import TransferSchool from './components/Tri_Page_10_11_12_13/Section_12_Accept_Transfer_School/Accept_Transfer_School';
import SelectsYear from './components/Tri_Page_10_11_12_13/Categories/SelectsYear';
import Searchs from './components/Tri_Page_10_11_12_13/Categories/Searchs';
import PaginationText from './components/Tri_Page_10_11_12_13/Categories/PaginationText';
import PaginationNumber from './components/Tri_Page_10_11_12_13/Categories/PaginationsNumber';
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
                                <Route path="/studentProfile" component={StudentProfile} />
                                <Route path="/transferSchool" component={TransferSchool} />
                                <Route path="/SelectsYear" component={SelectsYear} />
                                <Route path="/searchs" component={Searchs} />
                                <Route path="/pagitxt" component={PaginationText} />
                                <Route path="/paginumber" component={PaginationNumber} />
                            </div>
                        </main>
                    </div>
                </Router>
            </div>
        )
    }
}

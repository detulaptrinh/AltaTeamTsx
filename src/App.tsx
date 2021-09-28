import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// css antd
import 'antd/dist/antd.css';
import IndexMenu from './components/index_menu/IndexMenu';
import TopBarUser from './components/top_bar_user/TopBarUser';

import Danhsachchude from './components/Sesion15_Danhsachchude/Boxchude'
import Phancong from './components/Sesion15_Phancong/Boxphancong'
import Chitietbaikiemtra from './components/Sesion16_Chitietbaikiemtra/Boxchitiet'
import Caidathethong from './components/Sesion18_Caidathethong/Boxcaidat'
import Cauhinh from './components/Sesion18_Cauhinh/Boxcauhinh'
import Xemlichthi from './components/Sesion16_Chitietlichthi/Boxlichthi'
import Quanlybaikiemtra from './components/Sesion16_Quanlybaikiemtra/Boxbaikiemtra'

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
                            <Route path="/danhsach" component={Danhsachchude}/>
                            <Route path="/phancong" component={Phancong}/>
                            <Route path="/chitiet" component={Chitietbaikiemtra}/>
                            <Route path="/caidat" component={Caidathethong}/>
                            <Route path="/cauhinh" component={Cauhinh}/>
                            <Route path="/lichthi" component={Xemlichthi}/>
                            <Route path="/kiemtra" component={Quanlybaikiemtra}/>
                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

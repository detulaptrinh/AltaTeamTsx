import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
// css antd
import "antd/dist/antd.css";
import IndexMenu from "./components/index_menu/IndexMenu";
import TopBarUser from "./components/top_bar_user/TopBarUser";
import CourseSetting from "./components/Section22_CourseSetting/CourseSetting";
import TrainingLevelsManage from "./components/Section23_TrainingLevelsManage/TrainingLevelsManage";

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
                <Route path="/CourseSetting" component={CourseSetting} />
                <Route
                  path="/TrainingLevelsManage"
                  component={TrainingLevelsManage}
                />
              </div>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

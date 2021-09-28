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

import Dashboard from './components/Section2_Dashboard/Dashboard';
import Page2 from './components/Section2_Dashboard/Page2'
import Page3 from './components/Section2_Dashboard/Page3'
import Page4 from './components/Section2_Dashboard/Page4'
import Profile from './components/Section14_BoxProfile/Profile';
import ProfileTeacher from './components/Section14_BoxProfile/ProfileTeacher';
import ProfileTeacherEdit from './components/Section14_BoxProfile/ProfileTeacherEdit'
import WorkingProcess from './components/Section14_BoxProfile/WorkingProcess';
import StudentInformation from './components/section9_student_records/student_information/StudentInformation';
import EditStudentInformation from './components/section9_student_records/edit_student_information/EditStudentInformation';
import StudyProcess from './components/section9_student_records/study_process/StudyProcess';


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

                            <Route path="/tab" component={Tab}></Route>
                            <Route path="/tabedit" component={TabEdit}></Route>
                            <Route path="/groupuser" component={GroupUser}></Route>
                            <Route path="/listuser" component={ListUser}></Route>
                            <Route path="/classroomsetting" component={ClassroomSetting}></Route>

                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/page2" component={Page2} />
                            <Route path="/page3" component={Page3} />
                            <Route path="/page4" component={Page4} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/profile-teacher" component={ProfileTeacher}/>
                            <Route path="/profile-teacher-edit" component={ProfileTeacherEdit}/>
                            <Route path="/profile-process" component={WorkingProcess}/>

                            {/* 9.1 hồ sơ sinh viên - thông tin sinh viên */}
                            {/* 9.1 thông tin sinh viên */}
                            <Route path="/student-information" component={StudentInformation}></Route>
                            {/* 9.1.1 chỉnh sửa thông tin sinh viên */}
                            <Route path="/edit-student-information" component={EditStudentInformation}></Route>
                            {/* 9.2 kết quả học tập */}
                            <Route path="/study-process" component={StudyProcess} />

                        </div>
                    </main>
                </div>
                </Router>
            </div>
        )
    }
}

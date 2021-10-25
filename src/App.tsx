import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
// css antd
import IndexMenu from "./components/index_menu/IndexMenu";
import TopBarUser from "./components/top_bar_user/TopBarUser";

import Tab from "./components/Section19_Tab/Tab";
import TabEdit from "./components/Section19_Tab/TabEdit";
import ListUser from "./components/Section20_SystemUser/ListUser";
import GroupUser from "./components/Section20_SystemUser/GroupUser";
import ClassroomSetting from "./components/Section21_ClassroomSetting/ClassroomSetting";

import Dashboard from "./components/Section2_Dashboard/Dashboard";
import Page2 from "./components/Section2_Dashboard/Page2";
import Page3 from "./components/Section2_Dashboard/Page3";
import Page4 from "./components/Section2_Dashboard/Page4";
import Profile from "./components/Section14_BoxProfile/Profile";
import ProfileTeacher from "./components/Section14_BoxProfile/ProfileTeacher";
import ProfileTeacherEdit from "./components/Section14_BoxProfile/ProfileTeacherEdit";
import WorkingProcess from "./components/Section14_BoxProfile/WorkingProcess";
import StudentInformation from "./components/section9_student_records/student_information/StudentInformation";
import EditStudentInformation from "./components/section9_student_records/edit_student_information/EditStudentInformation";
import StudyProcess from "./components/section9_student_records/study_process/StudyProcess";

import SubjectList from "./components/section5_boxdata_sbj/SubjectList";
import ClassList from "./components/section6_boxdata_class/boxdata_class_list/ClassList";
import DetailStudent from "./components/section6_boxdata_class/boxdata_detail_student/DetailStudent";
import DetailSubject from "./components/section6_boxdata_class/boxdata_detail_subject/DetailSubject";
import PointType from "./components/section7_boxdata_type/PointType";
import ProfileStudent from "./components/section8_profile/student_profile/StudentProfile";
import CreateStudent from "./components/section8_profile/create_student/CreateStudent";

import Danhsachchude from "./components/Sesion15_Danhsachchude/Boxchude";
import Phancong from "./components/Sesion15_Phancong/Boxphancong";
import Chitietbaikiemtra from "./components/Sesion16_Chitietbaikiemtra/Boxchitiet";
import Caidathethong from "./components/Sesion18_Caidathethong/Boxcaidat";
import Cauhinh from "./components/Sesion18_Cauhinh/Boxcauhinh";
import Xemlichthi from "./components/Sesion16_Chitietlichthi/Boxlichthi";
import Quanlybaikiemtra from "./components/Sesion16_Quanlybaikiemtra/Boxbaikiemtra";

// Tri
import StudentProfiles from "./components/Tri_Page_10_11_12_13/Section_10_Student_Profile/StudentProfiles";
import TransferSchool from "./components/Tri_Page_10_11_12_13/Section_12_Accept_Transfer_School/Accept_Transfer_School";
import SelectsYear from "./components/Tri_Page_10_11_12_13/Categories/SelectsYear";
import Searchs from "./components/Tri_Page_10_11_12_13/Categories/Searchs";
import PaginationText from "./components/Tri_Page_10_11_12_13/Categories/PaginationText";
import PaginationNumber from "./components/Tri_Page_10_11_12_13/Categories/PaginationsNumber";
import ReservationRecords from "./components/Tri_Page_10_11_12_13/Section_13_Reservation_Records/Reservation_Record";
import BtnAdd from "./components/Tri_Page_10_11_12_13/Categories/ButtonAdd";
// Long
import CourseSetting from "./components/Section22_CourseSetting/CourseSetting";
import TrainingLevelsManage from "./components/Section23_TrainingLevelsManage/TrainingLevelsManage";
import DeclareSchoolYear from "./components/Section2_DeclareSchoolYear/DeclareSchoolYear";
import Bonus from "./components/Tri_Page_10_11_12_13/Section_10_Student_Profile/Bonus";
import SelectsBlock from "./components/Tri_Page_10_11_12_13/Categories/SelectBlock";
import Disciplines from "./components/Tri_Page_10_11_12_13/Section_10_Student_Profile/Disciplines";
import ModelDemo from "./components/Tri_Page_10_11_12_13/Categories/ModelDemo";

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
                <Route
                  path="/classroomsetting"
                  component={ClassroomSetting}
                ></Route>

                <Route exact path="/" component={Dashboard} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/page4" component={Page4} />
                <Route path="/profile" component={Profile} />
                <Route path="/profile-teacher" component={ProfileTeacher} />
                <Route
                  path="/profile-teacher-edit"
                  component={ProfileTeacherEdit}
                />
                <Route path="/profile-process" component={WorkingProcess} />

                {/* kien */}
                <Route path="/danhsach" component={Danhsachchude} />
                <Route path="/phancong" component={Phancong} />
                <Route path="/chitiet" component={Chitietbaikiemtra} />
                <Route path="/caidat" component={Caidathethong} />
                <Route path="/cauhinh" component={Cauhinh} />
                <Route path="/lichthi" component={Xemlichthi} />
                <Route path="/kiemtra" component={Quanlybaikiemtra} />

                {/* tri */}
                <Route path="/studentprofiles" component={StudentProfiles} />
                <Route path="/transferschool" component={TransferSchool} />
                <Route path="/reservationrecords" component={ReservationRecords} />

                {/* huy */}
                <Route path="/boxdatasbj" component={SubjectList} />
                <Route path="/boxdataclass" component={ClassList} />
                <Route path="/boxdatastudent" component={DetailStudent} />
                <Route path="/boxdatasubject" component={DetailSubject} />
                <Route path="/boxdatatype" component={PointType} />
                <Route path="/studentprofile" component={ProfileStudent} />
                <Route path="/studentcreate" component={CreateStudent} />
                {/* 9.1 hồ sơ sinh viên - thông tin sinh viên */}
                {/* 9.1 thông tin sinh viên */}
                <Route
                  path="/student-information"
                  component={StudentInformation}
                ></Route>
                {/* 9.1.1 chỉnh sửa thông tin sinh viên */}
                <Route
                  path="/edit-student-information"
                  component={EditStudentInformation}
                ></Route>
                {/* 9.2 kết quả học tập */}
                <Route path="/study-process" component={StudyProcess} />

                {/* Long */}
                <Route
                  path="/declare-schoolyear"
                  component={DeclareSchoolYear}
                />
                <Route path="/course-setting" component={CourseSetting} />
                <Route
                  path="/training-levelsmanage"
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

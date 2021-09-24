import React from 'react'
import BoxColors from './BoxColors'
import { DatePicker, Select } from 'antd';
import "./dash.css"

const { Option } = Select;

function Dashboard(date, dateString) {
    console.log(date, dateString)

    return (
        <>
            <div className="overview_content">
                <h1 className="content-text">Tổng quan</h1>
                <div className="overview_content_currentCourse">
                    <div className="choose_schoolYear">
                        <form action="">
                            <label className="label" for="school_year">Niên khóa</label>
                            <Select id="choose_year" defaultValue="2020-2021">
                                    <Option value="2017-2018">2017-2018</Option>
                                    <Option value="2018-2019">2018-2019</Option>
                                    <Option value="2019-2020">2019-2020</Option>
                                    <Option value="2020-2021">2020-2021</Option>
                            </Select>
                        </form>
                    </div>
                    <BoxColors />
                </div>
                <div className="statistics">
                    <div className="result_study">
                        <div className="result_study_header">
                            <p className="statistics_title">Thống kê kế hoạch học tập</p>
                            <form action="">
                                <Select id="choose_block" defaultValue="Chọn khóa">
                                    <Option value="2017-2018">2017-2018</Option>
                                    <Option value="2018-2019">2018-2019</Option>
                                    <Option value="2019-2020">2019-2020</Option>
                                    <Option value="Chọn khóa">Chọn khóa</Option>
                                </Select>
                            </form>
                        </div>
                    </div>
                    <div className="count_students">
                        <div className="count_students_header">
                            <p className="statistics_title">Số lượng học viên</p>
                            <form action="">
                                <Select id="choose_level" defaultValue="THCS">
                                    <Option value="TH">TH</Option>
                                    <Option value="THCS">THCS</Option>
                                    <Option value="THPT">THPT</Option>
                                </Select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="statisticss">
                    <div className="result_charts">
                        <div className="charts_header">
                            <p className="charts_title">Thống kê số lượng truy cập</p>
                            <DatePicker alt="" onChange={Dashboard} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

import React from 'react'
import BoxColors from './BoxColors'
import { DatePicker, Select } from 'antd';
import "./dash.css"
import DemoArea from './DemoArea';
import DemoColumn from './DemoColumn';
import moment from 'moment';

const { Option } = Select;

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const dateFormats = 'YYYY/MM/DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const customFormat = value => `${value.format(dateFormat)} ${value.format(dateFormats)}`;

function Dashboard(date: any, dateString: any) {
    console.log(date, dateString)

    return (
        <>
            <div className="overview_content">
                <h1 className="content-text">Tổng quan</h1>
                <div className="overview_content_currentCourse">
                    <div className="choose_schoolYear">
                        <form className="form__dash" action="">
                            <label className="label">Niên khóa</label>
                            <Select
                                className="select__dash"
                                defaultValue="2020-2021"
                                style={{ width: 136 }}
                                >
                                <Option value="2019-2020">2019-2020</Option>
                                <Option value="2018-2019">2018-2019</Option>
                                <Option value="2017-2018">2017-2018</Option>
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
                                <Select className="select__dash" style={{ width:136 }} id="choose_block" defaultValue="Chọn khóa">
                                    <Option value="2017-2018">2017-2018</Option>
                                    <Option value="2018-2019">2018-2019</Option>
                                    <Option value="2019-2020">2019-2020</Option>
                                    <Option value="Chọn khóa">Chọn khóa</Option>
                                </Select>
                            </form>
                        </div>
                        <DemoColumn/>
                    </div>
                    <div className="count_students">
                        <div className="count_students_header">
                            <p className="statistics_title">Số lượng học viên</p>
                            <form action="">
                                <Select className="select__dash" style={{width:136}} id="choose_level" defaultValue="THCS">
                                    <Option value="TH">TH</Option>
                                    <Option value="THCS">THCS</Option>
                                    <Option value="THPT">THPT</Option>
                                </Select>
                            </form>
                        </div>
                        <div>
                            <label htmlFor="value1">Lớp 6</label>
                            <meter id="value1" min="0" max="100" /* low="30" high="75" optimum="30" */ value="65" />
                        </div>
                    </div>
                </div>
                <div className="statisticss">
                    <div className="result_charts">
                        <div className="charts_header">
                            <p className="charts_title">Thống kê số lượng truy cập</p>
                            <DatePicker 
                            defaultValue={moment('2015/01/01', dateFormat,dateFormats)} 
                            format={customFormat} />
                        </div>
                    <DemoArea/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

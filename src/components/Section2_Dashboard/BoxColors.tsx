import React from 'react'
import './dash.css'

function BoxColors() {
    return (
        <>
        <div className="boxs students">
            <div className="elipse s1"></div>
            <div className="elipse s2"></div>
            <div className="elipse s3"></div>
            <span className="box_numbers">5000</span>
            <p className="box_title">Học viên</p>
        </div>
        <div className="boxs teachers">
            <div className="elipse s1"></div>
            <div className="elipse s2"></div>
            <div className="elipse s3"></div>
            <span className="box_numbers">1500</span>
            <p className="box_title">Giảng viên</p>
        </div>
        <div className="boxs class">
            <div className="elipse c1"></div>
            <div className="elipse c2"></div>
            <div className="elipse c3"></div>
            <span className="box_numbers">55</span>
            <p className="box_title">Lớp học</p>
        </div>
        </>
    )
}

export default BoxColors

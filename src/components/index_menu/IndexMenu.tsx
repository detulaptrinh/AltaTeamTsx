import React, { Component } from 'react'

// css
import './IndexMenu.css'

// icon avg
import logo from '../../assets/avg/logo.svg';
import eyes from '../../assets/avg/eyeIcon.svg';
import chart from '../../assets/avg/chartIcon.svg';
import users from '../../assets/avg/usersIcon.svg';
import bag from '../../assets/avg/bagIcon.svg';
import book from '../../assets/avg/bookopenIcon.svg';
import setting from '../../assets/avg/settingIcon.svg';

export default class IndexMenu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="box">
                    <div className="icon active">
                        <img src={eyes} alt="" />
                    </div>
                    <div className="icon">
                        <img src={chart} alt="" />
                    </div>
                    <div className="icon">
                        <img src={users} alt="" />
                    </div>
                    <div className="icon">
                        <img src={bag} alt="" />
                    </div>
                    <div className="icon">
                        <img src={book} alt="" />
                    </div>
                    <div className="icon">
                        <img src={setting} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

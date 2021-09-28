import React, { Component } from 'react'
import './IndexMenu.css'
import {
    IconLogo,
    IconEyes,
    IconChart,
    IconUser,
    IconBag,
    IconBook,
    IconSettings,
} from "../../assets/svg";

export default class IndexMenu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="logo">
                    <img src={IconLogo} alt="Logo" />
                </div>
                <div className="box">
                    <div className="icon active">
                        <img src={IconEyes} alt="" />
                    </div>
                    <div className="icon">
                        <img src={IconChart} alt="" />
                    </div>
                    <div className="icon">
                        <img src={IconUser} alt="" />
                    </div>
                    <div className="icon">
                        <img src={IconBag} alt="" />
                    </div>
                    <div className="icon">
                        <img src={IconBook} alt="" />
                    </div>
                    <div className="icon">
                        <img src={IconSettings} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

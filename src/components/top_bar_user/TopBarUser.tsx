import React, { Component } from 'react';
import './TopBarUser.css'
import {IconUserCircle} from '../../assets/svg';

export default class TopBarUser extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-user">
                    <img src={IconUserCircle} alt="" />
                    <div className="top-bar-user-name">Admin</div>
                    <div className="top-bar-user-logout">
                        <a>Đăng xuất</a>
                    </div>
                </div>
        </div>
        )
    }
}

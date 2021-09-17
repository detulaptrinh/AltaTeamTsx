import React, { Component } from 'react';

// css
import './TopBarUser.css'

// icon user
import user from '../../assets/avg/user_circle.svg';

export default class TopBarUser extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-user">
                    <img src={user} alt="" />
                    <div className="top-bar-user-name">Admin</div>
                    <div className="top-bar-user-logout">
                        <a>Đăng xuất</a>
                    </div>
                </div>
        </div>
        )
    }
}

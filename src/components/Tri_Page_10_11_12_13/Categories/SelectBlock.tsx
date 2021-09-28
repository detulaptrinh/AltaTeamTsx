import React, { Component } from 'react';
import './Categories.css'
export default class SelectsYear extends Component {
    render() {
        return (
            <>
                <div className="my-select-year-box">
                    <div className="my-select-year">
                        <select defaultValue="2020-2021">
                            <option value="2020-2021">2020-2021</option>
                            <option value="2019-2020">2019-2020</option>
                            <option value="2018-2019">2018-2019</option>
                            <option value="2017-2018">2017-2018</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}
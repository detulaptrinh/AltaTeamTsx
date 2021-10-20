import React, { Component } from 'react';
import './Categories.css'
export default class SelectsBlock extends Component {
    render() {
        return (
            <>
                <div className="my-select-block-box">
                    <div className="my-select-block">
                        <select defaultValue="Tất cả cá khối">
                            <option value="block6">Khối 6</option>
                            <option value="block6">Khối 7</option>
                            <option value="block6">Khối 8</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}
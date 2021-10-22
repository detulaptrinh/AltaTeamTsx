import React, { Component } from 'react'
import './Button.css'
import { Button } from 'antd';
import {Link} from "react-router-dom"


export default class Buttonnn extends Component {
    render() {
    return (
        <> 
           <Button className="sesion15__button"> 
                <Link to="/phancong"><p className="sesion15__textphanconggd">Phân công giảng dạy</p></Link>
                
           </Button>
      </>
    )
}
}
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./index.less";
import img from '@/assets/404.png';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <img src={img} alt="404" className={`animated swing`} />
                <Link to="/" className="back-text">回到首页</Link>
            </div>
        )
    }
}

export default NotFound;
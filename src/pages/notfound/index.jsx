import React, { Component } from 'react';
import "./index.less";
import img from '@/assets/404.png';

class NotFound extends Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: 'hinge'})
    };
    render() {
        return (
            <div className="not-found">
                <img src={img} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
            </div>
        )
    }
}

export default NotFound;
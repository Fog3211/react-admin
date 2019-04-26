import React, { Component } from 'react';
import { Statistic,Icon } from 'antd';
import './index.less';

export default class TagCard extends Component {
    render() {
        return (
            <div className="tag-card">
                <div className="icon-box">
                    <Icon type="team" className="icon"/>
                </div>
                <div className="info-box">
                    {/* <h1 className="count">212</h1> */}
                    <Statistic title="Active Users" value={112893} />
                    <p className="info">销售总额</p>
                </div>
            </div>
        );
    }
}

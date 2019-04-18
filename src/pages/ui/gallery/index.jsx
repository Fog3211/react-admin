import React, { Component } from 'react';
import { Menu, Icon, Layout, Popover } from 'antd';
import PhotoSwipe from 'photoswipe';
import './index.less';
import img_src from './data';

export default class Gallery extends Component {
    state = {
        img_src: {},
        gallery: null
    };
    componentWillMount() {
        this.setState({ img_src });
    }
    render(){
        return (
            <div></div>
        )
    }
}

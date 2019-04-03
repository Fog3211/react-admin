import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { Icon } from 'antd';
import classNames from 'classnames';
import './style.less';

export default class ThemePicker extends Component {
    state = {
        switcherOn: false,
        background: '#313653',
    };
    componentWillMount() {
        const background_color =
            localStorage.getItem('@primary-color') || '#313653';
        this.setState({
            background: background_color,
        });
    }
    switcherOn = () => {
        this.setState({
            switcherOn: !this.state.switcherOn,
        });
    };
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        localStorage.setItem('@primary-color', color.hex);
        // console.log(color.hex);
        window.less.modifyVars({
            '@primary-color': color.hex,
        });
    };
    render() {
        const { switcherOn, background } = this.state;
        return (
            <div className={classNames('switcher', { active: switcherOn })}>
                <span className="sw-btn" onClick={this.switcherOn}>
                    <Icon type="setting" size="large" />
                </span>
                <SketchPicker
                    color={background}
                    onChangeComplete={this.handleChangeComplete}
                />
            </div>
        );
    }
}

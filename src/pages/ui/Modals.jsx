import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }


    handleOpen = (type) => {
        //小技巧tpye变量直接使用 [type]实现
        this.setState({
            [type]: true
        })
    }

    // 声明一个弹窗的状态 当作 变量
    handleConfirm = (type) => {
        Modal[type]({
            title:'确认',
            content:'你确定正确吗？',
            onOk(){
                console.log('ok');
            },
            onCancel(){
                console.log('退出');
            }
        })
    }


    render() {

        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.handleOpen('showModal1') }}>open</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal2') }}>自定义页脚</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal3') }}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal4') }}>水平垂直居中弹框</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => { this.handleConfirm('confirm') }}>Confirm</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('info') }}>info</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('success') }}>success</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('warning') }}>waring</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>欢迎学习react教程</p>
                </Modal>
                <Modal
                    title="React"
                    okText="好的"
                    cancelText="取消"
                    visible={this.state.showModal2}
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>欢迎学习react教程</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    okText="好的"
                    cancelText="取消"
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>欢迎学习react教程</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    okText="好的"
                    cancelText="取消"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>欢迎学习react教程水平方向剧中</p>
                </Modal>
            </div>
        )
    }

}




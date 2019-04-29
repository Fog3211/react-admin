import React, { Component } from 'react';
import { Row, Col, Card, Button, Spin } from 'antd';
import Draggable from 'react-draggable';
import './index.less';

export default class Drag extends Component {
	state = {
		global_loading: false,
		deltaPosition: {
			x: 0,
			y: 0
		},
		controlledPosition: {
			x: 0,
			y: 0
		}
	};
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 500);
	}
	handleDrag = (e, pos) => {
		const { x, y } = this.state.deltaPosition;
		this.setState({
			deltaPosition: {
				x: x + pos.deltaX,
				y: y + pos.deltaY
			}
		});
	};
	adjustXPos = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const { x, y } = this.state.controlledPosition;
		this.setState({ controlledPosition: { x: x - 10, y } });
	};

	adjustYPos = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const { controlledPosition } = this.state;
		const { x, y } = controlledPosition;
		this.setState({ controlledPosition: { x, y: y - 10 } });
	};
	onControlledDrag = (e, pos) => {
		const { x, y } = pos;
		this.setState({ controlledPosition: { x, y } });
	};
	render() {
		const { global_loading, deltaPosition, controlledPosition } = this.state;
		return (
			<Spin spinning={global_loading} size="large">
				<Row gutter={15}>
					<Col md={8} xs={24} className="drag">
						<Draggable>
							{/* 没有div嵌套会变得卡顿 */}
							<div>
								<Card title="基本拖拽" className="drag-box">
									点我可任意拖拽
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable axis="x">
							<div>
								<Card title="仅x轴拖拽" className="drag-box">
									点我可在x轴拖拽
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable axis="y">
							<div>
								<Card title="仅y轴拖拽" className="drag-box">
									点我可在y轴拖拽
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable onDrag={this.handleDrag}>
							<div>
								<Card title="仅y轴拖拽" className="drag-box">
									<p>相对当前坐标位移：</p>
									<p>
										x: {deltaPosition.x.toFixed(0)}, y:{deltaPosition.y.toFixed(0)}
									</p>
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24}>
						<Draggable handle="strong">
							<div>
								<Card title="指定拖拽位置" className="drag-box">
									<strong className="drag">
										<div className="drag-area">只能在此处拖拽</div>
									</strong>
									<div>此处无法拖拽</div>
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable cancel="strong">
							<div>
								<Card title="指定拖拽位置" className="drag-box">
									<strong className="drag-normal">
										<div className="drag-area">不能在此处拖拽</div>
									</strong>
									<div>点我拖拽</div>
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable
							bounds={{
								top: -100,
								left: -100,
								right: 100,
								bottom: 100
							}}
						>
							<div>
								<Card title="固定拖拽范围" className="drag-box">
									<div>只能在200px的正方形区域中拖拽</div>
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable grid={[ 25, 25 ]}>
							<div>
								<Card title="固定拖拽步伐" className="drag-box">
									<div>拖拽25px为一步</div>
								</Card>
							</div>
						</Draggable>
					</Col>
					<Col md={8} xs={24} className="drag">
						<Draggable onDrag={this.onControlledDrag} position={controlledPosition}>
							<div>
								<Card title="通过按钮拖拽" className="drag-box">
									<p>
										<Button onClick={this.adjustXPos} type="primary">
											调整X（-10px）
										</Button>
									</p>
									<p>
										<Button onClick={this.adjustYPos} type="primary">
											调整Y（-10px）
										</Button>
									</p>
								</Card>
							</div>
						</Draggable>
					</Col>
				</Row>
			</Spin>
		);
	}
}

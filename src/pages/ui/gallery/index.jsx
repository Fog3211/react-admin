import React, { Component } from 'react';
import { Row, Col, Card, Spin } from 'antd';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import img_src from './data';
import './index.less';

export default class Gallery extends Component {
	state = {
		global_loading: false,
		img_src: [],
		gallery: null
	};
	componentWillMount() {
		this.setState({ img_src });
	}
	componentWillUnmount() {
		this.closeGallery();
	}
	componentDidMount() {
		this.setState({ global_loading: true });
		setTimeout(() => {
			this.setState({ global_loading: false });
		}, 3000);
	}
	closeGallery = () => {
		if (!this.gallery) return;
		this.gallery.close();
	};
	openGallery = (item) => {
		const items = [
			{
				src: item,
				w: 0,
				h: 0
			}
		];
		const pswpElement = this.pswpElement;
		const options = { index: 0 };
		this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, items, options);
		this.gallery.listen('gettingData', (index, item) => {
			const _this = this;
			if (item.w < 1 || item.h < 1) {
				// unknown size
				var img = new Image();
				img.onload = function() {
					// will get size after load
					item.w = this.width; // set image width
					item.h = this.height; // set image height
					_this.gallery.invalidateCurrItems(); // reinit Items
					_this.gallery.updateSize(true); // reinit Items
				};
				img.src = item.src; // let's download image
			}
		});
		this.gallery.init();
	};
	render() {
		const { global_loading } = this.state;
		const imgsTag = img_src.map((v1) =>
			v1.data.map((v2) => (
				<Card key={v2.info} title={v1.title} className="gallery-box">
					<div>
						<img
							onClick={() => this.openGallery(v2.url)} //不能直接调用
							alt="img"
							width="100%"
							src={v2.url}
							className="img-show"
						/>
					</div>
					<div className="info">
						<small>{v2.info}</small>
					</div>
				</Card>
			))
		);
		return (
			<Spin spinning={global_loading} size="large">
				<Row gutter={10}>
					{img_src.map((item, index) => (
						<Col md={6} xs={24} key={index}>
							{imgsTag[index]}
						</Col>
					))}
				</Row>
				{/* 固定的html结构 */}
				<div
					className="pswp"
					tabIndex="-1"
					role="dialog"
					aria-hidden="true"
					ref={(div) => {
						this.pswpElement = div;
					}}
				>
					<div className="pswp__bg" />

					<div className="pswp__scroll-wrap">
						<div className="pswp__container">
							<div className="pswp__item" />
							<div className="pswp__item" />
							<div className="pswp__item" />
						</div>

						<div className="pswp__ui pswp__ui--hidden">
							<div className="pswp__top-bar">
								<div className="pswp__counter" />

								<button className="pswp__button pswp__button--close" title="Close (Esc)" />

								<button className="pswp__button pswp__button--share" title="Share" />

								<button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

								<button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

								<div className="pswp__preloader">
									<div className="pswp__preloader__icn">
										<div className="pswp__preloader__cut">
											<div className="pswp__preloader__donut" />
										</div>
									</div>
								</div>
							</div>

							<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
								<div className="pswp__share-tooltip" />
							</div>

							<button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

							<button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

							<div className="pswp__caption">
								<div className="pswp__caption__center" />
							</div>
						</div>
					</div>
				</div>
			</Spin>
		);
	}
}

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ReactQMap from 'react-qmap';

let classMap, windowMap;
export default class Map extends Component {
    state={
        apiKey:"UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE",
        center:{
            latitude:36.003147,
            longitude: 120.12221
        },
        mySpot:{
            latitude: 36.003147,
            longitude: 120.12221
        },
        initialOptions:{
            zoomControl: true, 
            mapTypeControl: true
        },
    }
    setMarker = () => {
        new windowMap.Marker({
             map: classMap,
             position: new windowMap.LatLng(30.53786, 104.07265),
             animation: windowMap.MarkerAnimation.DROP,
           });
         }
    getMap = (map, wMap) => {
        classMap = map;
        windowMap = wMap;
        this.setMarker();
    }
    render() {
        return (
            <Row gutter={16}>
                <Col md={24}>
                     <ReactQMap {...this.state} style={{height: 700}} getMap={(map, wMap) => this.getMap(map, wMap)} />
                </Col>
            </Row>
        );
    }
}

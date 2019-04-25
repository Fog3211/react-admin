import React, { Component } from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

export default class ScatterUI extends Component {
    render() {
        const data = this.props.data || [];
        return (
            <ResponsiveContainer width="100%" height={300}>
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                    <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                    <ZAxis
                        type="number"
                        dataKey="z"
                        range={[60, 400]}
                        name="score"
                        unit="km"
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    {data.map((item, index) => {
                        return (
                            <Scatter
                                name={item.name}
                                data={item.data}
                                fill={item.fill}
                                shape={item.shape}
                                key={index}
                            />
                        );
                    })}
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}

import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
        id: "VE",
        rock: 150,
        jazz: 90,
        folk: 60,
    },
    {
        id: "UY",
        rock: 60,
        jazz: 40,
        folk: 200,
    },
    {
        id: "CH",
        rock: 100,
        jazz: 50,
        folk: 150,
    },
    {
        id: "ES",
        rock: 180,
        jazz: 60,
        folk: 60,
    }
]

const Stream = () => (
    <div>
        <ResponsiveStream
            margin={{
                top: 10,
                right: 15,
                bottom: 1.5,
                left: 1.5,
            }}
            data={data}
            keys={['rock', 'jazz', 'folk']}
            offsetType="none"
            colors={colors}
            enableGridX={false}
            enableGridY={true}
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "",
                "legendOffset": 36
            }}
            isInteractive={true}
            animate={true}
            borderWidth={3}
            borderColor="#000000"
            fill={[
                {
                    "match": {
                        "id": "Paul"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "Marcel"
                    },
                    "id": "squares"
                }
            ]}
            defs={[
                {
                    "id": "dots",
                    "type": "patternDots",
                    "background": "inherit",
                    "color": "#2c998f",
                    "size": 4,
                    "padding": 2,
                    "stagger": true
                },
                {
                    "id": "squares",
                    "type": "patternSquares",
                    "background": "inherit",
                    "color": "#e4c912",
                    "size": 6,
                    "padding": 2,
                    "stagger": true
                }
            ]}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "column",
                    "translateX": 100,
                    "itemWidth": 80,
                    "itemHeight": 20,
                    "symbolSize": 12,
                    "symbolShape": "circle"
                }
            ]}
        />
        <div className="Title">STREAM</div>
    </div>
)

export default Stream

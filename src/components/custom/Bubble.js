import React from 'react'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
        country: "VE",
        value: 6.6
    },
    {
        country: "UY",
        value: 430
    },
    {
        country: "CH",
        value: 480
    },
    {
        country: "ES",
        value: 900
    }
    ,
    {
        country: "CO",
        value: 250
    }
    ,
    {
        country: "US",
        value: 1200
    }
]


const BubbleCustom = () => (
    <div>
        <ResponsiveBubble
            root={{
                country: 'root',
                children: data,
            }}
            identity="country"
            value="value"
            leavesOnly={true}
            colors="nivo"
            labelTextColor="inherit:darker(0.8)"
            labelSkipRadius={12}
            colorBy="country"
            borderWidth={3}
            borderColor="#000"
            padding={6}
            isInteractive={true}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
            defs={[
                {
                    "id": "lines",
                    "type": "patternLines",
                    "background": "none",
                    "color": "inherit",
                    "rotation": -45,
                    "lineWidth": 5,
                    "spacing": 8
                }
            ]}
            fill={[
                {
                    "match": {
                        "depth": 1
                    },
                    "id": "lines"
                }
            ]}
        />
        <div className="Title">BUBBLE</div>
    </div>
)

export default BubbleCustom

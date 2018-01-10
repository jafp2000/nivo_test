import React from 'react'
import { ResponsiveTreeMap } from '@nivo/treemap'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data2 = {
    country: 'root',
    children: generateCountriesData(['value'], { size: 24 }),
};

console.log(data2);

const data = [
    {
        country: "VE",
        value: 60
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
]

const TreeMap = () => (
    <div>
        <ResponsiveTreeMap
            margin={{
                top: 1.5,
                right: 16,
                bottom: 1.5,
                left: 1.5,
            }}
            root={{
                country: 'root',
                children: data,
            }}
            identity="country"
            value="value"
            leavesOnly={true}
            colors={colors}
            enableLabel={false}
            colorBy="country"
            borderWidth={3}
            borderColor="#000"
            labelTextColor="#000"
            isInteractive={true}
            animate={true}
        />
        <div className="Title">TREEMAP</div>
    </div>
)

export default TreeMap

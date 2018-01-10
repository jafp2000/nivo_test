import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
        country: "VE",
        rock: 150,
        jazz: 90,
        folk: 60,
    },
    {
        country: "UY",
        rock: 60,
        jazz: 40,
        folk: 200,
    },
    {
        country: "CH",
        rock: 100,
        jazz: 50,
        folk: 150,
    },
    {
        country: "ES",
        rock: 180,
        jazz: 60,
        folk: 60,
    }
]

const Bar = () => (
    <div>
        <ResponsiveBar
            margin={{
                top: 1.5,
                right: 10,
                bottom: 1.5,
                left: 1.5,
            }}
            padding={0.2}
            data={data}
            indexBy="country"
            enableGridX={true}
            enableGridY={true}
            keys={['rock', 'jazz', 'folk']}
            colors={colors}
            axisBottom={null}
            axisLeft={null}
            borderWidth={2}
            borderColor="#000"
            enableLabel={true}
            labelSkipHeight={24}
            isInteractive={true}
            animate={true}
        />
        <div className="Title">BAR</div>
    </div>
)

export default Bar

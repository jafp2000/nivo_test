import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'
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

const HeatMap = () => (
    <div>
        <ResponsiveHeatMap
            margin={{
                top: 1,
                right: 11,
                bottom: 1,
                left: 1,
            }}
            data={data}
            padding={6}
            colors={colors}
            indexBy="country"
            keys={['rock', 'jazz', 'folk']}
            labelTextColor="#000"
            cellOpacity={1}
            cellBorderWidth={3}
            cellBorderColor="#000"
            axisTop={null}
            axisBottom={null}
            axisLeft={null}
            isInteractive={true}
            animate={true}
            cellHoverOthersOpacity={0}
        />
        <div className="Title">HEATMAP</div>
    </div>
)

export default HeatMap

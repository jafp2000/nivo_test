import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { generateProgrammingLanguageStats } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
        id: "1",
        label: "VE",
        value: 62
    },
    {
        id: "2",
        label: "UY",
        value: 420
    },
    {
        id: "3",
        label: "CH",
        value: 480
    },
    {
        id: "4",
        label: "ES",
        value: 900
    }
]

const Pie = () => (
    <div>
        <ResponsivePie
            margin={{
                top: 1.5,
                right: 1.5,
                bottom: 1.5,
                left: 1.5,
            }}
            data={data}
            colors={colors}
            innerRadius={0.4}
            enableRadialLabels={false}
            borderWidth={3}
            borderColor="#000"
            slicesLabelsSkipAngle={4}
            animate={true}
            isInteractive={true}
        />
        <div className="Title">PIE</div>
    </div>
)

export default Pie

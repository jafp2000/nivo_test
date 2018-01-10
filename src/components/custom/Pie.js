import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { generateProgrammingLanguageStats } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
      "id": "lisp",
      "label": "lisp",
      "value": 357,
      "color": "hsl(230, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 461,
      "color": "hsl(263, 70%, 50%)"
    },
    {
      "id": "scala",
      "label": "scala",
      "value": 273,
      "color": "hsl(36, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 340,
      "color": "hsl(32, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 72,
      "color": "hsl(100, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 475,
      "color": "hsl(146, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 259,
      "color": "hsl(343, 70%, 50%)"
    }
  ]

const PieCustom = () => (
    <div>
        <ResponsivePie
            data={data}
            margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors="d320c"
            colorBy="id"
            borderColor="inherit:darker(0.6)"
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="inherit"
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            isInteractive={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "anchor": "bottom",
                    "direction": "row",
                    "translateY": 56,
                    "itemWidth": 100,
                    "itemHeight": 14,
                    "symbolSize": 14,
                    "symbolShape": "circle"
                }
            ]}
        />
        <div className="Title">PIE</div>
    </div>
)

export default PieCustom

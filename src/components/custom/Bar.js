import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
        "country": "AD",
        "hot dog": 103,
        "Color": "hsl(204, 70%, 50%)",
        "burger": 135,
        "Color": "hsl(135, 70%, 50%)",
        "sandwich": 40,
        "Color": "hsl(156, 70%, 50%)",
        "kebab": 68,
        "Color": "hsl(167, 70%, 50%)",
        "fries": 18,
        "Color": "hsl(242, 70%, 50%)",
        "donut": 97,
        "Color": "hsl(153, 70%, 50%)"
      },
      {
        "country": "AE",
        "hot dog": 78,
        "QW": "hsl(327, 70%, 50%)",
        "burger": 100,
        "AS": "hsl(95, 70%, 50%)",
        "sandwich": 194,
        "ZX": "hsl(73, 70%, 50%)",
        "kebab": 166,
        "ER": "hsl(247, 70%, 50%)",
        "fries": 36,
        "DF": "hsl(276, 70%, 50%)",
        "donut": 25,
        "CV": "hsl(74, 70%, 50%)"
      },
      {
        "country": "AF",
        "hot dog": 198,
        "hot dogColor": "hsl(345, 70%, 50%)",
        "burger": 18,
        "burgerColor": "hsl(37, 70%, 50%)",
        "sandwich": 82,
        "sandwichColor": "hsl(196, 70%, 50%)",
        "kebab": 139,
        "kebabColor": "hsl(1, 70%, 50%)",
        "fries": 48,
        "friesColor": "hsl(290, 70%, 50%)",
        "donut": 163,
        "donutColor": "hsl(320, 70%, 50%)"
      },
      {
        "country": "AG",
        "hot dog": 147,
        "hot dogColor": "hsl(235, 70%, 50%)",
        "burger": 92,
        "burgerColor": "hsl(182, 70%, 50%)",
        "sandwich": 121,
        "sandwichColor": "hsl(155, 70%, 50%)",
        "kebab": 133,
        "kebabColor": "hsl(49, 70%, 50%)",
        "fries": 102,
        "friesColor": "hsl(274, 70%, 50%)",
        "donut": 56,
        "donutColor": "hsl(74, 70%, 50%)"
      },
      {
        "country": "AI",
        "hot dog": 108,
        "hot dogColor": "hsl(354, 70%, 50%)",
        "burger": 47,
        "burgerColor": "hsl(335, 70%, 50%)",
        "sandwich": 52,
        "sandwichColor": "hsl(124, 70%, 50%)",
        "kebab": 69,
        "kebabColor": "hsl(106, 70%, 50%)",
        "fries": 180,
        "friesColor": "hsl(47, 70%, 50%)",
        "donut": 67,
        "donutColor": "hsl(277, 70%, 50%)"
      },
      {
        "country": "AL",
        "hot dog": 16,
        "hot dogColor": "hsl(279, 70%, 50%)",
        "burger": 133,
        "burgerColor": "hsl(249, 70%, 50%)",
        "sandwich": 129,
        "sandwichColor": "hsl(148, 70%, 50%)",
        "kebab": 135,
        "kebabColor": "hsl(102, 70%, 50%)",
        "fries": 149,
        "friesColor": "hsl(234, 70%, 50%)",
        "donut": 114,
        "donutColor": "hsl(135, 70%, 50%)"
      },
      {
        "country": "AM",
        "hot dog": 41,
        "hot dogColor": "hsl(245, 70%, 50%)",
        "burger": 49,
        "burgerColor": "hsl(169, 70%, 50%)",
        "sandwich": 164,
        "sandwichColor": "hsl(12, 70%, 50%)",
        "kebab": 110,
        "kebabColor": "hsl(355, 70%, 50%)",
        "fries": 38,
        "friesColor": "hsl(251, 70%, 50%)",
        "donut": 140,
        "donutColor": "hsl(303, 70%, 50%)"
      }
]

const BarCustom = () => (
    <div>
    <ResponsiveBar
        data={data}
        keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut"
        ]}
        indexBy="country"
        margin={{
            "top": 50,
            "right": 130,
            "bottom": 50,
            "left": 60
        }}
        padding={0.3}
        colorBy="id"
        defs={[
            {
                "id": "dots",
                "type": "patternDots",
                "background": "inherit",
                "color": "#38bcb2",
                "size": 4,
                "padding": 1,
                "stagger": true
            },
            {
                "id": "lines",
                "type": "patternLines",
                "background": "inherit",
                "color": "#eed312",
                "rotation": -45,
                "lineWidth": 6,
                "spacing": 10
            }
        ]}
        fill={[
            {
                "match": {
                    "id": "fries"
                },
                "id": "dots"
            },
            {
                "match": {
                    "id": "sandwich"
                },
                "id": "lines"
            }
        ]}
        borderColor="inherit:darker(1.6)"
        axisBottom={{
            "orient": "bottom",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "country",
            "legendPosition": "center",
            "legendOffset": 36
        }}
        axisLeft={{
            "orient": "left",
            "tickSize": 5,
            "tickPadding": 5,
            "tickRotation": 0,
            "legend": "food",
            "legendPosition": "center",
            "legendOffset": -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                "dataFrom": "keys",
                "anchor": "bottom-right",
                "direction": "column",
                "translateX": 120,
                "itemWidth": 100,
                "itemHeight": 20,
                "itemsSpacing": 2,
                "symbolSize": 20
            }
        ]}
    />
        <div className="Title">BAR</div>
    </div>
)

export default BarCustom

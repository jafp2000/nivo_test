import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
      "id": "whisky",
      "color": "hsl(305, 70%, 50%)",
      "data": [
        {
          "color": "hsl(243, 70%, 50%)",
          "x": "MD",
          "y": 51
        },
        {
          "color": "hsl(77, 70%, 50%)",
          "x": "MO",
          "y": 11
        },
        {
          "color": "hsl(113, 70%, 50%)",
          "x": "GG",
          "y": 31
        },
        {
          "color": "hsl(123, 70%, 50%)",
          "x": "SA",
          "y": 43
        },
        {
          "color": "hsl(229, 70%, 50%)",
          "x": "UG",
          "y": 16
        },
        {
          "color": "hsl(106, 70%, 50%)",
          "x": "BA",
          "y": 47
        },
        {
          "color": "hsl(52, 70%, 50%)",
          "x": "NP",
          "y": 45
        },
        {
          "color": "hsl(258, 70%, 50%)",
          "x": "BW",
          "y": 28
        },
        {
          "color": "hsl(51, 70%, 50%)",
          "x": "CF",
          "y": 29
        }
      ]
    },
    {
      "id": "rhum",
      "color": "hsl(85, 70%, 50%)",
      "data": [
        {
          "color": "hsl(211, 70%, 50%)",
          "x": "MD",
          "y": 2
        },
        {
          "color": "hsl(39, 70%, 50%)",
          "x": "MO",
          "y": 9
        },
        {
          "color": "hsl(137, 70%, 50%)",
          "x": "GG",
          "y": 20
        },
        {
          "color": "hsl(97, 70%, 50%)",
          "x": "SA",
          "y": 60
        },
        {
          "color": "hsl(328, 70%, 50%)",
          "x": "UG",
          "y": 1
        },
        {
          "color": "hsl(74, 70%, 50%)",
          "x": "BA",
          "y": 39
        },
        {
          "color": "hsl(122, 70%, 50%)",
          "x": "NP",
          "y": 25
        },
        {
          "color": "hsl(2, 70%, 50%)",
          "x": "BW",
          "y": 49
        },
        {
          "color": "hsl(51, 70%, 50%)",
          "x": "CF",
          "y": 12
        }
      ]
    },
    {
      "id": "gin",
      "color": "hsl(57, 70%, 50%)",
      "data": [
        {
          "color": "hsl(160, 70%, 50%)",
          "x": "MD",
          "y": 38
        },
        {
          "color": "hsl(329, 70%, 50%)",
          "x": "MO",
          "y": 59
        },
        {
          "color": "hsl(209, 70%, 50%)",
          "x": "GG",
          "y": 46
        },
        {
          "color": "hsl(124, 70%, 50%)",
          "x": "SA",
          "y": 21
        },
        {
          "color": "hsl(157, 70%, 50%)",
          "x": "UG",
          "y": 8
        },
        {
          "color": "hsl(167, 70%, 50%)",
          "x": "BA",
          "y": 38
        },
        {
          "color": "hsl(109, 70%, 50%)",
          "x": "NP",
          "y": 56
        },
        {
          "color": "hsl(251, 70%, 50%)",
          "x": "BW",
          "y": 52
        },
        {
          "color": "hsl(126, 70%, 50%)",
          "x": "CF",
          "y": 2
        }
      ]
    },
    {
      "id": "vodka",
      "color": "hsl(311, 70%, 50%)",
      "data": [
        {
          "color": "hsl(256, 70%, 50%)",
          "x": "MD",
          "y": 44
        },
        {
          "color": "hsl(7, 70%, 50%)",
          "x": "MO",
          "y": 55
        },
        {
          "color": "hsl(204, 70%, 50%)",
          "x": "GG",
          "y": 46
        },
        {
          "color": "hsl(136, 70%, 50%)",
          "x": "SA",
          "y": 8
        },
        {
          "color": "hsl(164, 70%, 50%)",
          "x": "UG",
          "y": 29
        },
        {
          "color": "hsl(80, 70%, 50%)",
          "x": "BA",
          "y": 10
        },
        {
          "color": "hsl(100, 70%, 50%)",
          "x": "NP",
          "y": 30
        },
        {
          "color": "hsl(11, 70%, 50%)",
          "x": "BW",
          "y": 0
        },
        {
          "color": "hsl(202, 70%, 50%)",
          "x": "CF",
          "y": 15
        }
      ]
    },
    {
      "id": "cognac",
      "color": "hsl(215, 70%, 50%)",
      "data": [
        {
          "color": "hsl(165, 70%, 50%)",
          "x": "MD",
          "y": 6
        },
        {
          "color": "hsl(45, 70%, 50%)",
          "x": "MO",
          "y": 46
        },
        {
          "color": "hsl(157, 70%, 50%)",
          "x": "GG",
          "y": 45
        },
        {
          "color": "hsl(90, 70%, 50%)",
          "x": "SA",
          "y": 43
        },
        {
          "color": "hsl(78, 70%, 50%)",
          "x": "UG",
          "y": 10
        },
        {
          "color": "hsl(358, 70%, 50%)",
          "x": "BA",
          "y": 43
        },
        {
          "color": "hsl(202, 70%, 50%)",
          "x": "NP",
          "y": 29
        },
        {
          "color": "hsl(101, 70%, 50%)",
          "x": "BW",
          "y": 23
        },
        {
          "color": "hsl(169, 70%, 50%)",
          "x": "CF",
          "y": 39
        }
      ]
    }
];


const LineCustom = () => (
    <div>
        <ResponsiveLine
                data={data}
                margin={{
                    "top": 50,
                    "right": 110,
                    "bottom": 50,
                    "left": 60
                }}
                minY="auto"
                stacked={true}
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country code",
                    "legendOffset": 36,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "count",
                    "legendOffset": -40,
                    "legendPosition": "center"
                }}
                dotSize={10}
                dotColor="inherit:darker(0.3)"
                dotBorderWidth={2}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-12}
                animate={true}
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
        <div className="Title">LINE</div>
    </div>
)

export default LineCustom

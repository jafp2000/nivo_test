import React from 'react'
import { ResponsiveStream } from '@nivo/stream'
import { patternDotsDef } from '@nivo/core'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
      "Raoul": 25,
      "Josiane": 190,
      "Marcel": 155,
      "René": 15,
      "Paul": 28,
      "Jacques": 13
    },
    {
      "Raoul": 105,
      "Josiane": 114,
      "Marcel": 88,
      "René": 146,
      "Paul": 154,
      "Jacques": 82
    },
    {
      "Raoul": 160,
      "Josiane": 155,
      "Marcel": 60,
      "René": 41,
      "Paul": 183,
      "Jacques": 115
    },
    {
      "Raoul": 51,
      "Josiane": 25,
      "Marcel": 185,
      "René": 179,
      "Paul": 50,
      "Jacques": 67
    },
    {
      "Raoul": 30,
      "Josiane": 115,
      "Marcel": 82,
      "René": 111,
      "Paul": 79,
      "Jacques": 114
    },
    {
      "Raoul": 40,
      "Josiane": 136,
      "Marcel": 17,
      "René": 73,
      "Paul": 44,
      "Jacques": 21
    },
    {
      "Raoul": 88,
      "Josiane": 135,
      "Marcel": 47,
      "René": 138,
      "Paul": 137,
      "Jacques": 167
    },
    {
      "Raoul": 44,
      "Josiane": 194,
      "Marcel": 200,
      "René": 176,
      "Paul": 165,
      "Jacques": 187
    },
    {
      "Raoul": 26,
      "Josiane": 117,
      "Marcel": 17,
      "René": 41,
      "Paul": 171,
      "Jacques": 135
    },
    {
      "Raoul": 178,
      "Josiane": 146,
      "Marcel": 10,
      "René": 147,
      "Paul": 200,
      "Jacques": 161
    },
    {
      "Raoul": 169,
      "Josiane": 54,
      "Marcel": 21,
      "René": 154,
      "Paul": 147,
      "Jacques": 39
    },
    {
      "Raoul": 14,
      "Josiane": 69,
      "Marcel": 94,
      "René": 114,
      "Paul": 80,
      "Jacques": 191
    }
  ]

const StreamCustom = () => (
    <div>
        <ResponsiveStream
          data={data}
          keys={['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']}
          margin={{
              "top": 50,
              "right": 110,
              "bottom": 50,
              "left": 60
          }}
          colors="d320c"
          axisBottom={{
              "orient": "bottom",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "",
              "legendOffset": 36
          }}
          offsetType="none"
          fillOpacity={0.85}
          borderColor="#000"
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
        <div className="Title">STREAM</div>
    </div>
)

export default StreamCustom

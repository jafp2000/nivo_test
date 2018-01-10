import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
      "taste": "fruity",
      "chardonay": 86,
      "carmenere": 96,
      "syrah": 70
    },
    {
      "taste": "bitter",
      "chardonay": 26,
      "carmenere": 43,
      "syrah": 51
    },
    {
      "taste": "heavy",
      "chardonay": 20,
      "carmenere": 103,
      "syrah": 22
    },
    {
      "taste": "strong",
      "chardonay": 88,
      "carmenere": 84,
      "syrah": 69
    },
    {
      "taste": "sunny",
      "chardonay": 95,
      "carmenere": 78,
      "syrah": 104
    }
  ];

const RadarCustom = () => (
    <div>
        <ResponsiveRadar
            data={data}
            keys={[
                "chardonay",
                "carmenere",
                "syrah"
            ]}
            indexBy="taste"
            margin={{
                "top": 70,
                "right": 80,
                "bottom": 40,
                "left": 80
            }}
            curve="catmullRomClosed"
            borderWidth={2}
            borderColor="inherit"
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={8}
            dotColor="inherit"
            dotBorderWidth={0}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors="nivo"
            colorBy="key"
            fillOpacity={0.1}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    "anchor": "top-left",
                    "direction": "column",
                    "translateX": -50,
                    "translateY": -40,
                    "itemWidth": 80,
                    "itemHeight": 20,
                    "symbolSize": 12,
                    "symbolShape": "circle"
                }
            ]}
        />
        <div className="Title">CALENDAR</div>
    </div>
)

export default RadarCustom

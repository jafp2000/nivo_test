import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../constants'

const data = [
    {
      "day": "2015-06-22",
      "value": 201
    },
    {
      "day": "2015-06-01",
      "value": 286
    },
    {
      "day": "2015-05-10",
      "value": 262
    },
    {
      "day": "2015-11-21",
      "value": 53
    },
    {
      "day": "2015-02-28",
      "value": 302
    },
    {
      "day": "2015-04-14",
      "value": 181
    },
    {
      "day": "2015-06-29",
      "value": 21
    },
    {
      "day": "2015-08-05",
      "value": 212
    },
    {
      "day": "2015-11-07",
      "value": 179
    },
    {
      "day": "2015-07-27",
      "value": 54
    },
    {
      "day": "2015-05-15",
      "value": 274
    },
    {
      "day": "2015-11-26",
      "value": 355
    },
    {
      "day": "2015-09-25",
      "value": 267
    },
    {
      "day": "2015-02-26",
      "value": 179
    },
    {
      "day": "2015-02-14",
      "value": 235
    },
    {
      "day": "2015-07-25",
      "value": 227
    },
    {
      "day": "2015-04-04",
      "value": 355
    },
    {
      "day": "2015-04-27",
      "value": 350
    },
    {
      "day": "2015-02-05",
      "value": 299
    },
    {
      "day": "2015-01-30",
      "value": 236
    },
    {
      "day": "2015-03-13",
      "value": 187
    },
    {
      "day": "2015-02-26",
      "value": 43
    },
    {
      "day": "2015-07-01",
      "value": 45
    },
    {
      "day": "2015-01-02",
      "value": 35
    },
    {
      "day": "2015-09-20",
      "value": 12
    },
    {
      "day": "2015-05-17",
      "value": 339
    },
    {
      "day": "2015-04-30",
      "value": 77
    },
    {
      "day": "2015-07-14",
      "value": 259
    }
];

const CalendarCustom = () => (
    <div>
        <ResponsiveCalendar
            data={data}
            from="2015-01-01"
            to="2015-07-12"
            emptyColor="#eeeeee"
            colors="d320c"
            margin={{
                "top": 100,
                "right": 30,
                "bottom": 60,
                "left": 30
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "row",
                    "translateY": 36,
                    "itemCount": 4,
                    "itemWidth": 34,
                    "itemHeight": 36,
                    "itemDirection": "top-to-bottom"
                }
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
        />
        <div className="Title">CALENDAR</div>
    </div>
)

export default CalendarCustom

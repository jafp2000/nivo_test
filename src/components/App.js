import React from 'react'
import '../App.css'
import Bar from './charts/Bar'
import Bubble from './charts/Bubble'
import Chord from './charts/Chord'
import HeatMap from './charts/HeatMap'
import Pie from './charts/Pie'
import Stream from './charts/Stream'
import TreeMap from './charts/TreeMap'
//CUSTOM
import BarCustom from '../components/custom/Bar';
import LineCustom from '../components/custom/Line';
import PieCustom from '../components/custom/Pie';
import BubbleCustom from '../components/custom/Bubble';
import StreamCustom from '../components/custom/Stream';
import CalendarCustom from '../components/custom/Calendar';
import RadarCustom from '../components/custom/Radar';

/*

const App = () => (
    <div>
        <div className="App">
            <Bar />
            <Bubble />
            <div />
            <Chord />
            <HeatMap />
            <Pie />
            <TreeMap />
            <Stream />
        </div>
    </div>
)
*/
const App = () => (
    <div>
        <div className="App">
            <BarCustom/>
            <LineCustom/>
            <PieCustom/>
            <BubbleCustom/>
            <StreamCustom/>
            <CalendarCustom/>
            <RadarCustom/>
        </div>
    </div>
)

export default App

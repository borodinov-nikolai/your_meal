'use client'
import React from 'react'
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';

interface DataPoint {
    time: string;
    temp: number;
    hash: number;
  }
  
//   interface CustomTooltipProps {
//     active?: boolean;
//     payload?: Array<{ name: string; value: number }>;
//     label?: string;
//   }
  
//   const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className={"custom-tooltip bg-white "}>
//           <p className="label">{`Time: ${label}`}</p>
//           <p className="temp">{`Temperature: ${payload[0].value}`}</p>
//           <p className="hash">{`Hash: ${payload[1].value}`}</p>
//         </div>
//       );
//     }
  
//     return null;
//   };
const Test = () => {
    const data : DataPoint[] = [
        {
          "time": "12.01",
          "temp": 50,
          "hash": 28,
        },
        {
          "time": "12.02",
          "temp": 55,
          "hash": 29,
      
        },
        {
          "time": "12.03",
          "temp": 70,
          "hash": 22,
        
        },
        {
          "time": "12.04",
          "temp": 54,
          "hash": 24,
        
        },
        {
          "time": "12.05",
          "temp": 57,
          "hash": 25,
      
        },
        {
          "time": "12.06",
          "temp": 55,
          "hash": 30,
    
        },
        {
          "time": "12.07",
          "temp": 58,
          "hash": 28,
   
        }
      ]

  return (
    <div  className={'h-[500px] w-screen relative '}>
        <div data-tid='label' className={'text-white absolute top-[10px] left-[10px] z-10'} >Temp: {data[data.length-1]['temp']} c</div>
        <div data-tid='label' className={'text-white absolute top-[40px] left-[10px] z-10'} >Hesh: {data[data.length-1]['hash']}</div>
    <ResponsiveContainer  width={'100%'} height={'100%'}>
    <AreaChart className={'bg-black'} width={730} height={250} data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorTemp" x1="0" y1="" x2="0" y2="1">
        <stop offset="15%" stopColor="#4ADE8026" stopOpacity={1}/>
        <stop offset="100%" stopColor="#3B98FF00" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorHash" x1="0" y1="0" x2="0" y2="1">
        <stop offset="15%" stopColor="#3B98FF26" stopOpacity={1}/>
        <stop offset="100%" stopColor="#3B98FF00" stopOpacity={0}/>
      </linearGradient>
    </defs>
    {/* <XAxis dataKey="time" /> */}
    {/* <YAxis /> */}
    {/* <CartesianGrid strokeDasharray="3 3" /> */}
    <Tooltip />
    <Area strokeDasharray={'15 5'} type="monotone" dataKey="temp" stroke="#4ADE80" fillOpacity={1} fill="url(#colorTemp)" />
    <Area  type="monotone" dataKey="hash" stroke="#3B98FF" fillOpacity={1} fill="url(#colorHash)" />
  </AreaChart>
  
  </ResponsiveContainer>
  </div>
  )
}

export default Test
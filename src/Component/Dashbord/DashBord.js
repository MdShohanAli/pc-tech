import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{
    "month": "Mar",
    "investment": 10000,
    "sell": 2410,
    "revenue": 1040
},
{
    "month": "Apr",
    "investment": 20000,
    "sell": 4230,
    "revenue": 2450
},
{
    "month": "May",
    "investment": 50000,
    "sell": 17260,
    "revenue": 6701
},
{
    "month": "Jun",
    "investment": 50000,
    "sell": 8290,
    "revenue": 4040
},
{
    "month": "Jul",
    "investment": 60000,
    "sell": 6010,
    "revenue": 4090
},
{
    "month": "Aug",
    "investment": 70000,
    "sell": 3700,
    "revenue": 6100
}

];

const DashBord = () => {
    return (
        <div className=' justify-center items-center' >
            <LineChart className='mx-auto' width={500} height={300} data={data}>
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="month" />

                <YAxis dataKey="investment" />
            </LineChart>
            <h2 className='text-center' > LineChart  </h2>
        </div>
    );
};

export default DashBord;
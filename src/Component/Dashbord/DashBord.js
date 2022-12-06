import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';
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
        <div className='flex' >
            <div className=' ml-10 pt-10'  >
                <LineChart className='mx-auto' width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <XAxis dataKey="month" />

                    <YAxis dataKey="investment" />
                </LineChart>
                <h2 className='text-center' > Line Chart  </h2>
            </div>

            <div>
                <PieChart width={900} height={350}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca5d" label />
                    <Tooltip />

                </PieChart>
                <h2 className='text-center' > Bar Chart  </h2>
            </div>


        </div>
    );
};

export default DashBord;
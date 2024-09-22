'use client'

import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { PieChart } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function BestBookProductsChart() {
    // <block:setup:1>
    const data = {
        labels: [
            'Lost Book',
            'Book Brorrowed',
            'Book Returned',
            'Book Read'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100, 200],
            backgroundColor: [
                '#fc9840',
                '#ff6361',
                '#6200ff',
                '#516395'
            ],
            borderColor: [
                '#ffcc70',
                '#86a8e7',
                '#eece13',
                '#516395'
            ],
            borderWidth: 1
        }]
    };


    return (
        <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
            <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-100'>Best Book Charts</h2>
            {/* Chart */}
            <div className='p-4'>

                <Pie data={data} width={100} height={100} />
            </div>
        </div>
    )
}

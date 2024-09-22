'use client'

import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS, ArcElement, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);
export default function WeeklyBookChart() {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Weekly Book Chart',
      },
    },
  };

  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const generateRandomNumbers = (count, min, max) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const tabs = [
    {
      title: "Rented books",
      type: "Rented books",
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Rented books',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      }
    },
    {
      title: "Book Return",
      type: "Book Return",
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Rented books',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
          },
        ]
      }
    }
  ];
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type)
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
      <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Weekly Book Charts</h2>
      <div className='p-4'>
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-100 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {
              tabs.map((tab, i) => {
                return (
                  <li className="me-2" key={i}>
                    <button
                      onClick={() => setChartToDisplay(tab.type)}
                      className={chartToDisplay == tab.type ?
                        "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" :
                        "inline-block p-4 border-b-2 border-transparent rounded-t-lg text-slate-800 hover:text-gray-700 hover:border-gray-100  dark:border-gray-300"}>
                      {tab.title}
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        {/* Content to display */}
        {
          tabs.map((tab, i) => {
            if (chartToDisplay === tab.type) {
              return (
                < Line key={i} options={options} data={tab.data} />
              )
            }
            return null
          })
        }
      </div>
    </div>
  )
}

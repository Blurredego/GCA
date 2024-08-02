'use client';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Dropdown from '../Dropdown';
import IconHorizontalDots from '../icon/icon-horizontal-dots';

const ComponentsDashboardSales = () => {
    const isDark = useSelector((state) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
        // Additional functionality for period change can be added here
    };

    //Revenue Chart
    const revenueChart = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
            {
                name: 'Expenses',
                data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#2196F3', '#E7515A'] : ['#1B55E2', '#E7515A'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    return (
        <>
            <div className="pt-5">
                <div className="mb-6 grid gap-6 ">
                    <div className="panel h-full ">
                        <div className="mb-5 flex items-center justify-between dark:text-white-light">
                            <select className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-300">
                                <option className="bg-gray-200 text-black">All Users</option>
                                <option className="bg-gray-200 text-black">New Users</option>
                                <option className="bg-gray-200 text-black">Returning Users</option>
                            </select>

                            <div className="flex space-x-1">
                                <button
                                    type="button"
                                    className={`rounded-lg  px-4 py-2 text-sm ${selectedPeriod === 'Daily' ? 'bg-gray-300 text-gray-500' : 'bg-gray-100 text-gray-600'}`}
                                    onClick={() => handlePeriodChange('Weekly')}
                                >
                                    Weekly
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-lg px-4 py-2 text-sm ${selectedPeriod === 'Weekly' ? 'bg-gray-300 text-gray-500' : 'bg-gray-100 text-gray-600'}`}
                                    onClick={() => handlePeriodChange('Monthly')}
                                >
                                    Monthly
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-lg  px-4 py-2 text-sm ${selectedPeriod === 'Monthly' ? 'bg-gray-300 text-gray-500' : 'bg-gray-100 text-gray-600'}`}
                                    onClick={() => handlePeriodChange('Yearly')}
                                >
                                    Yearly
                                </button>
                            </div>
                        </div>
                        <p className="text-lg dark:text-white-light/90">
                            Total Profit <span className="ml-2 text-primary">$10,840</span>
                        </p>
                        <div className="relative">
                            <div className="rounded-lg bg-white dark:bg-black">
                                {isMounted ? (
                                    <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} width={'100%'} />
                                ) : (
                                    <div className="grid min-h-[325px] place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="inline-flex h-5 w-5 animate-spin rounded-full  border-2 border-black !border-l-transparent dark:border-white"></span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentsDashboardSales;

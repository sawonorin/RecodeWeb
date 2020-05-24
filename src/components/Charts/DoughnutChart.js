import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ( props ) => {
    const {labels, data } = props.chartProps

    let chartProperties = {
        data: {
            labels,
            datasets: [{
                label: 'skills',
                data,
                backgroundColor: ['gold', 'black'],
                hoverBackgroundColor: ['gold', 'white'],
                anchor: 'center',
                borderColor: 'white',
                borderWidth: 0
            }]

        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    boxWidth: 0,
                    fontColor: 'black',
                    fontWeight:'bold',
                    fontSize:15
                },
                position: 'bottom'
            },
            rotation: 2 * Math.PI,
            circumference: 2.5 * Math.PI,
            cutoutPercentage: 80,
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    }
    return (
        <Doughnut data={chartProperties.data} options={chartProperties.options} height={150} width={150} />
    );
};

export default DoughnutChart;
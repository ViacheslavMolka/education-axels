import React from 'react';
import { Polar } from 'react-chartjs-2';


const ChartPolar = () => {
    const data = {
        labels: ['March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [16, 41, 35, 68],
            borderColor: ['#ccc', '#ccc', '#ccc', '#ccc'],
            backgroundColor: [
                'rgba(0, 214, 7, 0.6)', 
                'rgba(3, 255, 209, 0.4)', 
                'rgba(255, 200, 3, 0.6)', 
                'rgba(255, 125, 3, 0.6)'
            ]
          }
        ]
    };

    return (
        <div>
            <Polar
                data={data}
                width={1200}
                height={600}
                options={{ 
                    maintainAspectRatio: false,
                    responsive: true 
                }}
            />
        </div>
    );
};

export default ChartPolar;

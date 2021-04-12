import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const ChartDoughnut = () => {
    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [34, 121, 87, 65, 11],
            backgroundColor: ['#d43741', '#e39700', '#ecff1c', '#03bf00', '#3860c7'],
          }
        ]
    };

    return (
        <div>
            <Doughnut
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

export default ChartDoughnut;

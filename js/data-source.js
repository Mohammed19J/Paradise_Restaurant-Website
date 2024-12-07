// Function to generate and display a chart of customer demand by hour
function generateChartData() {
    // Retrieve and parse the bookTableEntries from local storage
    const bookTableEntries = JSON.parse(localStorage.getItem('bookTableEntries')) || [];

    // Define the hours of the day for the x-axis of the chart
    const hours = [ '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    // Initialize an array to store demand data, with zero demand for each hour
    const demand = Array(hours.length).fill(0);

    // Iterate over each booking entry to calculate demand by hour
    bookTableEntries.forEach(entry => {
        // Extract the hour from the booking time
        const hour = entry.time.split(':')[0] + ':00';
        // Find the index of the hour in the hours array
        const index = hours.indexOf(hour);
        // If the hour is found, add the number of people to the demand for that hour
        if (index !== -1) {
            demand[index] += parseInt(entry.numberOfPeople, 10);
        }
    });

    // Select the DOM element where the chart will be rendered
    const chartDom = document.getElementById('demandChart');
    // Initialize the ECharts instance on the selected DOM element
    const myChart = echarts.init(chartDom);

    // Define the configuration options for the chart
    const option = {
        title: { text: 'Customer Demand by Hour', color: 'rgba(255, 165, 0, 1)' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: hours },
        yAxis: { type: 'value' },
        series: [{
            name: 'Demand',
            type: 'bar',
            data: demand,
            itemStyle: { color: 'rgba(255, 165, 0, 1)' }
        }]
    };

    // Set the chart options
    myChart.setOption(option);

    // Function to resize the chart container and adjust the chart size
    function resizeChart() {
        chartDom.style.width = '400px';  // Set the width of the chart container
        chartDom.style.height = '400px'; // Set the height of the chart container
        myChart.resize();               // Resize the chart to fit the new container size
    }

    // Initial call to resize the chart
    resizeChart();
    // Add an event listener to resize the chart when the window is resized
    window.addEventListener('resize', resizeChart);
}

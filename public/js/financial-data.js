axios({
    method: 'GET',
    url: 'http://api.coindesk.com/v1/bpi/historical/close.json',
    params: {start : '2021-07-10', end :'2022-07-10'}
})

    .then(response => {
      console.log("We have datas", response)
      console.log(response.data.bpi)

    })
    .catch(err => {
      console.log("Miss of datas")
    });

 
    /*function printTheChart(stockData) {
        const dailyData = stockData['bpi'];
       
        const stockValues = Object.keys(dailyData);
        const stockPrices = stockValues.map(date => dailyData[date][0]);
       
        const ctx = document.querySelector('my-chart').getContext('2d');
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: stockValues,
            datasets: [
              {
                label: 'Bitcoin Volatility',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: stockPrices
              }
            ]
          }
        }); // closes chart = new Chart()
      } // closes printTheChart()*/


const ctx = document.querySelector("#my-chart").getContext('2d');
const fromDate = document.querySelector('#fromDate')
const toDate = document.querySelector('#toDate')
const fromDateValue = fromDate.value // la value d'un input "date" renvoie YYYY-MM-DD
const toDateValue = toDate.value
const currency = document.querySelector('#currency')
const currencyValue = currency.value // défilement de toutes les values mises dans <select></select>

console.log(fromDate)
console.log(toDate)


axios({
    method: 'GET',
    url: `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDateValue}&end=${toDateValue}&currency=${currencyValue}`,
    /*params: {start : `${fromDateValue}`, end : `${toDateValue}`}*/
    params: {start : `2021-10-10`, end : `2022-10-10`} // a modifier en trouvant le bonne formule pour changer les dates
})

    .then(response => {
      console.log("We have datas", response)
      console.log(response.data.bpi) 


      const labels = Object.keys(response.data.bpi) // je fais appel sur l'axe "x" des valeurs de ma data
      const arr = Object.values(response.data.bpi) // je fais appel sur l'axe "y" des valeurs de ma data

      new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: arr,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
      })

      fromDate.addEventListener('newDate', () => {
        /*start = fromDateValue*/
        return window.location.reload()
      })
      toDate.addEventListener('newDate', () => {
        /*end = toDateValue*/
        return window.location.reload()
      })


    min.innerHTML=Math.min(...Object.values(response.data.bpi))
    max.innerHTML=Math.max(...Object.values(response.data.bpi)) /// ... de Math.min pour array et liste d'objet

    })
    .catch(err => {
      console.log("Miss of datas")
    });
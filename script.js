const ctx = document.getElementById('myChart').getContext('2d');
let delay; 
const config = {
    type: 'line',
    data: { 
        labels:  ['May','June','July','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
                data: [0,20,10,30,15,40,20,60],
                label: "Finance Data",
                borderColor: '#8E44AD',
                borderColor: 'blue',
                tension: 0.5,  
                pointBackgroundColor: 'blue',   
                
            },
        ]
    },
    options:{
          responsive: true,
          radius: 10,                 
          hoverRadius: 15,            
           
         /* Display text on y axis (Not Working) */
         scales: {
            y: {
                ticks: {
                    callback: function(value){
                        return '$' + value +'k';
                    }
                    
                },
                
            }
         } 
    }
}
const myChart = new Chart(ctx, config);
/* ---------------------------------------------------2nd Chart-------------------------------- */
var xValues = ["July", "Aug", "Sep", "Oct", "Nov","Dec"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["orange", "orange","orange","orange","orange"];

new Chart("my2ndChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

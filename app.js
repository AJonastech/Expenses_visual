
var day;
"use strict";
fetch("data.json")
  .then(function(resp){
     return resp.json();
  })
  .then(function(value){

    const ctx = document.getElementById('canvas');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: value.day,
        datasets: [{
          
          data: value.amount,
          backgroundColor: [
            "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"
            ,"hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)"
          ],
          borderRadius: 5,         
          borderWidth: 1,
          borderSkipped: false
         
        }]
      },
      options: {
        plugins : {
            legend: {
            display: false
        }},
        scales: {
            y: {
              beginAtZero: true, 
              grid:{
                display:false
              },
              ticks: {
                display: false
              },
              border:{
                display:false
              }
            },
            x:{
               grid:{
                display: false
               },
               border:{
                display:false
               }
            }
          }
    }
    })
    
    
 })
  
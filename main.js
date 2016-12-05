var graph = document.getElementById('chart1');

var myChart = new Chart(graph, {
   type: 'pie',
   data: {
       labels: ['A', 'B', 'C', 'D', 'F'],
       datasets: [{
           backgroundColor: [
               "red",
               "blue",
               "yellow",
               "green",
               "purple",
           ],
       data: [2, 9, 12, 6, 1]
      }]
   }, // ends data
   options: {
       responsive: true,
       cutoutPercentage: 40,
       title: {
           display: true,
           text: 'Grade on a Test'
       }
   } // ends options
}); // ends the entire variable

var graph = document.getElementById('chart2');

var myChart = new Chart(graph, {
   type: 'bar',
   data: {
       labels: ['Panic Disorder', 'Agoraphobia', 'Specific Phobia', 'Social Anxiety', 'Generalized Anxiety', 'PTSD', 'Any Anxiety Disorder'],
       datasets: [{
           label: 'Women',
           data: [5, 7, 15.7, 15.5, 6.6, 10.4, 30.5],
           backgroundColor: "#4286f4"
       }, {
           label: 'Men',
           data: [2, 3.5, 6.7, 11.1, 3.6, 5, 19.2],
           backgroundColor: "#8CE2FF"
       }]
   },
   options: {
     responsive: true,
     title: {
       display: true,
       text: 'Prevalence of Anxiety Disorders'
     }
   }
});

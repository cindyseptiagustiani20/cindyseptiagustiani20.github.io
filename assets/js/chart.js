var ctx = document.getElementById("Chart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Red", "Blue"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 23, 2, 3],
      backgroundColor: [
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
      'white',
      'white'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
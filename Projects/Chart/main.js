let myChart = document.getElementById("myChart").getContext("2d");

// Global options
// https://www.chartjs.org/docs/latest/general/fonts.html
Chart.defaults.font.family = "Roboto";
Chart.defaults.font.size = 16;

// https://www.chartjs.org/docs/latest/general/colors.html
Chart.defaults.color = "#312F2F";

let populationChart = new Chart(myChart, {
  type: "bar", // bar, horizontal bar, pie, line, doughnut, radar, polarArea
  data: {
    labels: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"],
    datasets: [
      {
        label: "Population",
        data: [23210000, 5380000, 964000, 962000, 955000, 533000],
        backgroundColor: [
          "#26547C",
          "#EF476F",
          "#FFD166",
          "#06D6A0",
          "#C9E4E7",
          "#B4A0E5",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderColor: "#000",
        hoverBorderWidth: 3,
        // barThickness: 40,
        barPercentage: 1, // Modify the bar width as desired (80% of the available space)
        categoryPercentage: 0.4, // Modify the spacing between bars as desired (90% of the available space)
      },
    ],
  },

  options: {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Disable aspect ratio locking
    plugins: {
      title: {
        display: true,
        text: "Population of the largest divisions of Bangladesh",
      },
      subtitle: {
        display: true,
        text: "Custom Chart Subtitle",
      },
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 99, 132)",
        },
        position: "top",
        align: "end",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        display: false,
        // ticks: {
        //   display: false,
        // },
        // grid: {
        //   display: false,
        // },
      },
    },
    
  },
});

// https://www.chartjs.org/docs/latest/migration/v4-migration.html

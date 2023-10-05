const ctx = document.getElementById('time_timer');


let chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['지난 시간', '남은 시간'],
        datasets: [{
            label: '시간 (분)',
            data: [0, 60],
            backgroundColor: [
                '#F0F0F0',
                '#FF69B4'
            ]
            // borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Time TImer"
            }
        },
        // animation: {
        //     duration: 5000,
        //     easing: 'linear',
        //     loop: false
        // },
    },
})


//
const MAX_TIME = 60;    // (단위 : 분)
// const MAX_TIME = 6;    // (단위 : 분)
let elapsed_time = 0;   // (단위 : 초) 
let time_timer_interval = setInterval(() => {
    elapsed_time += 1
    chart.data.datasets[0].data[0] = Math.floor(elapsed_time / 60)
    chart.data.datasets[0].data[1] = Math.floor(MAX_TIME - elapsed_time / 60)
    chart.update();
}, 1000);                   // 60초 * 60분 = 3600초

setTimeout(() => {
    clearInterval(time_timer_interval)

    console.log(chart.data.datasets[0].data[0], chart.data.datasets[0].data[1])
    // alert('')
}, MAX_TIME * 1000 * 60);   // 60분 * 60초  = 3600초

/*
const MAX_TIME = 60;    // (단위 : 분)
let elapsed_time = 0;   // (단위 : 초) 
let time_timer_interval = setInterval(() => {
    chart.data.datasets[0].data.push([elapsed_time / 60, MAX_TIME - elapsed_time / 60])
    console.log(elapsed_time / 60)
}, 1000);

setTimeout(() => {
    clearInterval(time_timer_interval)
    // alert('')
}, MAX_TIME * 1000);
*/

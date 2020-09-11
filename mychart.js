$(document).ready(function() {

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data:
    {
        labels: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Jquery', 'PhP', 'MySQL', 'Laravel'],
        datasets: [
            {
            data: [75, 65, 60, 55, 55, 60, 45, 40],
            label: 'Skills',
            backgroundColor:  [
                'rgba(249, 65, 68)',
                'rgba(243, 114, 44)',
                'rgba(248, 150, 30)',
                'rgba(249, 199, 79)',
                'rgba(144, 190, 109)',
                'rgba(67, 170, 139)',
                'rgba(87, 117, 144)',
                'rgba(255, 255, 255)'
            ],
            
            }
                    ]
    },
    options: {
    }
});

});
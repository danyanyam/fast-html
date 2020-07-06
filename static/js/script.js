function getTime () {
	Data = new Date();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
	Result = Hour + ":" + Minutes + ":" + Seconds

	// Вывод
	return Result;
};

function start_timer () {
	setInterval(function () {
				document.getElementById("timer").innerHTML= getTime();
				}, 1000);
};


function get_date () {
	var date = new Date();
	var dd = date.getDate();
	if (dd < 10) dd = '0' + dd;
	var mm = date.getMonth() + 1; // месяц 1-12
	if (mm < 10) mm = '0' + mm;
	var yy = date.getFullYear() % 100;
	if (yy < 10) yy = '0' + yy;

	document.getElementById("timer").innerHTML =  dd + '.' + mm + '.' + yy;
}

function color_applier(element) {
	if (element.innerHTML < 0) {
		return "#FFA5A5"
	}
	else
		return "#B9FFA5"
};

function change_yield_color (tag) {
	var array_yields = document.getElementsByClassName(tag);
	for (var i = 0; i != array_yields.length; i++) {
		array_yields[i].style.background = color_applier(array_yields[i]);
		if (array_yields[i].innerHTML < 0) {
			array_yields[i].style.color = '#FA0703'
		}
		else
			array_yields[i].style.color = 'green'
	}
};

	

function change_number_color (tag) {
	var array_yields = document.getElementsByClassName(tag);
	for (var i = 0; i != array_yields.length; i++) {
		if (array_yields[i].innerHTML < 0) {
			var color = "red"
		}
		else
			var color = "green"
		array_yields[i].style.color = color;
	}
};

function get_value_of_portfolio(tag, title, data_points, labels, first_color, second_color) {
	
	var data_points = data_points.split(" ");
	var labels = labels.split(" ");
	console.log(labels);

	var data_fill_colors = [];
	for (var i = 0; i != data_points.length; i++) {
		if (data_points[i] < 0) {
			data_fill_colors.push('rgb(254, 30, 81)');
		}
		else
			data_fill_colors.push('rgb(54, 254, 30)')
	};
	
	var ctx = document.getElementById(tag).getContext('2d');

	var width = window.innerWidth || document.body.clientWidth;
	var gradientStroke = ctx.createLinearGradient(0, 0, width, 0);


	gradientStroke.addColorStop(0, first_color);
	gradientStroke.addColorStop(0.3, second_color);
	
	// gradientStroke.addColorStop(1, '#B80554');


	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: labels,
	        datasets: [{
	            label: title,
	            borderColor: '#F7D2CE',
	            fill: true,
	            backgroundColor: gradientStroke,
	            pointBackgroundColor: data_fill_colors,
	            data: data_points
	        }]
	    },
	    // Configuration options go here
	    options: {
	    	responsive: true,
	    	scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }   
        }]
    }
	    	// fill: "origin"
	    }
	});

	return chart
};


function Remover () {
	var els = document.getElementsByClassName('trash');
	for (var i = els.length - 1; i >= 0; i--) {
		els[i].remove();
	}
};
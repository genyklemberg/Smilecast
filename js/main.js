$(function(){
    
    var locale = 'us',
		weatherDiv = $('#weather'),
		scroller = $('#scroller'),
		location = $('h1.location');

    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; // Deviation from UTC in milliseconds
        var city = data.city.name;
        var country = data.city.country;

        $.each(data.list, function(){
            // "this" takes forecast object from here http://openweathermap.org/forecast16
            var localTime = new Date(this.dt*1000 - offset); // convert from UTC time to local
            addWeather(
                this.weather[0].icon,
                moment(localTime).calendar(),	// Using moment.js date for submission
                this.weather[0].description,
                Math.round(this.temp.day) + '&deg;C'
            );
        });
        $('#location').html(city + ', <b>' + country + '</b>'); // Adding a location to the page
    }

    function addWeather(icon, day, condition, temp){
        var markup = '<li>' +
			'<p class="table_day_name">' + day +'</p>' +
            '<p class="table_day_pic"><img src="images/'+ icon + '.png" /></p>' +
			'<p class="table_day_descr">' + condition + '</p>' +
            '<p class="table_day_descr">' + temp + '</p>' +
			'</p></li>';

		scroller.append(markup);
	}

    function showError(msg){
        $('#error').html('error occurred' + msg);
    }
});

function eMail() {
    var value = document.getElementById("e-mail").value;
    if (value.indexOf("@",".") >-1) {
        var modifier = "";
    }   else {
        modifier = "not ";
    }
    var report = "You entered '" + value + "'; this is " + modifier + "a valid e-mail.";
    alert(report);
    
}

function forecast() {
    
}

function articels() {
    
}

function forms() {
    
}

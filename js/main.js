$(function(){
    getWeatherData('ua', dataReceived, showError);

    function dataReceived(data) {
        var offset = (new Date()).getTimezoneOffset()*60*1000; // Deviation from UTC in milliseconds
        var city = data.city.name;
        var country = data.city.country;

        $.each(data.list, function(){
            // "this" òðèìàº îá'ºêò ïðîãíîçó çâ³äñè: http://openweathermap.org/forecast16
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
        var markup = '<tr>'+
                '<td>' + day + '</td>' +
                '<td>' + '<img src="images/icons/'+ icon +'.png" />' + '</td>' +
                '<td>' + temp + '</td>' +
                '<td>' + condition + '</td>'
            + '</tr>';
        weatherTable.insertRow(-1).innerHTML = markup; // Add a line to the table
    }

    function showError(msg){
        $('#error').html('error occurred' + msg);
    }
});

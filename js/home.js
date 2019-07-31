$(document).ready(function () {
    /* Current Conditions FeelsOkayMan */
    $.ajax({
        type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?zip=xxxxx&units=imperial&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        success: function (data) {
            /* Turn JSON into Displayable Data */
            var city = data.name;
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var windSpeed = data.wind.speed;
            var windDir = data.wind.deg;

            /* These will be set in the each function below */
            var condition = null;
            var description = null;
            var icon = null;

            /* Weather key has object values in an array, pick the first one */
            $.each(data.weather, function (index, weather) {
                if (index === 0) {
                    condition = weather.main;
                    description = weather.description;
                    icon = weather.icon;
                    id = weather.id;
                }
            });

            /* Apply */
            /* Current Conditions Left */
            $(document.getElementById('iconDescription')).prepend($('<img class="addedInfo" alt="' + condition + '" src="https://openweathermap.org/img/w/' + icon + '.png">').html('</img>'));
            $(document.getElementById('iconDescription')).append($('<h3 class="addedInfo">').text(description));

            /* Current Conditions Right */
            // Could use labels here instead of just text
            $(document.getElementById('currentTemp')).before($('<h4 class="addedInfo">').text('Current Temp: ' + temp + " " + 'F'));
            $(document.getElementById('currentHumid')).before($('<h4 class="addedInfo">').text($(document.getElementById('currentHumid')).text() + humidity + "%"));
            $(document.getElementById('currentWindSpeed')).before($('<h4 class="addedInfo">').text($(document.getElementById('currentWindSpeed')).text() + windSpeed + " " + windSpeedUnit));
            $(document.getElementById('currentWindDir')).before($('<h4 class="addedInfo">').text($(document.getElementById('currentWindDir')).text() + windDir + " degrees (meteorological)"));

            console.log("Ajax call to retrieve current weather info successful.")

        },
        error: function () {
            console.log("Ajax call to retrieve current weather information failed.")
        }
    });
});
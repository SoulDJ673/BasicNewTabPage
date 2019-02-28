$(document).ready(function () {
    /* Current Conditions FeelsOkayMan */
    $.ajax({
        type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?zip=40065&units=imperial&appid=e52123ca9924186bd5b93d59366b7e55',
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
            $('#iconDescription').prepend($('<img class="addedInfo" alt="' + condition + '" src="https://openweathermap.org/img/w/' + icon + '.png">').html('</img>'));
            $('#iconDescription').append($('<h3 class="addedInfo">').text(description));

            /* Current Conditions Right */
            // Could use labels here instead of just text
            $('#currentTemp').before($('<h4 class="addedInfo">').text('Current Temp: ' + temp + " " + 'F'));
            $('#currentHumid').before($('<h4>').text($('#currentHumid').text() + humidity + "%"));
            $('#currentWindSpeed').before($('<h4 class="addedInfo">').text($('#currentWindSpeed').text() + windSpeed + " " + windSpeedUnit));
            $('#currentWindDir').before($('<h4 class="addedInfo">').text($('#currentWindDir').text() + windDir + " degrees (meteorlogical)"));

            console.log("Ajax call to retrieve current weather info successful.")

        },
        error: function () {
            console.log("Ajax call to retrieve current weather information failed.")
        }
    });
});

function searchEcosia() {
    window.location.href = 'https://www.ecosia.org/search?q=' + $('#searchBox').val();
}
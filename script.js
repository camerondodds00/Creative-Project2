const url = "https://covid-api.mmediagroup.fr/v1/cases?country=Global";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let results = "";
    results += '<br> <h2>Coronavirus Worldwide' + "</h2>";

    results+= '<p> Total cases: ' + json.All.confirmed + '</p>';
    results+= '<p> Total recovered: ' + json.All.recovered + '</p>';
    results+= '<p> Total deaths: ' + json.All.deaths + '</p>';
    results+= '<p> Up to date as of: ' + moment(json.All.updated).format('MMMM Do YYYY hh a') + '</p>';

    console.log(results);
    document.getElementById("world-info").innerHTML = results;
  });


document.getElementById("covidSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("covidInput").value;
  if (value === "")
    return;
  //currentWeather
  const url = "https://covid-api.mmediagroup.fr/v1/cases?country=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<br> <h2>Covid in ' + json.All.country + "</h2>";
      results += '<p> Confirmed Cases: ' + json.All.confirmed + '</p>';
      results += '<p> Total Recovered: ' + json.All.recovered + '</p>';
      results += '<p> Confirmed Deaths: ' + json.All.deaths + '</p>';

      let perCapita = (json.All.confirmed / json.All.population) * 100000;

      results += '<p> Cases per 100,000 people: ' + perCapita + '</p>';
      /*for (let i = 0; i < json..length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<span>' + json.main.temp + " &deg;F</span>"
      results += "<span>"
      for (let i = 0; i < json.weather.length; i++) {
        results += "Sky: "
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }*/
      results += "</span>";

      console.log(results);
      document.getElementById("weatherResults").innerHTML = results;
    });
  //weatherForecast
  /*const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=f41f869874964dcafa2270c3bde99587";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let forecast = "";
      //forecast += "<div class= "column">";
      for (let i = 0; i < json.list.length; i++) {
        if ((i == 0) || (moment(json.list[i - 1].dt_txt).format('MMMM Do YYYY') != moment(json.list[i].dt_txt).format('MMMM Do YYYY'))) {
          forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY') + "</h2>";
        }
        forecast += "<h4>" + moment(json.list[i].dt_txt).format('h:mm:ss a') + "</h4>";
        forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
        forecast += "<span>Sky: " + json.list[i].weather[0].description + "</span>";
        forecast += "<span>Temperature: " + json.list[i].main.temp + " °F" + "</span>";
        forecast += "<span>Feels Like: " + json.list[i].main.feels_like + " °F" + "</span>";
        forecast += "<span>Humidity: " + json.list[i].main.humidity + "%" + "</span>";
      }
      forecast += "<br>"
      forecast+= "<hr>"
      document.getElementById("forecastResults").innerHTML = forecast;
    });*/
});

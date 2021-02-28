/* Global Data */
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

/* Country Data */
document.getElementById("covidSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("covidInput").value;
  if (value === "")
    return;

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

      results += "</span>";

      console.log(results);
      document.getElementById("countryResults").innerHTML = results;
    });

});

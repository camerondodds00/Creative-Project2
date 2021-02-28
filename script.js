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

    //historical data
    const url2 = "https://covid-api.mmediagroup.fr/v1/history?country=" + value + "&status=confirmed";
    fetch(url2)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
      console.log(json);
      let result = "";

      result += '<h2> Total Cases by Date: </h2>';
      let index = 0;

      let date = "2020-02-01";

      console.log(json.All.country);

      result += '<p>Date: Feb. 1, 2020 ' + json.All.dates[[date]] + '</p>';
      result += '<p>Date: Mar. 1, 2020 ' + json.All.dates["2020-03-01"] + '</p>';
      result += '<p>Date: Apr. 1, 2020 ' + json.All.dates["2020-04-01"] + '</p>';
      result += '<p>Date: May. 1, 2020 ' + json.All.dates["2020-05-01"] + '</p>';
      result += '<p>Date: June. 1, 2020 ' + json.All.dates["2020-06-01"] + '</p>';
      result += '<p>Date: July. 1, 2020 ' + json.All.dates["2020-07-01"] + '</p>';
      result += '<p>Date: Aug. 1, 2020 ' + json.All.dates["2020-08-01"] + '</p>';
      result += '<p>Date: Sep. 1, 2020 ' + json.All.dates["2020-09-01"] + '</p>';
      result += '<p>Date: Oct. 1, 2020 ' + json.All.dates["2020-10-01"] + '</p>';
      result += '<p>Date: Nov. 1, 2020 ' + json.All.dates["2020-11-01"] + '</p>';
      result += '<p>Date: Dec. 1, 2020 ' + json.All.dates["2020-12-01"] + '</p>';
      result += '<p>Date: Jan. 1, 2021 ' + json.All.dates["2021-01-01"] + '</p>';
      result += '<p>Date: Feb. 1, 2021 ' + json.All.dates["2021-02-01"] + '</p>';

      document.getElementById("Historical-Data").innerHTML = result;
    });

});

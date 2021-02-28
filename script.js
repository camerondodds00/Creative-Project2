/* Global Data */
const url = "https://covid-api.mmediagroup.fr/v1/cases?country=Global";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let results = "";
    results += '<h1>Worldwide Statistics' + "</h1>";

    results+= '<h5> Total cases: ' + json.All.confirmed + '</h5>';
    results+= '<h5> Total recovered: ' + json.All.recovered + '</h5>';
    results+= '<h5> Total deaths: ' + json.All.deaths + '</h5>';
    results+= '<h5> Up to date as of: ' + moment(json.All.updated).format('MMMM Do, YYYY hh:mm a') + '</h5>';

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
      results += '<hr>';
      results += '<br> <h1>Covid-19 in ' + json.All.country + "</h1>";
      results += '<h5> Confirmed Cases: ' + json.All.confirmed + '</h5>';
      results += '<h5> Total Recovered: ' + json.All.recovered + '</h5>';
      results += '<h5> Confirmed Deaths: ' + json.All.deaths + '</h5>';

      let perCapita = (json.All.confirmed / json.All.population) * 100000;

      results += '<h5> Cases per 100,000 people: ' + perCapita + '</h5>';

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

      result += '<br> <h2> Total Cases by Date: </h2>';
      let index = 0;

      let date = "2020-02-01";

      console.log(json.All.country);

      result += '<hr><pre><h5>Date: Feb. 1, 2020 \t Cases: ' + json.All.dates[[date]] + '</h5>';
      result += '<hr><h5>Date: Mar. 1, 2020 \t Cases: ' + json.All.dates["2020-03-01"] + '</h5>';
      result += '<hr><h5>Date: Apr. 1, 2020 \t Cases: ' + json.All.dates["2020-04-01"] + '</h5>';
      result += '<hr><h5>Date: May. 1, 2020 \t Cases: ' + json.All.dates["2020-05-01"] + '</h5>';
      result += '<hr><h5>Date: June. 1, 2020 \t Cases: ' + json.All.dates["2020-06-01"] + '</h5>';
      result += '<hr><h5>Date: July. 1, 2020 \t Cases: ' + json.All.dates["2020-07-01"] + '</h5>';
      result += '<hr><h5>Date: Aug. 1, 2020 \t Cases: ' + json.All.dates["2020-08-01"] + '</h5>';
      result += '<hr><h5>Date: Sep. 1, 2020 \t Cases: ' + json.All.dates["2020-09-01"] + '</h5>';
      result += '<hr><h5>Date: Oct. 1, 2020 \t Cases: ' + json.All.dates["2020-10-01"] + '</h5>';
      result += '<hr><h5>Date: Nov. 1, 2020 \t Cases: ' + json.All.dates["2020-11-01"] + '</h5>';
      result += '<hr><h5>Date: Dec. 1, 2020 \t Cases: ' + json.All.dates["2020-12-01"] + '</h5>';
      result += '<hr><h5>Date: Jan. 1, 2021 \t Cases: ' + json.All.dates["2021-01-01"] + '</h5>';
      result += '<hr><h5>Date: Feb. 1, 2021 \t Cases: ' + json.All.dates["2021-02-01"] + '</h5></pre><hr>';

      document.getElementById("Historical-Data").innerHTML = result;
    });

});

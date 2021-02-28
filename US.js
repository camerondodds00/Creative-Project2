/* US */
const url = "https://covid-api.mmediagroup.fr/v1/cases?country=US";
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

    console.log(results);
    document.getElementById("US-info").innerHTML = results;
  });


/* State Data */
document.getElementById("USSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("USInput").value;
  if (value === "")
    return;

  const url = "https://covid-api.mmediagroup.fr/v1/cases?country=US";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<br> <h2>Covid in ' + value + "</h2>";
      console.log(json[value]);
      results += '<p> Confirmed Cases: ' + json[value].confirmed + '</p>';
      results += '<p> Total Recovered: ' + json[value].recovered + '</p>';
      results += '<p> Confirmed Deaths: ' + json[value].deaths + '</p>';
      results += '<p> Long: ' + json[value].long + ' Lat: ' + json[value].lat;

      results+= '<p> Up to date as of: ' + moment(json[value].updated).format('MMMM Do YYYY hh:mm a') + '</p>';

      console.log(results);

      document.getElementById("stateResults").innerHTML = results;
    });

});

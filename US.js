/* US */
const url = "https://covid-api.mmediagroup.fr/v1/cases?country=US";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let results = "";
    results += '<h1>' + "United States Statistics </h1>";
    results += '<h5> Confirmed Cases: ' + json.All.confirmed + '</h5>';
    results += '<h5> Total Recovered: ' + json.All.recovered + '</h5>';
    results += '<h5> Confirmed Deaths: ' + json.All.deaths + '</h5>';

    let perCapita = (json.All.confirmed / json.All.population) * 100000;

    results += '<h5> Cases per 100,000 people: ' + perCapita + '</h5>';

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
      results += '<hr><br> <h1>Covid-19 in ' + value + "</h1>";
      console.log(json[value]);
      results += '<h5> Confirmed Cases: ' + json[value].confirmed + '</h5>';
      results += '<h5> Total Recovered: ' + json[value].recovered + '</h5>';
      results += '<h5> Confirmed Deaths: ' + json[value].deaths + '</h5>';
      results += '<h5> Long: ' + json[value].long + ' Lat: ' + json[value].lat;

      results+= '<h5> Up to date as of: ' + moment(json[value].updated).format('MMMM Do, YYYY hh:mm a') + '</h5>';

      console.log(results);

      document.getElementById("stateResults").innerHTML = results;
    });

});

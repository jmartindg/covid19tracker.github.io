// Selectors

/* For Search Countries Version
const searchInput = document.querySelector('#search_country');
const searchButton = document.querySelector('#button-addon2');
*/

// Select Country Version
const selectedCountry = document.querySelector('#country_selector');

selectedCountry.addEventListener('change', function(e) {
    fetch('https://corona.lmao.ninja/v2/countries/' + selectedCountry.value)
        .then(response => response.json())
        .then(data => {
            e.preventDefault();
            document.querySelector('#country').innerHTML = ' in ' + data.country + ' '.toLocaleString();
            document.querySelector('#flag').src = data.countryInfo.flag;
            document.querySelector('#active').innerHTML = data.active.toLocaleString();
            document.querySelector('#total').innerHTML = data.cases.toLocaleString();
            document.querySelector('#today').innerHTML = data.todayCases.toLocaleString();
            document.querySelector('#recovered').innerHTML = data.recovered.toLocaleString();
            document.querySelector('#deaths').innerHTML = data.deaths.toLocaleString();
            document.querySelector('#today_deaths').innerHTML = data.todayDeaths.toLocaleString();
        })
        .catch(err => alert('Country not available. Please enter another country.'));
})

// Onload Show Stats
function all_stats() {
    fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#country').innerHTML = ' in the World'
            document.querySelector('#active').innerHTML = data.active.toLocaleString();
            document.querySelector('#total').innerHTML = data.cases.toLocaleString();
            document.querySelector('#today').innerHTML = data.todayCases.toLocaleString();
            document.querySelector('#recovered').innerHTML = data.recovered.toLocaleString();
            document.querySelector('#deaths').innerHTML = data.deaths.toLocaleString();
            document.querySelector('#today_deaths').innerHTML = data.todayDeaths.toLocaleString();
        })
        .catch(err => alert('World Statistics Data Error. Please Reload the Site.'))
}

// Fetch API for Search Countries Version
/* searchButton.addEventListener('click', function(e) {
    fetch('https://corona.lmao.ninja/v2/countries/' + searchInput.value)
        .then(response => response.json())
        .then(data => {
            e.preventDefault();
            document.querySelector('#country').innerHTML = ' in ' + data.country + ' '.toLocaleString();
            document.querySelector('#flag').src = data.countryInfo.flag;
            document.querySelector('#active').innerHTML = data.active.toLocaleString();
            document.querySelector('#total').innerHTML = data.cases.toLocaleString();
            document.querySelector('#today').innerHTML = data.todayCases.toLocaleString();
            document.querySelector('#recovered').innerHTML = data.recovered.toLocaleString();
            document.querySelector('#deaths').innerHTML = data.deaths.toLocaleString();
            document.querySelector('#today_deaths').innerHTML = data.todayDeaths.toLocaleString();
        })
        .catch(err => alert('Country not available. Please enter another country.'));
}) */
    
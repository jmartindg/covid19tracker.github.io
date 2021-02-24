// Selectors
const searchInput = document.querySelector('#search_country');
const searchButton = document.querySelector('#button-addon2');

// Fetch API
searchButton.addEventListener('click', function(e) {
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
})
    
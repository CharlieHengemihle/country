/* Imports */
import { renderContinentOption, renderCountry } from './render-utils.js';
import {getCountries, getContinents } from './fetch-utils.js';
/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const continentSelect = document.getElementById('continent-select');
const countryList = document.getElementById('country-list');

/* State */
let error = null;
let count = 0;
let continents = [];
let countries = [];

/* Events */
window.addEventListener('load', async () => {
    findCountries();

    const response = await getContinents();

    error = response.error;
    continents = response.data


    if (!error) {
        displayContinentOptions();
    }
});

async function findCountries(name, continent) {

    const response = await getCountries();
    // > Part C: Add the name and continent arguments to getCountries

:
    error = response.error;

    countries = response.data;


    // > Part D: Assign to state the:
    //      - count (of db records)

    displayNotifications();
    if (!error) {
        displayCountries();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    // > Part C: Call findCountries with name and continent from formData
});

/* Display Functions */
function displayCountries() {
    countryList.innerHTML = '';

    for (const country of countries) {
        const countryEl = renderCountry(country);
        countryList.append(countryEl);
        
    }
}

function displayNotifications() {
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        // > Part D: Display a message with
        //      - how many items were returned in countries array
        //      - how many total matching countries were in the db
    }
}

function displayContinentOptions() {
    for (const continent of continents) {
        const continentEl = renderContinent(continentEl);
        continentList.append(continent);
    }
}

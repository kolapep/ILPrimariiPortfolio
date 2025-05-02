const apiKey = '21273a8f46fc47f09f30d4c4b404ec75';

const city = 'New York City'

const apiUrl =
'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=21273a8f46fc47f09f30d4c4b404ec75';

// Asynchronously fetch weather data
async function fetchNewsData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        const data = await response.json();
        console.log(data); // Or process the data in any way you need
        fetchNewsData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// function displayWeather data on the webpage
function displayNewsData(newsData){
    const newsDiv = document.getElementById('news-API');
    const 
}

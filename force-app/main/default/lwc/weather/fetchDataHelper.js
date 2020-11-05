export default function fetchDataHelperWeather(cityName) {
    const bodyData = { query: 
        `{
            getCityByName(name: "${cityName}") {
              id,
              name,
              country,
              coord {
                lon,
                lat
              },
              weather {
                summary {
                  title,
                  description,
                },
                temperature {
                  actual,
                  feelsLike,
                  min,
                  max
                },
                wind {
                  speed,
                  deg
                },
                clouds {
                  all,
                  visibility,
                  humidity
                },
                timestamp
              }
            }
        }`,
        variables: {}
    };

    return fetch('https://graphql-weather-api.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bodyData),
    }).then(response => response.json())
    .catch(error => console.log('error', error));
}

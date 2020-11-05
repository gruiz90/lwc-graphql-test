export default function fetchDataHelper(offset) {
    const bodyData = { query: 
        `query {
            Country(first: 50, offset: ${offset}) {
                _id,
                name,
                alpha2Code,
                capital,
                area,
                population,
                populationDensity,
                numericCode
                demonym,
                nativeName
            }
        }`,
        variables: {}
    };

    return fetch('https://countries-274616.ew.r.appspot.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bodyData),
    }).then(response => response.json())
    .catch(error => console.log('error', error));
}

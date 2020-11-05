import { LightningElement } from 'lwc';
import fetchDataHelper from './fetchDataHelper';


export default class Weather extends LightningElement {
    cityName = ''
    weatherData = {}
    existsData = false

    fetchWeatherData = async () => {
        console.log(this.cityName);
        const response = await fetchDataHelper(this.cityName);
        console.log(response);
        if (response.data) {
            this.weatherData = response.data.getCityByName;
            this.existsData = true;
        } else {
            this.weatherData = {};
            this.existsData = false;
        }
        console.log(this.weatherData);
    }

    handleChange(event) {
        this.cityName = event.target.value;
    }
}

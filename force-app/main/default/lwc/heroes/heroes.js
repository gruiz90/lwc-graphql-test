import { LightningElement } from 'lwc';
import fetchHeroesData from './fetchHeroesData';


export default class Heroes extends LightningElement {

    async connectedCallback() {
        const response = await fetchHeroesData();
        console.log('Heroes API response ->');
        console.log(response)
    }
}

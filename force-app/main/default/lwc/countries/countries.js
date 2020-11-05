import { LightningElement } from 'lwc';
import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Alpha2Code', fieldName: 'alpha2Code' },
    { label: 'Capital', fieldName: 'capital' },
    { label: 'Area', fieldName: 'area', type: 'number' },
    { label: 'Population', fieldName: 'population', type: 'number' },
    { label: 'Population Density', fieldName: 'populationDensity', type: 'number' },
    { label: 'NumericNode', fieldName: 'numericCode' },
    { label: 'Demonym', fieldName: 'demonym' },
    { label: 'NativeName', fieldName: 'nativeName' },
];

export default class Countries extends LightningElement {
    data = [];
    columns = columns;
    rowOffset = 0;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const response = await this.fetchCountries(0);
        this.data = response.data.Country;
    }

    fetchCountries = async (offset) => {
        return await fetchDataHelper(offset);
    }

    async increaseRowOffset() {
        this.rowOffset += 50;
        const response = await this.fetchCountries(this.rowOffset);
        this.data = [...this.data, ...response.data.Country];
        console.table(this.data);
    }
}

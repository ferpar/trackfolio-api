import { ICurrencyRepo } from '../../src/domain/ICurrencyRepo'
import { ICurrency } from '../../src/domain/Currency';

export class CurrencyRepoStub implements ICurrencyRepo {

    private data: any = {};

    constructor( currencyArray?: ICurrency[]) {
        currencyArray?.forEach( currency => this.data[currency.id] = currency)
    }
    
    async save( currencyArray: ICurrency[]): Promise<boolean> {
        try {
            for (let currency of currencyArray) {
                if ( currencyArray.filter( (inputCurrency: ICurrency) => inputCurrency.id === currency.id).length ) {
                    this.data[currency.id] = currency
                } else {
                    this.data[currency.id].quotes.push( ...currency.quotes )
                }
            }
        } catch (err) {
            console.error('Error saving to the CurrencyRepoStub', err)
        }
        return this.data
    }
}
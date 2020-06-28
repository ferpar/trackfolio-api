import { ICurrencyRepo } from '../../src/domain/ICurrencyRepo'
import { ICurrency } from '../../src/domain/Currency';

export class CurrencyRepoStub implements ICurrencyRepo {

    private currencyObj: any = {};

    constructor( currencyArray?: ICurrency[]) {
        currencyArray?.forEach( currency => this.currencyObj[currency.id] = currency)
    }
    
    async save( currencyArray: ICurrency[]): Promise<ICurrency[]> {
        try {
            for (let currency of currencyArray) {
                if ( currencyArray.filter( (inputCurrency: ICurrency) => inputCurrency.id === currency.id).length ) {
                    this.currencyObj[currency.id] = currency
                } else {
                    this.currencyObj[currency.id].quotes.push( ...currency.quotes )
                }
            }
        } catch (err) {
            console.error('Error saving to the CurrencyRepoStub', err)
        }
        return Object.values(this.currencyObj)
    }

    async getById(currencyIds: number[]): Promise<ICurrency[]> {
        let selectedCurrencies : ICurrency[] = []
        try {
            for (let id in currencyIds) {
                selectedCurrencies.push(this.currencyObj[id])
            }
        } catch (err) {
            console.error('Error retrieving currencies from CurrencyRepoStub', err)
        }
        return selectedCurrencies
    }
}
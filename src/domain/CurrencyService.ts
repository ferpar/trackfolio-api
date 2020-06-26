import { ICurrency } from './Currency';
import { ICurrencyOracle } from './ICurrencyOracle';

export class CurrencyService {
    public currencyOracle: ICurrencyOracle;
    
    constructor( currencyOracle: ICurrencyOracle ){
        this.currencyOracle = currencyOracle
    }

    public async updateCurrencies() {
        return await this.currencyOracle.getCurrencies()
    }
}
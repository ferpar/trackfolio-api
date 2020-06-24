import { ICurrency } from './Currency';
import { ICurrencyOracle } from './ICurrencyOracle'

export class CurrencyService {
    public currencyOracle: ICurrencyOracle
    
    constructor( currencyOracle: ICurrencyOracle ){
        this.currencyOracle = currencyOracle
    }

    updateCurrencies() {
        this.currencyOracle.getCurrencies()
    }
}
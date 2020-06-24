import ICurrency from './Currency';

export interface ICurrencyOracle {
    getCurrencies(): ICurrency[]
}
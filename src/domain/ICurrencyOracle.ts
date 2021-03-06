import { ICurrency } from './Currency';

export interface ICurrencyOracle {
    getCurrencies(): Promise<ICurrency[]>
}
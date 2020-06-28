import { ICurrency } from './Currency';
export interface ICurrencyRepo {
    save( currencyArray: ICurrency[] ): Promise<any>
    getById( currencyIds: number[] ): Promise<ICurrency[]>
}
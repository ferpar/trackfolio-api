import { ICurrencyRepo } from '../domain/ICurrencyRepo';
import { ICurrency } from '../domain/Currency';
import { PgPool } from './PgPool';

export class PgCurrencyRepo implements ICurrencyRepo {
    constructor( pgPool: PgPool ) {

    }
    async save( currencyArray: ICurrency[] ): Promise<any> {
        
    }

    async getById (currencyIds: number[] ): Promise<ICurrency[]> {
        
    }
}
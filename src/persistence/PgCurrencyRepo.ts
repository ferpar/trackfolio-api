import { ICurrencyRepo } from '../domain/ICurrencyRepo';
import { ICurrency } from '../domain/Currency';

export class PgCurrencyRepo implements ICurrencyRepo {
    constructor() {
        
    }
    async save( currencyArray: ICurrency[] ): Promise<any> {

    }
}
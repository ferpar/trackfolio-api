import { ICurrency } from './Currency';
import { ICurrencyOracle } from './ICurrencyOracle';
import { ICurrencyRepo } from './ICurrencyRepo';

export class CurrencyService {
    private currencyOracle: ICurrencyOracle;
    private currencyRepo: ICurrencyRepo;
    
    constructor( currencyOracle: ICurrencyOracle, currencyRepo: ICurrencyRepo ){
        this.currencyOracle = currencyOracle
        this.currencyRepo = currencyRepo
    }

    public async updateCurrencyStore(): Promise<ICurrency[]> {
        return await this.currencyOracle.getCurrencies()
    }

    public async storeCurrencies() {
        const currencyArray: ICurrency[] = await this.updateCurrencyStore()
        return await this.currencyRepo.save(currencyArray)
    }

    public async getCurrencies(currencyIds: number[]): Promise<ICurrency[]> {
        return await this.currencyRepo.getById( currencyIds )       
    }
    
}
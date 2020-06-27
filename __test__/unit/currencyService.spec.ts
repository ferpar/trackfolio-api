import { CurrencyService } from '../../src/domain/CurrencyService'
import { CurrencyOracleStub } from '../testdoubles/CurrencyOracleStub'
import { CurrencyRepoStub } from '../testdoubles/CurrencyRepoStub'
import { ICurrency } from '../../src/domain/Currency'
import * as currencyFixture from '../fixtures/currencyRequest.json';


describe('currency service', () => {
    it('gets a currency list from the oracle', async () => {
        expect.assertions(2)
        //create new service
        const currencyService = new CurrencyService( new CurrencyOracleStub(), new CurrencyRepoStub() )
        
        const currencies: ICurrency[] = await currencyService.getUpdatedCurrencies()

        expect(currencies.length === currencyFixture.data.length ).toBe(true)
        expect( 'id' in currencies[0] && 'symbol' in currencies[0] ).toBe(true)
    })
    it('stores currencies in the repository', async () => {
        //create new service
        const currencyService = new CurrencyService( new CurrencyOracleStub(), new CurrencyRepoStub() )

        const data = await currencyService.storeCurrencies()
        
        expect(Object.keys(data).length).toBe(currencyFixture.data.length)
    })
})

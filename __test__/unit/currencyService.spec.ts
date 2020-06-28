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
        
        const currencies: ICurrency[] = await currencyService.updateCurrencyStore()

        expect(currencies.length === currencyFixture.data.length ).toBe(true)
        expect( 'id' in currencies[0] && 'symbol' in currencies[0] ).toBe(true)
    })
    it('stores currencies in the repository', async () => {
        //create new service
        const currencyService = new CurrencyService( new CurrencyOracleStub(), new CurrencyRepoStub() )

        const storedCurrencies = await currencyService.storeCurrencies()

        expect(storedCurrencies.length).toBe(currencyFixture.data.length)
    })
    xit('retrieves currencies selected by id', async () => {
        //create new service
        const currencyService = new CurrencyService( new CurrencyOracleStub(), new CurrencyRepoStub() )

        const idSelection = [1, 2, 52]

        const selectedCurrencies = await currencyService.getCurrencies( idSelection )

        //this should always match because neither of the 3 should ever fall below the 100th rank
        expect(selectedCurrencies.map( currency => currency.symbol) )
            .toContain( ['BTC', 'LTC', 'XRP'] )
    })
})

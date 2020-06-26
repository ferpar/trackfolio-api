import { CurrencyService } from '../../src/domain/CurrencyService'
import { CurrencyOracleStub } from '../testdoubles/CurrencyOracleStub'
import { ICurrency } from '../../src/domain/Currency'


describe('currency service', () => {
    it('has a running test specification', () => {
        expect(true).toBe(true)
    })
    it('gets a currency list from the oracle', async () => {
        expect.assertions(2)
        const currencyService = new CurrencyService( new CurrencyOracleStub )
        const currencies: ICurrency[] = await currencyService.updateCurrencies()
        expect(currencies.length > 0 ).toBe(true)
        expect( 'id' in currencies[0] && 'symbol' in currencies[0] ).toBe(true)
    })
    xit('stores currencies in the repository', async () => {})
})

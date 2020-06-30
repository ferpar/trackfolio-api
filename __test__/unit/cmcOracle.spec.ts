import '../../src/env'
import { CMCOracle } from '../../src/dataFeeds/cmcOracle'
import { ICurrency } from '../../src/domain/Currency'


describe('coinmarketcap oracle service', () => {
    xit('should pull an updated listing', async () => {
        const currencyOracle = new CMCOracle()

        const currencyList: ICurrency[] = await currencyOracle.getCurrencies()

        expect(currencyList.length > 0).toBe(true)
    })
})
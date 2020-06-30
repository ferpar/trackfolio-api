import '../../src/env'
import { ICurrency, IQuote } from '../../src/domain/Currency'
import { pgPool } from '../../src/persistence/pgConnection'
import { PgCurrencyRepo } from '../../src/persistence/PgCurrencyRepo'
import currencyData from '../../src/assets/test.json'

const currencyDb = new PgCurrencyRepo( pgPool )

describe('currency repository based on node-postgres', () => {
    afterAll( async () => {
        await pgPool.shutdown()
    })
    afterEach(async () => {
        await pgPool.query('DELETE FROM currencies')
    })
    it('saves currencies to the database', async () => {
        await currencyDb.save( currencyData )
        const currenciesSaved = await pgPool.query('SELECT * FROM currencies');
        expect(currenciesSaved.rows.length).toBe(100)
    })
    it('saves currencies quotes', async () => {
        await currencyDb.save( currencyData )
        const quotesSaved = await pgPool.query('SELECT * FROM quotes');
        expect(quotesSaved.rows.length).toBe(100)
    })
    it('return a "success" string when successfully saving currencies' , async () => {
        const saveResponse: string = await currencyDb.save( currencyData )
        expect(saveResponse).toBe('success')
    })
    xit('retrieves currencies from the database', async () => {

    })
})
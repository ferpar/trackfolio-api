import { ICurrency, IQuote } from '../../src/domain/Currency'
import { pgPool } from '../../src/persistence/pgConnection'
import { PgCurrencyRepo } from '../../src/persistence/PgCurrencyRepo'

const currencyDb = new PgCurrencyRepo( pgPool )

describe('currency repository based on node-postgres', () => {
    xit('saves currencies to the database', async () => {})
    xit('retrieves currencies from the database', async () => {})
})
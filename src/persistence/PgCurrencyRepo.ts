import { ICurrencyRepo } from '../domain/ICurrencyRepo';
import { ICurrency, IQuote } from '../domain/Currency';
import { PgPool } from './PgPool';

export class PgCurrencyRepo implements ICurrencyRepo {
    private connection: PgPool;
    constructor( pgPool: PgPool ) {
        this.connection =  pgPool
    }
    async save( currencyArray: ICurrency[] ): Promise<any> {
        try {
            //currency are stored into the currency table
            for await (let currency of currencyArray) {
                const currText = 'INSERT INTO currencies ' + 
                '( currency_id, name, symbol, slug) VALUES ' +
                '($1, $2, $3, $4)' +
                'ON CONFLICT (currency_id) DO NOTHING'
                const currValues = [ 
                    currency.id, 
                    currency.name,
                    currency.symbol,
                    currency.slug
                ]
                this.connection.query(currText, currValues)
    
                let timestamp = new Date().getTime()
                //currency quotes are stored in the quotes table
                for await (let quote of currency.quotes) {
                    const quoteText = 'INSERT INTO quotes ' +
                    '(quote_id, base_id, symbol, price, timestamp) ' + 
                    '($1, $2, $3, $4, $5)'
                    const quoteValues = [
                        quote.id,
                        currency.id,
                        quote.symbol,
                        quote.price,
                        timestamp
                    ]
                    this.connection.query(quoteText, quoteValues)    
                }
            }
            return 'success'
        } catch (err) {
            console.error('[PgCurrencyRepo] Error saving currencies to the db', err)
            return 'failure'
        }
    }

    async getById (currencyIds: number[] ): Promise<ICurrency[]> {
        let returnedCurrencies: ICurrency[] = [];
        for await (let currencyId of currencyIds) {
            //get currency
            const currText = 'SELECT * FROM currencies WHERE currency_id = $1'
            const currValues = [
                currencyId
            ]
            const returnedCurrency: ICurrency = await this.connection.query(currText, currValues)
            
            //get currency quotes
            const quoteText = 'SELECT * FROM quotes WHERE base_id = $1'
            const quoteValues = [ currencyId ]
            const returnedQuotes: IQuote[] = await this.connection.query(quoteText, quoteValues)

            returnedCurrency.quotes.push(...returnedQuotes)

            //add currency to the list of currencies to return
            returnedCurrencies.push(returnedCurrency)
        }
        return returnedCurrencies
    }
}
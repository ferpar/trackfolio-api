import * as rawData from '../fixtures/currencyRequest.json';
import { ICurrencyOracle } from '../../src/domain/ICurrencyOracle';
import { ICurrency, IQuote } from '../../src/domain/Currency';

export class CurrencyOracleStub implements ICurrencyOracle {
    public currencies:any;
    async getCurrencies(): Promise<ICurrency[]> {
        try {
            const timestamp : number = new Date().getTime()
            this.currencies = rawData.data.map( (rawCurrency: any): ICurrency => ({
                id: rawCurrency.id,
                name: rawCurrency.name,
                symbol: rawCurrency.symbol,
                slug: rawCurrency.slug,
                quotes: [
                    ...(() => {
                        let quotes: IQuote[] = []
                        for (let quoteSymbol in rawCurrency.quote) {
                            quotes.push({
                                symbol: quoteSymbol,
                                price: rawCurrency.quote[quoteSymbol].price,
                                timestamp: timestamp
                            })
                        }
                        return quotes
                    })()
                ]
            }))
        } catch (err) {
            console.error("Error at CurrencyOracleStub", err)
        }
        return this.currencies
    }
}
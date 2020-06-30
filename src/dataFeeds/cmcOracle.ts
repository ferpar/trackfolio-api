import axios, { AxiosInstance } from 'axios'
import { ICurrencyOracle } from '../domain/ICurrencyOracle'
import { ICurrency, IQuote } from '../domain/Currency'

export class CMCOracle implements ICurrencyOracle{
    private service: any = axios.create({
        baseURL: process.env.CMC_API_URL,
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY
        }
    });
    public currencies: any;

    async getCurrencies(): Promise<ICurrency[]> {
        try {
            const timestamp: number = new Date().getTime()
            const rawData = await this.service.get('/cryptocurrency/listings/latest')
            this.currencies = rawData.data.data.map( (rawCurrency: any): ICurrency => ({
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
            console.error("Error interacting with coinmarketcap API", err)
        }
        return this.currencies
    }
}
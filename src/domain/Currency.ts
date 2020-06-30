export interface ICurrency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    quotes: IQuote[];
}

export interface IQuote {
    id?: number;
    symbol: string;
    price: number;
    timestamp: number;
}

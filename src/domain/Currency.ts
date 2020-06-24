export interface Currency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    quotes: Quote[];
}

export interface Quote {
    id: number;
    symbol: string;
    price: number;
    timestamp: number;
}
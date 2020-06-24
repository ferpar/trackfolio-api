export interface Currency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    quotes: Quote[];
}

interface Quote {
    id: number;
    symbol: string;
    price: number;
    last_updated: string;
}
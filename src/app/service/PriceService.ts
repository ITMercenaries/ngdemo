export class PriceService {
    constructor() {}

    calTotalPrice(basePrice: number, state: string): number {
        const tax = Math.random();
        return basePrice + tax;
    }
}

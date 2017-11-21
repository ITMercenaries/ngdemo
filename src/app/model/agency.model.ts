/**
 * Provides a `Agency` object
 */
export class Agency {
    constructor(
        public id: string,
        public name: string,
        public address: string,
        public logoUrl: string,
        public category: string[],
        public rating: number
    ) { }
}

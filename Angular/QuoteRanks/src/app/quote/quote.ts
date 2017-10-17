export class Quote {
    constructor(
        public theQuote: string = '',
        public author: string = '',
        public createdAt: Date = new Date(),
        public id: number = undefined,
        public likes: number = 0,
        public erased: boolean = false,
    ){}
}
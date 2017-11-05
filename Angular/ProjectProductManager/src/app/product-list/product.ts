export class Product{
    constructor(
        public theProduct: string = '',
        public price: number = undefined,
        public id: number = undefined,
        public erased: boolean = false,

    ){}
}
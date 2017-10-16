export class User {
    constructor(
        public id: number = null,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public password: string = '',
        public lucky: boolean = undefined,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date(),
    ){}
}

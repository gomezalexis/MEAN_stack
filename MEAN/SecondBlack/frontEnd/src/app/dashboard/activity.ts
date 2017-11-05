import { User} from '../user/user';


export class Activity {
    constructor(
        public title: string = '',
        public description: string = '', 
        public tagged: User = undefined,

    ){}
}
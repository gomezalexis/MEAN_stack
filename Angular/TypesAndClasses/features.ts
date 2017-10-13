var myNum: number = 5;
var myString: string = "Hello Universe";
// Array of numbers
var myArr: Array<number> = [1,2,3,4];

var myObj1: {name: string} = { name:'Bill'};

var anythingVariable: any = "Hey";
var anythingVariable: any = 25;

var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo: Array<any> = [1, 'abc', true, 2];

const myObj2: {x: number, y: number} = { x: 5, y: 10 };

// object constructor 
class MyNode {
    val: number;

    constructor(val: number) {
        this.val = val;
    }
    doSomething(): void{
        var priv = 10;
    };
    return MyNode;
}());


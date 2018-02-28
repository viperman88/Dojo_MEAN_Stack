const myNum: number = 5;
const myString: string = "Hello Universe";
const myArr: number[] = [1,2,3,4];

let myObj: any = { name: 'Bill' };
myObj = { x: 5, y: 10 };

let anythingVariable: any = "Hey";
anythingVariable = 25; 

const arrayOne: boolean[] = [true, false, true, true]; 
const arrayTwo: any = [1, 'abc', true, 2];

// object constructor

class MyNode {
    private _priv: number;
    constructor(public val: number) {}
    doSomething(): void {
        this._priv = 10;
    };
};

const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(message: string): never {
	throw new Error(message);
}

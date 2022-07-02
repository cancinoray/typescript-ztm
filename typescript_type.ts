//boolean
let isCool : boolean = true;

//number
let age : number = 56;

//string
let eyeColor : string = 'brown';
let yourAge : string = `I'm not old, I'm only ${age}!`; //we can still use template string here!

//array
let pets : string[] = ['cats', 'dog', 'pigs']; //first way to declare an array
let pets2 : Array<string> = ['lion',  'dragon', 'lizard']; //second way of declaring the variable and the preffered one

//object
let wizard : object = {
    a : 'John'
}

//null and undefined
let noo : null = null;
let meh : undefined = undefined;

//tuple
let basket : [string, number];
basket = ['basketball' , 5]; // if the argument interchange you need to interchange in the declaration state as well

//Enumerbale
enum Size {Small = 1 , Medium = 2, Large = 3}; //after enum the word must be capitalized;
let sizeName : string = Size[2]; //Medium
let sizeName2 : number = Size.Small //1

//Any - !! BE CAREFULL //not recommended to use
let whatEver : any = 'uggghhhh';
whatEver = basket; 

//void - commonly used in the function, it expecting nothing to return
let sing = () : void => {
    console.log('lalalala');
    //return 'something' <- there will be an error, void - expecting nothing in return
}

//never
let error = () : never => { //it test 2 types (1) function never return (2) doesn't have an endpoint
    throw Error ('opps');
    //return 'Hellooo <- Err: It's returning something;
    //console.log('Helloo') <- Err: It has an endpoint (it will print and end the function)
}

//interface
interface RobotArmy { //first letter must be capitalized like in Enumerable
    count : number,
    type : string,
    magic : string
}
let fightArmyRobot = (robots : RobotArmy) => {
    console.log('FIGHT!')
}

// (robots : RobotArmy) = (robots : { count : number, type : string, magic : string }) //same!!

//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var yourAge = "I'm not old, I'm only ".concat(age, "!"); //we can still use template string here!
//array
var pets = ['cats', 'dog', 'pigs']; //first way to declare an array
var pets2 = ['lion', 'dragon', 'lizard']; //second way of declaring the variable and the preffered one
//object
var wizard = {
    a: 'John'
};
//null and undefined
var noo = null;
var meh = undefined;
//tuple
var basket;
basket = ['basketball', 5]; // if the argument interchange you need to interchange in the declaration state as well
//Enumerbale
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
; //after enum the word must be capitalized;
var sizeName = Size[2]; //Medium
var sizeName2 = Size.Small; //1
//Any - !! BE CAREFULL //not recommended to use
var whatEver = 'uggghhhh';
whatEver = basket;
//void - commonly used in the function, it expecting nothing to return
var sing = function () {
    console.log('lalalala');
    //return 'something' <- there will be an error, void - expecting nothing in return
};
//never
var error = function () {
    throw Error('opps');
    //return 'Hellooo <- Err: It's returning something;
    //console.log('Helloo') <- Err: It has an endpoint (it will print and end the function)
};

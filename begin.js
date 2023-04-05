let  x = 10;
console.log(x);
if(true){
    let x = 5;
    console.log(x);
}
console.log(x);
//const x=9; //Illegal declartation
// const s = "ranjith";
// //s = "ranjith";// Illegal
// console.log(s);
console.log(parseInt(10/4));

// Object
let obj = {
    'name':"Ranjith",
    'age':23    
};
console.log(obj.name,obj.age);
let p = undefined;
console.log(p);


function calci(x,y,op){
    if(op == '+')
    return x+y;
    else if(op == '-')
    return x-y;
    else if (op == '*')
    return x*y
    else if(op == '/')
    return (x/y,parseInt(x/y));
    else if (op == '%')
    return x%y;
    return "invalid operator";
}
console.log(calci(1,2,"/"));
let s = "Ranjith Reddy Gaddam";
console.log(s[1],s.charAt(1),s.slice(-7));
let c = s.replace(/ranjith/i,'Tiger');
console.log(c);

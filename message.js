
let friends = 100;

/*module.exports.hello = function(){
    console.log("Hello Nodes");
    console.log(friends);
};*/

module.exports.hello = ()=>{
    console.log("Hello Nodes");
    console.log(friends);
};

module.exports.bye = ()=>console.log("Adios")

module.exports = {
    friends:friends,
    welcome: ()=>console.log("Welcome to NodeJS course") 
}
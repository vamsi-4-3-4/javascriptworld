//object functions are called as methods

let spaceshiptomars={
name:"Space_Ship_oreo",
owner:"Vamsi",
speedExpected:5,
requiredSpeed:"",
requiresFuel:"",

defineRequirements:function(speed,fuel){
this.requiredSpeed=speed;
this.requiredFuel=fuel
console.log(`You need a space ship with\n\t ${speed} lakh km/hr \n\t ${fuel} million liters\n\torder taken by ${this.owner} SpaceShips`)
},

develop:function(){
console.log(`${this.owner} developed a spaceship\n\twith ${this.requiredSpeed} lakh km/hr speed\n\twith ${this.requiredFuel} million liters fuel capacity\n\tand its name is:${this.name}
`)
},


}


spaceshiptomars.defineRequirements(11,11)
spaceshiptomars.develop()
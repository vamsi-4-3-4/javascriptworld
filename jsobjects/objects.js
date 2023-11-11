let spaceshiptomars={
name:"Space_Ship_oreo",
owner:"Vamsi",
speedExpected:5,

develop:function(){
console.log(`
${this.owner} developed a spaceship 
with ${this.speedExpected} lakh km/hr
and its name is:${this.name}
`)
},




}

spaceshiptomars.speedExpected=100
spaceshiptomars.owner="Elon Musk"
spaceshiptomars.develop()

spaceshiptomars.speedExpected=60
spaceshiptomars.owner="Musk"
spaceshiptomars.develop()


console.log(spaceshiptomars)
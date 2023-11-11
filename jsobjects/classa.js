class Spacego{

constructor(name,speed,fuelcapacity,numberofengines){
this.name=name;
this.speed=speed;
this.numberofengines=numberofengines;
this.fuelcapacity=fuelcapacity

}


hi(name){
console.log(`hello ${name}\n\tWecome to spacego!!!\n\there is your menu...\n\t\t1.makePraposal`)
}

makePraposal(speed,fuelcapacity,numberofengines,name){
console.log(`
your specifications are\n\tfuel:${fuelcapacity} Million liters\n\tNumberofEngines:${fuelcapacity}\n\tspeed:${speed} Million km/hr`)
}



}

const a=new Spacego()
a.hi("Priya")
a.makePraposal(11,11,11)
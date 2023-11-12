let spaceshiptomars = {
  name: "Space_Ship_oreo",
  owner: "Vamsi",
  speedExpected: 5,
  developedOn: new Date("1998-02-18T04:20:57.949Z"),

  develop: function () {
    let currentDate = new Date();
    let daysAgoMilliseconds = currentDate - this.developedOn;
    let daysAgo = Math.floor(daysAgoMilliseconds / (1000 * 3600 * 24));
    let yearsAgo = Math.floor(daysAgo / 365);
    let remainingDays = daysAgo % 365;

    console.log(`
      ${this.owner} developed a spaceship 
      on ${this.developedOn.toDateString()}
      ${yearsAgo} years and ${remainingDays} days ago
      with ${this.speedExpected} lakh km/hr
      and its name is: ${this.name}
    `);
  },
};

let dates = new Date();
console.log(dates);
spaceshiptomars.develop();

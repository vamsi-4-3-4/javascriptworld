const root=document.getElementById("root")




const movingMarstoMoon=[
"Say to your alien wife that we are moving to mars",
"Build A SpaceShip in Mars with your alien wife",
"Fireup Space Ship in Mars", 
"Drive the Space Ship",
"Land In Moon",
"Buy a leyss in moon",
"open that leyss and lauch air in pack to earth",
"eat leyss in moon light",
"Go back to Mars."
]

var i=0
const process=movingMarstoMoon.map(step=>`<p>STEP_${++i}:${step}</p>`)
root.innerHTML=process.join('')
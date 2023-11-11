import movingMarstoMoon from './landinginmoon.js'

const root=document.getElementById("root")
console.log(movingMarstoMoon)

var i=0


const process=movingMarstoMoon.map(step=>`<p>STEP_${++i}:${step}</p>`)
root.innerHTML=process.join('')
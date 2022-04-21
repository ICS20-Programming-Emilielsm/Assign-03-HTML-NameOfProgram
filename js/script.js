"use strict"

/**
 * This function calculates area and perimeter of rectangle.
 */
function calcTime() {
  // get user input
  let speed = parseFloat(document.getElementById("speed").value)
  let distance = parseFloat(document.getElementById("distance").value)
  
  // calculate the volume
  let totalTime  = distance / speed

  
  // display the results
  document.getElementById("totalTime").innerHTML = " Your Time is  " + totalTime.toFixed(2)
}

function calcSpeed () {
// get user input
  let time = parseFloat(document.getElementById("time").value)
  let distance = parseFloat(document.getElementById("distance").value)
  
  // calculate the volume
  let totalSpeed = distance / time

  
  // display the results
  document.getElementById("totalSpeed").innerHTML = " You speed is " + totalSpeed.toFixed(2)
}
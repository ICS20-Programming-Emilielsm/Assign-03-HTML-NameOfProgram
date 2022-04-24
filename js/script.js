"use strict"
// Calculations for Time
function calcTime() {
  // get user input
  let speed = parseFloat(document.getElementById("speed").value)
  let distance = parseFloat(document.getElementById("distance").value)
  
  // calculate the volume
  let totalTime  = distance / speed

  
  // display the results
  document.getElementById("totalTime").innerHTML = " Your Time in hours is " + totalTime.toFixed(2)
}

// Calculations for Speed
function calcSpeed () {
// get user input
  let time = parseFloat(document.getElementById("time").value)
  let distance2 = parseFloat(document.getElementById("distance2").value)
  
  // calculate the volume
  let totalSpeed = distance2 / time

  
  // display the results
  document.getElementById("totalSpeed").innerHTML = " Your speed in km/h is " + totalSpeed.toFixed(2)
}

// Calculations for Distance
  function calcDistance () {
// get user input
  let time2 = parseFloat(document.getElementById("time2").value)
  let speed2 = parseFloat(document.getElementById("speed2").value)
  
  // calculate the volume
  let totalDistance = time2 * speed2

  
  // display the results
  document.getElementById("totalDistance").innerHTML = " Your distance in km is " + totalDistance.toFixed(2)
}
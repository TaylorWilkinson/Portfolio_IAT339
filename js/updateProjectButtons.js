$("#studious-button").on('click', function(){
  var x = document.getElementById("studious-button").getAttribute("aria-expanded");
  if (x == "true") {
    document.getElementById("studious-button").innerHTML = "READ MORE";
  } else {
    document.getElementById("studious-button").innerHTML = "HIDE DETAILS";
  }
})

$("#retrofit-button").on('click', function(){
  var y = document.getElementById("retrofit-button").getAttribute("aria-expanded");
  if (y == "true") {
    document.getElementById("retrofit-button").innerHTML = "READ MORE";
  } else {
    document.getElementById("retrofit-button").innerHTML = "HIDE DETAILS";
  }
})

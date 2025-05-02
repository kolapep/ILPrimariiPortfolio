// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {

// Display the saved "name" value from localStorage
document.querySelector("#nameOption").innerHTML = localStorage.getItem("name");


});
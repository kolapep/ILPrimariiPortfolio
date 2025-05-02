// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Save the value of the "name" input field to localStorage on keyup
    document.querySelector("#name").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("name", val);
    });

});
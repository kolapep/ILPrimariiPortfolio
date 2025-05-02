// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Save the selected Image style to localStorage
    let buttonOption = document.querySelector('#buttonOption');
    buttonOption.addEventListener('change', function () {
        localStorage.setItem("button", this.value);
    });
   
   });
   
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    const previewImage = document.querySelector('#previewImage');
    const buttonOption = document.querySelector('#buttonOption');
    const savedImage = localStorage.getItem("button");

    if (savedImage) {
        previewImage.src = savedImage;
        if (buttonOption) {
            buttonOption.value = savedImage;
        }
    }

});
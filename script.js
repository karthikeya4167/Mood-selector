document.getElementById("mood-selector").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    document.body.style.backgroundColor = selectedOption.value;
    document.getElementById("mood-text").textContent = selectedOption.getAttribute("data-text");
    document.getElementById("mood-tip").textContent = selectedOption.getAttribute("data-tip");
    document.getElementById("mood-tip").style.opacity = 1;
    document.getElementById("mood-tip").style.transform = "scale(1.1)";
    setTimeout(() => {
        document.getElementById("mood-tip").style.transform = "scale(1)";
    }, 500);
    document.getElementById("mood-text").style.transform = "scale(1.2)";
    setTimeout(() => {
        document.getElementById("mood-text").style.transform = "scale(1)";
    }, 500);
    
    document.querySelectorAll(".sparkle").forEach((sparkle, index) => {
        sparkle.textContent = selectedOption.getAttribute("data-emoji");
    });
});
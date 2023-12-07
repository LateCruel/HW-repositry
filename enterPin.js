document.addEventListener('DOMContentLoaded', function() {
    const currentPin = sessionStorage.getItem("currentPin");
    
    let enteredPin = "";

    window.enterDigit = function(digit) {
        if (enteredPin.length < 4) {
            enteredPin += digit;
            document.getElementById("pinInput").value = "*".repeat(enteredPin.length);
        }
    };

    window.checkPin = function() {
        if (enteredPin === currentPin) {
            navigate("navigate.html");
        } else {
            alert("Neteisingas PIN");
        }
    };

    window.backspace = function() {
        enteredPin = enteredPin.slice(0, -1);
        updatePinDisplay();
    };

    function updatePinDisplay() {
        document.getElementById("pinInput").value = "*".repeat(enteredPin.length);
    }
});

window.goBack = function() {
    navigate('main.html');
};

function navigate(page) {
    window.location.href = page;
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    let enteredPin = "";

    window.enterDigit = function(digit) {
        if (enteredPin.length < 4) {
            enteredPin += digit;
            document.getElementById("pinInput").value = "*".repeat(enteredPin.length);
        }
    };

    window.changePin = function() {
        if (enteredPin.length === 4) {
            showMessage("PIN pakeistas. Grįžtama...");
            saveNewPin(enteredPin);
            goBack();
        } else {
            showMessage("Neteisingas PIN. Bandykite dar kartą.");
            enteredPin = "";
            document.getElementById("pinInput").value = "";
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

function showMessage(message) {
    document.getElementById("message").innerText = message;
}

function goBack() {
    navigate('enterPin.html');
}

function navigate(page) {
    window.location.href = page;
}

function saveNewPin(newPin) {
    sessionStorage.setItem("currentPin", newPin);
    window.currentPin = newPin;
}

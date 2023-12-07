document.addEventListener('DOMContentLoaded', function() {
    window.currentPin = "1111";
});

function insertCard() {
    sessionStorage.setItem("currentPin", window.currentPin);
    navigate('enterPin.html');
}

function navigate(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function () {
    let balance = sessionStorage.getItem("balance");

    balance = balance ? parseInt(balance) : 1000;

    window.balance = balance;
});

function withdraw(amount) {
    if (window.balance >= amount) {
        window.balance -= amount;
        updateBalance();
        showMessage(`Išimta ${amount}$. Balansas: ${window.balance}$`);
    } else {
        showMessage("Nepakankamas balansas");
    }
}

function checkBalance() {
    let balance = sessionStorage.getItem("balance");

    balance = balance ? parseInt(balance) : 1000;

    showMessage(`Balansas: ${balance}$`);
}

function updateBalance() {

    sessionStorage.setItem("balance", window.balance);
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
}

function navigate(page) {
    window.location.href = page;
    return false;
}

function loadWithdrawPage() {
    window.location.href = `withdraw.html?balance=${window.balance}`;
}

function ejectCard() {
    navigate('main.html');
}

document.addEventListener('DOMContentLoaded', function() {
    let balance = sessionStorage.getItem("balance");

    balance = balance ? parseInt(balance) : 1000;

    window.balance = balance;
});

function deposit() {
    let depositAmount = document.getElementById("depositAmount").value;
    depositAmount = parseInt(depositAmount);

    if (!isNaN(depositAmount) && depositAmount >= 5 && depositAmount % 5 === 0) {
        updateBalance(depositAmount);
        showMessage(`Įnešta ${depositAmount}$. Balansas: ${window.balance}$`);
    } else {
        showMessage("Netinkama suma");
    }
}

function updateBalance(amount) {
    window.balance += amount;
    sessionStorage.setItem("balance", window.balance);
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
    setTimeout(() => {
        document.getElementById("message").innerText = "Įveskite sumą";
    }, 3000);
}

function navigateBack() {
    window.location.href = 'navigate.html?balance=' + window.balance;
    return false;
}
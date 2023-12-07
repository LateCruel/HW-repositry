document.addEventListener('DOMContentLoaded', function() {
    let balance = sessionStorage.getItem("balance");

    balance = balance ? parseInt(balance) : 1000;

    window.balance = balance;
});

function withdrawAmount(amount) {
    if (window.balance >= amount) {
        updateBalance(-amount);
        showMessage(`Išimta ${amount}$. Balansas: ${window.balance}$`);
    } else {
        showMessage("Nepakankamas balansas");
    }
}

function customWithdraw() {
    let customAmount = prompt("Įveskite sumą:");
    customAmount = parseInt(customAmount);

    if (!isNaN(customAmount) && customAmount >= 5 && customAmount % 5 === 0 && customAmount <= window.balance) {
        updateBalance(-customAmount);
        showMessage(`Išimta ${customAmount}$. Balansas: ${window.balance}$`);
    } else {
        showMessage("Netinkama suma");
    }
}

function updateBalance(amount) {
    window.balance += amount;
    document.getElementById("balanceDisplay").innerText = `Balansas: ${window.balance}$`;

    sessionStorage.setItem("balance", window.balance);
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
    setTimeout(() => {
        document.getElementById("message").innerText = "Pasirinkite sumą";
    }, 3000);
}

function navigate(page) {
    window.location.href = page + "?balance=" + window.balance;
    return false;
}

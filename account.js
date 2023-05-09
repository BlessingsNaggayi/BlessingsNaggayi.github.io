
class Account {

    #accountName;

    #deposit;

    static accountInfoList = [];

    constructor(accountName, deposit) {

        this.#accountName = accountName;
        this.#deposit = deposit;

    }

    getAccountName() {
        return this.#accountName;

    }

    getDeposit() {
        return this.#deposit;
    }

    deposit(amount) {
        this.#deposit += parseInt(amount);
    }

    debit(amount) {
        this.#deposit -= parseInt(amount);
    }

}

Account.accountInfoList = [];
const button = document.getElementById("button");
const accnt = new Account(accountName, deposit);

function createAccount() {

    const accountName = document.getElementById("acctname").value;
    const deposit = document.getElementById("depst").value;

    if (!accountName || !deposit) {
        alert("Please provide both account name and deposit amount");
        return;
    }

    
    Account.accountInfoList.push(accnt);

    const textarea = document.getElementById("acctlist");
    textarea.innerHTML = '';

    Account.accountInfoList.forEach((accnt) => {
        textarea.innerHTML += `Account Name: ${accnt.getAccountName()}, Balance: $${accnt.getDeposit()}\n`;

    });

}
button.addEventListener("click", createAccount);

const depositButton = document.getElementById("depositBtn");

depositButton.addEventListener("click", inputDeposit);





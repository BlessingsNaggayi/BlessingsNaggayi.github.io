
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

    // debit(amount) {
    //     this.#balance -= amount;
    //     return true;

    // }


}

const accountList = Account.accountInfoList;
const button = document.getElementById("button");

const depositButton = document.getElementById("depositBtn");
const debitButton = document.getElementById("debitBtn");
const amtInputElem = document.getElementById("transaction-amount");

function createAccount() {

    const accountName = document.getElementById("acctname").value;
    const deposit = document.getElementById("depst").value;
    const accnt = new Account(accountName, deposit);

    if (!accountName || !deposit) {
        alert("Please provide both account name and deposit amount");
        return;
    }

    const textarea = document.getElementById("acctlist");
    textarea.innerHTML = '';


    accountList.push(accnt);
    Account.accountInfoList.forEach((accnt) => {
        textarea.innerHTML += `Account Name: ${accnt.getAccountName()}, Balance: $${accnt.getDeposit()}\n`;

    });

}


button.addEventListener("click", createAccount);

const acctSelectElem = document.getElementById("acctselect")

acctSelectElem.addEventListener("change", function () {
    amtInputElem.disabled = false;
    depositButton.disabled = false;
    debitButton.disabled = false;
});


depositButton.addEventListener("click", function () {

    const acctIndex = acctSelectElem.selectedIndex;
    const amount = Number(amtInputElem.value);
    const account = accountList[acctIndex];
    account.deposit(amount);
    displayList();
});

debitButton.addEventListener("click", function () {
    const acctIndex = acctSelectElem.selectedIndex;
    const amount = Number(amtInputElem.value);
    const account = accountList[acctIndex];
    const success = account.debit(amount);
    if (success) {
        displayList();
    } else {
        alert("Insufficient funds.");
    }
});








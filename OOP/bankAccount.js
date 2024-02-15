class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`You deposited $${amount}. New Balance: ${this.balance}`);
    } else {
      console.log('Cannot deposit a negative amount');
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(
        `You cannot withdraw more than your balance of: $${this.balance}`
      );
    } else {
      this.balance -= amount;
      console.log(
        `You withdrew $${amount}. Remaining Balance: $${this.balance}`
      );
    }
  }
}

#virtual atm
#
#Thomas Wolf
#12/4/19

import atm

def main():
    start_balance=float(input("Enter your starting balance:"))

    #Creating the atm object
    savings=atm.ATM(start_balance)

    #Deposit paycheck
    pay=float(input("Enter paycheck"))

    #name of the object . method name
    savings.deposit(pay)

    #Display updated balance
    print(savings)

    #Withdraw funds
    cash=float(input("Enter amount to withdraw"))
    savings.withdraw(cash)

    #Updated balance
    print(savings)
main()

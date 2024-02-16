#atm
#
#Thomas Wolf
#12/4/19

class ATM:
    def __init__(self,bal):
        self.__balance=bal
        
    def deposit(self,amount):
        self.__balance += amount
        
    def withdraw(self,amount):
        if self.__balance >= amount:
            self.__balance -= amount
        else:
            print("BEGONE")
            
    def check_balance(self):
        return self.__balance

    def __str__(self):
        return "The Balance is $"+format(self.__balance,'.2f')

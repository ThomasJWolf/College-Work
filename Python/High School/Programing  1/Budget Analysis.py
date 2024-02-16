#Thomas Wolf
#11/26/2018
#Budget Analysis

budget=float(input("How much money have you budgeted for a month?"))
#expenses=input("Do you have any expenses?")
total=0
num_expenses=float(input("how many expenses do you have?"))
for i in range(num_expenses):
    exp_cost=float(input("Enter the cost of your expenses:"))
    total=total+exp_cost
#while expenses==("yes" or "Yes" or "YES"):
    #exp_cost=float(input("Enter the cost of your items"))
    #total=total+exp_cost
    #expenses=input("Do you have any more expenses to enter?")
if total>budget:
    print("You are over budget")
    print("Your total is",total)
elif budget>total:
    print("You are under budget")
    print("Your total is",total)
else:
    print("Your budget and total are the same")
    print("Your total is",total)
    

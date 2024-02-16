#Test Boot Camp
#Test
#Thomas Wolf
#8/30/19
#Sources:NONE

import random
expence_total=0
expence_num=int(input("How many expences do you have?"))
print("-------------")
for i in range(expence_num):
    expence=str(input("What is the expence?"))
    expence_cost=float(input("How much did the expence cost?"))
    expence_total=expence_total+expence_cost
    print("-------------")
    print("Expence \t Cost")
    print(expence,'\t\t','$',expence_cost)
    print("-------------")
print("Your total monthly cost is ",expence_total,sep='$')
print("-------------")
expence_annual=expence_total*12
print("Your annual total is ",expence_annual,sep='$')
print("-------------")
monthly_budget=random.randint(1,1501)
print("your monthly budget is ",monthly_budget,sep='$')
print("-------------")
if monthly_budget>expence_total:
    print("You are under budget")
elif monthly_budget<expence_total:
    print("You are over budget")
else:
    print("You are spot on")

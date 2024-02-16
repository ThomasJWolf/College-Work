#Thomas Wolf
#1/17/2019
#Final Exam Practace

import random
base_bonus=200.00
again="y"
while again=="y":
    name=input("What is your name?")
    quota=float(input("what is your quota?"))
    if quota<=1500 or quota>=3000:
        print("ERROR, try again")
        quota=float(input("what is your quota?"))
    sales=random.randint(1,4501)
    if sales>quota:
        over=sales-quota
        add_bonus=over*.10
        total_bonus=base_bonus+add_bonus
    if sales<quota:
        under=quota-sales
        owe=under*.01
        total_bonus=base_bonus-owe
    print(name)
    print(quota)
    print(sales)
    print(total_bonus)
    again=input("Would you like to continue? y or n")
print("Thank you for using my program")

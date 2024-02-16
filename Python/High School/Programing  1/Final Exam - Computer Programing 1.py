#Thomas Wolf
#1/23/2019
#Final Exam - Computer Programing 1

import random#imports the random modual
bonus=900.00#sets bonus to 900.00
again=("y")#sets again to y
while again=="y":#checks if again=y
    name=input("What is your name?")#askes the user to input there name
    quota=float(input("What is your quota?"))#askes the user to input there quota
    if quota>2500 or quota<1000:#checks to see if the quota in in the proper range
        print("ERROR, quota not in range")#tells the user if the quota in in range or not
    sales=random.randint(1,10001)#sets sales to a random number between 1 and 10000
    if sales>quota:#checks to see if sales is grater than quota
        over_under=(sales-quota)*.25#subtracts qutoa from sales and multiplies it by .25
    elif sales<quota:#checks to see if quota is grater than sales
        over_under=(quota-sales)*-.10#subtracts sales from quota and multiplies it by -.10
    total=sales+over_under#adds sales and over_under together
    print("The employe's name is",name)#displayes the employe's name
    print("The employe's quota is",quota)#displayes the employe's quota
    print("The employe's sales are",sales)#displayes the employe's sales
    print("The employe's total bonus is",total)#displayes the employe's total
    again=input("Would you like to run this program again? y or n")#asks the user if they want to run the program again
print("Thank you for running tthis program")#thanks the user for running the program

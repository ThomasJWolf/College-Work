#Enrichment Program: BMI
#A quick program to help the user calculate their BMI
#Thomas Wolf
#8/27/19
#Sources:NONE
weight=float(input("Enter your weight(pounds):"))
height=float(input("Enter your height(inches):"))
bmi=weight*703/height**2
print("You're BIM is",format(bmi,'.2f'))
if bmi<18.5:
    print("You are underweight")
elif bmi>25:
    print("You are overweight")
else:
    print("You are considered to be optimal")



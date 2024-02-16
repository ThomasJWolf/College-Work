#User Interaction Program example
#Thomas Wolf
#8/23/19
#Sources: NONE
#Utilizing input/output, if/elif/else statements, and looping.

begin='yes'
while begin=='yes':
    #user input statements
    name=str(input("Enter your name:"))
    age=int(input("Enter your age:"))
    grade=int(input("Enter your grade:"))
    #Provent grave outside of range
    if grade<9 or grade>12:
        print("Error: not in range")
        while grade<9 or grade>12:
            grade=int(input("Enter your grade:"))
    elif grade==9:
        print("You're a Freshman")
    elif grade==10:
        print("You're a Sophomore")
    elif grade==11:
        print("You're a Junior")
    else:
        print("You're a Senior")
    begin=str(input("Would you like to continue"))
print("Thank you for using my program")


#User Interaction Program example
#Thomas Wolf
#8/23/19
#Sources: NONE
#Utilizing input/output, if/elif/else statements, and looping.

start='yes'
while start=='yes':
    name=str(input("What is your name?"))
    classs=str(input("What class are you asking about"))
    grade=int(input("What is your grade in the class"))
    if grade<0 or grade>100:
        print("Not a valid grade, please try again")
        grade=int(input("What is your grade in the class"))
    elif grade>=90 and grade<=100:
        print("you have a A")
    elif grade>=80 and grade<=89:
        print("you have a B")
    elif grade>=70 and grade<=79:
        print("you have a C")
    elif grade>=60 and grade<=69:
        print("you have a D")
    else:
        print("you have a F")
    start=str(input("Would you like to continue? yes or no"))
print("Thank you for using my program!")

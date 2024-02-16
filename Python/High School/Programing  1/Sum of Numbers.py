#Thomas Wolf
#11/30/2018
#Sum of Numbers

enter=0
total=0
numbers=0
while enter>=0:
    enter=int(input("How many numbers would you like to enter?"))
    for i in range(enter):
        numbers=float(input("Enter a positive number"))
        total=total+numbers
    enter=int(input("Would you like to enter any more numbers? 1=yes -1=no"))
    if enter==-1:
        print("Your final total is:",total)

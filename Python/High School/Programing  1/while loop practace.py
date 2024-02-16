#Thomas Wolf
#11/14/2018
#while loop practace

dob=int(input("Enter your date of birth(year only)"))
#under 18: 2001
#under 21: 1998
while dob>=2001:
    dob=int(input("Re-enter DOB. Not eligible."))
if dob<=2000 and dob>=1999:
    print("You can purchace the following")
    print("1. Tobacco Items")
    print("2. Lottery Tickets")
    purchase=input("Would you like to purchace an item? Yes or No")
    while purchase=="Yes":
        item_purchase=input("What item would you like to purchace?")
        if item_purchase=="tobacco items":
            print("You should not smoke")
        if item_purchase=="lottery tickets":
            print("Good luck")
        purchase=input("Would item would you like buy another item? Yes or No")
    if purchase=="No":
        print("Thank you for stopping in our store")
if dob<=1998:
    print("You can purchace the following")
    print("1. Tobacco Items")
    print("2. Lottery Tickets")
    print("3. Alcohol")
    purchase=input("Would you like to purchace an item? Yes or No")
    while purchase=="Yes":
        item_purchase=input("What item would you like to purchace?")
        if item_purchase=="Tobacco Items":
            print("You should not smoke")
        if item_purchase=="Lottery Tickets":
            print("Good luck")
        if item_purchase=="Alcohol":
            print("Be careful")
        purchase=input("Would item would you like buy another item? Yes or No")
    if purchase=="No":
        print("Thank you for stopping in our store")

